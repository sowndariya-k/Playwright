import { test, expect } from '@playwright/test';

test('Browser Navigation Test', async ({ page }) => {  // ← uses page fixture, no manual browser launch needed


  await page.goto('https://www.demoblaze.com/');
  console.log('Current URL 1:', page.url());


  await page.click('text=Samsung galaxy s6');
  await page.waitForLoadState();
  console.log('Current URL 2:', page.url());


  await page.goBack();
  await page.waitForLoadState();
  console.log('Current URL 3:', page.url());


  await page.goForward();
  await page.waitForLoadState();
  console.log('Current URL 4:', page.url());


  await page.reload();
  await page.waitForLoadState();
  console.log('Current URL 5:', page.url());

  await page.goBack();
  await page.waitForLoadState();
  console.log('Current URL 6:', page.url());

});