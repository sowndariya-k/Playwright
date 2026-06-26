import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');

  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await expect(page.locator('h2').filter({ hasText: 'New User Signup!' })).toBeVisible();

  await page.locator('input[data-qa="signup-name"]').fill('Sowndariya');

  await page.locator('input[data-qa="signup-email"]').fill(`sowndariya50@gmail.com`);

  await page.getByRole('button', { name: 'Signup' }).click();

  await expect(page.getByText('Enter Account Information')).toBeVisible();

  await page.locator('#id_gender2').check();

  await page.locator('#password').fill('Sow@911!');

  await page.locator('#days').selectOption('24');
  await page.locator('#months').selectOption('6');
  await page.locator('#years').selectOption('2002');

  await page.locator('#newsletter').check();

  await page.locator('#optin').check();

  await page.locator('#first_name').fill('Sowndariya');

  await page.locator('#last_name').fill('K');

  await page.locator('#company').fill('Expleo');

  await page.locator('#address1').fill('123 Main Road');

  await page.locator('#address2').fill('Near Bus Stand');

  await page.locator('#country').selectOption('India');

  await page.locator('#state').fill('Tamil Nadu');

  await page.locator('#city').fill('Coimbatore');

  await page.locator('#zipcode').fill('641001');

  await page.locator('#mobile_number').fill('9876543210');

  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page.locator('b')).toContainText('Account Created!');

  await page.getByRole('link', { name: 'Continue' }).click();

  await expect(page.locator('#header')).toContainText('Logged in as Sowndariya');

  await page.getByRole('link', { name: 'Delete Account' }).click();

  await expect(page.locator('b')).toContainText('Account Deleted!');

  await page.getByRole('link', { name: 'Continue' }).click();
});