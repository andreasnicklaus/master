import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'

// require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // workers: process.env.CI ? 1 : undefined,
  workers: 1,
  reporter: [['html'], ['json', { outputFile: 'playwright-report/test-results.json' }]],
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
    headless: !!process.env.CI
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge',
      },
    },
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
      },
    },
  ],

  webServer: {
    command: process.env.CI ? 'ng build && serve -s dist/ig-clone-angular/browser -l 4200' : 'ng serve',
    port: 4200,
    reuseExistingServer: !process.env.CI
  }
})
