import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse';
import * as fs from 'fs';
import { loginAndGetToken } from '../utils/apiHelpers';
import { postReport } from '../pages/api/postReport';
import { ReportData } from '../utils/interfaces';

// Function to read CSV and parse it into ReportData[]
async function readCSV(filePath: string): Promise<ReportData[]> {
  const records: ReportData[] = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(parse({ columns: true }))
      .on('data', (row) => records.push(row))
      .on('end', () => resolve(records))
      .on('error', reject);
  });
}

// Reading CSV before tests
let datas: ReportData[];

test.beforeAll(async () => {
  datas = await readCSV('./test-data/reportData.csv');
});

test(`Hit API Create Tiket Laporan`, async ({ request }) => {
  
  // Use the token from the login
  const token = await loginAndGetToken(request, 'hanif@gmail.com', 'Password', '69');
  expect(token).toBeTruthy();

  const report = new postReport(request);

  // Iterate over the rows in the CSV and send reports
  for (const row of datas) {
    const response = await report.sendReport(
      token,
      row.reportCategoryId,
      row.fullname,
      row.gender,
      row.province_id,
      row.tipe_korban,
      row.description,
      row.lat,
      row.lng,
      row.address_location,
      row.urgency,
      row.userfilePath
    );

    const postReport = await response.json();
    
    // Validate positive and negative test cases
    if (row.tcType === 'positive') {
      expect(postReport).toEqual(expect.objectContaining({
        message: 'Data laporan berhasil dikirim.',
        status: true
      }));
      console.log(response);
    } else if (row.tcType === 'negative') {
      expect(response.status()).toBe(500);
      console.log(response);
    }
  }
});
