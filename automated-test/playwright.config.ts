import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  projects: [
    {
      name: 'Mobile',
      use: {
        trace: 'retain-on-failure',
        baseURL: 'https://appetize.io',
      },
    },
    {
      name: 'API',
      use: {
        baseURL: 'https://lapor.folkatech.com',
        extraHTTPHeaders: {
          'Accept': 'application/json',
        },
        trace: 'on',
      },
    },
  ],
});