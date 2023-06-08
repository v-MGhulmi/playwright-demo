import { chromium, FullConfig } from '@playwright/test';
import {LoginPage} from './pages/login.page'
const authFile = 'playwright/.auth/user.json';
const username = process.env.GITHUB_USERNAME ?? '';
const password = process.env.GITHUB_PASSWORD ?? '';

async function globalSetup() {
  const browser = await chromium.launch({headless:false,});
  const context = await browser.newContext();
  const page = await context.newPage();
  // Perform authentication steps. Replace these actions with your own.
  console.log(username)
  const loginpage = new LoginPage(page);
  await loginpage.gotologinpage();
  await loginpage.signIn(username,password);
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://github.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
  await page.close();
}
export default globalSetup;