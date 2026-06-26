import { test, expect } from '@playwright/test';

test('Contact Us Form', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');

  await page.getByRole('link', { name: ' Contact us' }).click();

  await expect(page.getByText('Get In Touch')).toBeVisible();

  await page.locator('input[data-qa="name"]').fill('Sowndariya');
  await page.locator('input[data-qa="email"]').fill('sowndariya@gmail.com');
  await page.locator('input[data-qa="subject"]').fill('Playwright Testing');
  await page.locator('textarea[data-qa="message"]').fill('This is a sample contact message.');

  await page.locator('input[name="upload_file"]')
    .setInputFiles('tests/AutomationExercise/sample.txt');

  await page.evaluate(() => {
    window.confirm = () => true;
  });

  await page.locator('input[data-qa="submit-button"]').click({ force: true });

  await expect(page.locator("//div[@class='status alert alert-success']"))
    .toBeVisible({ timeout: 15000 });

  await expect(page.locator("//div[@class='status alert alert-success']"))
    .toHaveText('Success! Your details have been submitted successfully.');

   await page.locator("//span[normalize-space()='Home']").click();
   await page.locator("//span[normalize-space()='Home']").screenshot({path:'pic.png'});
  await expect(page).toHaveURL('https://automationexercise.com/');

});