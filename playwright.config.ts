import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  globalSetup:'./auth.setup.ts',
  globalTeardown:'./global-cleanup',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 4 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 20 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['./reporters/custom.reporter.ts'],['html',{attachmentsBaseURL:'https://drive.google.com/drive/folders/1DsckgbOOXeGkikkJmZ1eIDoQzbuPyvKN?usp=drive_link' }],['json', { outputFile: 'results.json' }]],
  //reporter:'./reporters/custom.reporter.ts',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video:'on',
    screenshot: 'only-on-failure',
   
  },

  /* Configure projects for major browsers */
  projects: [

    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json',
      deviceScaleFactor: 1,
      viewport: { width: 2560, height: 1440 },
      },
      dependencies: ['setup'],
      fullyParallel: true,
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
      storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
      fullyParallel: true,
    },*/

   /* {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
      storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
     {
       name: 'MicrosoftEdge',
       use: { ...devices['Desktop Edge'], channel: 'msedge',storageState: 'playwright/.auth/user.json',deviceScaleFactor: 2,viewport: { width: 2560, height: 1440 }, },
       fullyParallel: true,
       dependencies: ['setup'],
     },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
