# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\test2login.test.ts >> test
- Location: tests\AutomationExercise\test2login.test.ts:3:1

# Error details

```
Error: Login failed — account may have been deleted by a previous test run. Re-register first.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]: sowndariya51@gmail.com
        - textbox "Password" [ref=e45]: Sow@911!
        - paragraph [ref=e46]: Your email or password is incorrect!
        - button "Login" [ref=e47] [cursor=pointer]
    - heading "OR" [level=2] [ref=e49]
    - generic [ref=e51]:
      - heading "New User Signup!" [level=2] [ref=e52]
      - generic [ref=e53]:
        - textbox "Name" [ref=e54]
        - textbox "Email Address" [ref=e55]
        - button "Signup" [ref=e56] [cursor=pointer]
  - contentinfo [ref=e57]:
    - generic [ref=e62]:
      - heading "Subscription" [level=2] [ref=e63]
      - generic [ref=e64]:
        - textbox "Your email address" [ref=e65]
        - button "" [ref=e66] [cursor=pointer]:
          - generic [ref=e67]: 
        - paragraph [ref=e68]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e72]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e74]:
    - generic [ref=e77]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e79]: Discover more
      - link "Networking" [ref=e80] [cursor=pointer]:
        - generic "Networking" [ref=e81]
        - img [ref=e83]
      - link "Computer Security" [ref=e85] [cursor=pointer]:
        - generic "Computer Security" [ref=e86]
        - img [ref=e88]
      - link "Website analytics tools" [ref=e90] [cursor=pointer]:
        - generic "Website analytics tools" [ref=e91]
        - img [ref=e93]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://automationexercise.com/');
  6  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  7  | 
  8  |   await page.getByRole('link', { name: ' Signup / Login' }).click();
  9  |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  10 | 
  11 |   await page.locator('input[data-qa="login-email"]').fill('sowndariya51@gmail.com');
  12 |   await page.getByRole('textbox', { name: 'Password' }).click();
  13 |   await page.getByRole('textbox', { name: 'Password' }).fill('Sow@911!');
  14 |   await page.getByRole('button', { name: 'Login' }).click();
  15 | 
  16 |   await page.waitForLoadState('networkidle');
  17 | 
  18 |   const loginError = page.locator('.login-form p[style*="color: red"]');
  19 |   const hasError = await loginError.isVisible().catch(() => false);
  20 |   if (hasError) {
> 21 |     throw new Error('Login failed — account may have been deleted by a previous test run. Re-register first.');
     |           ^ Error: Login failed — account may have been deleted by a previous test run. Re-register first.
  22 |   }
  23 | 
  24 |   await expect(page.locator('#header')).toContainText('Logout', { timeout: 15000 });
  25 |   await expect(page.getByText('Logged in as')).toBeVisible({ timeout: 10000 });
  26 | 
  27 |   await page.getByRole('link', { name:' Delete Account' }).click();
  28 |   await expect(page.locator('b')).toContainText('Account Deleted!');
  29 |   await page.getByRole('link', { name: 'Continue' }).click();
  30 |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  31 | });
  32 | 
```