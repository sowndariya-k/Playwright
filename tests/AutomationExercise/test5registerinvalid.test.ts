import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');

  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await expect(page.locator('h2').filter({ hasText: 'New User Signup!' })).toBeVisible();

  await page.locator('input[data-qa="signup-name"]').fill('Sowndariya');

  await page.locator('input[data-qa="signup-email"]').fill(`sowndariya@gmail.com`);

  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.getByText('Email Address already exist!')).toBeVisible();
});
