import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const envName = process.env.ENV || 'qa';
dotenv.config({ path: `./env/.env.${envName}` });

export default defineConfig({
  testDir: './tests',
  //testMatch: [
  //  "**/group.test.ts",
  //  "**/tag.test.ts"
  //],
  //repeatEach:3,
  //retries:2,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report' }],
        ['allure-playwright']
    ],

  use: {
    headless: true, 
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
});
