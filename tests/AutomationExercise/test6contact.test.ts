import { test, expect } from '@playwright/test';

test('Contact Us Form', async ({ page }) => {

  // Step 1 & 2: Launch browser and navigate
  await page.goto('https://automationexercise.com/');

  // Step 3: Verify home page
  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');

  // Step 4: Click Contact Us
  await page.getByRole('link', { name: ' Contact us' }).click();

  // Step 5: Verify GET IN TOUCH
  await expect(page.getByText('Get In Touch')).toBeVisible();

  // Step 6: Fill form fields
  await page.locator('input[data-qa="name"]').fill('Sowndariya');
  await page.locator('input[data-qa="email"]').fill('sowndariya@gmail.com');
  await page.locator('input[data-qa="subject"]').fill('Playwright Testing');
  await page.locator('textarea[data-qa="message"]').fill('This is a sample contact message.');

  // Step 7: Upload file
  await page.locator('input[name="upload_file"]')
    .setInputFiles('tests/AutomationExercise/sample.txt');

  // ✅ KEY FIX: Override window.confirm via JS to auto-return true
  // This bypasses the dialog entirely — no handler needed
  await page.evaluate(() => {
    window.confirm = () => true;
  });

  // Step 8: Click Submit
  await page.locator('input[data-qa="submit-button"]').click({ force: true });

  // Step 10: ✅ Wait for hidden div to become visible after successful submit
  await expect(page.locator("//div[@class='status alert alert-success']"))
    .toBeVisible({ timeout: 15000 });

  await expect(page.locator("//div[@class='status alert alert-success']"))
    .toHaveText('Success! Your details have been submitted successfully.');

  // Step 11: Go Home and verify URL
   await page.locator("//span[normalize-space()='Home']").click();
  await expect(page).toHaveURL('https://automationexercise.com/');

});