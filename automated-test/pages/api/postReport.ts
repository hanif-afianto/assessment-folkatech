import { APIRequestContext } from '@playwright/test';
import * as fs from 'fs';

export class postReport {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async sendReport(
    token: string,
    reportCategoryId: string,
    fullname: string,
    gender: string,
    provinceId: string,
    tipeKorban: string,
    description: string,
    lat: string,
    lng: string,
    addressLocation: string,
    urgency: string,
    userfilePath: string
  ) {
    const response = await this.request.post('/api/report', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      multipart: {
        report_category_id: reportCategoryId,
        fullname,
        gender,
        province_id: provinceId,
        tipe_korban: tipeKorban,
        description,
        lat,
        lng,
        address_location: addressLocation,
        urgency,
        userfile: fs.createReadStream(userfilePath)  // Upload file
      }
    });

//    const postReport = await response.json();
    return await response;
  }
}
