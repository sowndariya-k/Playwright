# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\test6contact.test.ts >> Contact Us Form
- Location: tests\AutomationExercise\test6contact.test.ts:3:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: ' Home' }) resolved to 2 elements:
    1) <a href="/">…</a> aka getByRole('link', { name: ' Home' })
    2) <a href="/" class="btn btn-success">…</a> aka getByRole('link', { name: ' Home' })

Call log:
  - waiting for getByRole('link', { name: ' Home' })

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
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - text: "Note: Below contact form is for testing purpose."
          - link "Software testing tutorials" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: Software testing tutorials
        - heading "Get In Touch" [level=2] [ref=e51]
        - generic [ref=e52]: Success! Your details have been submitted successfully.
        - link " Home" [ref=e54] [cursor=pointer]:
          - /url: /
          - generic [ref=e55]:
            - generic [ref=e56]: 
            - text: Home
      - generic [ref=e58]:
        - heading "Feedback For Us" [level=2] [ref=e59]
        - generic [ref=e60]:
          - paragraph [ref=e61]: We really appreciate your response to our website.
          - paragraph [ref=e62]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e63] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e64]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e65]: Thank you
  - contentinfo [ref=e66]:
    - generic [ref=e71]:
      - heading "Subscription" [level=2] [ref=e72]
      - generic [ref=e73]:
        - textbox "Your email address" [ref=e74]
        - button "" [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: 
        - paragraph [ref=e77]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e81]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e83]:
    - generic [ref=e86]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e88]: Discover more
      - link "Programming" [ref=e89] [cursor=pointer]:
        - generic "Programming" [ref=e90]
        - img [ref=e92]
      - link "Software" [ref=e94] [cursor=pointer]:
        - generic "Software" [ref=e95]
        - img [ref=e97]
      - link "Development Tools" [ref=e99] [cursor=pointer]:
        - generic "Development Tools" [ref=e100]
        - img [ref=e102]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Contact Us Form', async ({ page }) => {
  4  | 
  5  |   // Step 1 & 2: Launch browser and navigate to URL
  6  |   await page.goto('https://automationexercise.com/');
  7  | 
  8  |   // Step 3: Verify that home page is visible successfully
  9  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  10 | 
  11 |   // Step 4: Click on 'Contact Us' button
  12 |   await page.getByRole('link', { name: ' Contact us' }).click();
  13 | 
  14 |   // Step 5: Verify 'GET IN TOUCH' is visible
  15 |   await expect(page.getByText('Get In Touch')).toBeVisible();
  16 | 
  17 |   // Step 6: Enter name, email, subject and message
  18 |   await page.locator('input[data-qa="name"]').fill('Sowndariya');
  19 |   await page.locator('input[data-qa="email"]').fill('sowndariya@gmail.com');
  20 |   await page.locator('input[data-qa="subject"]').fill('Playwright Testing');
  21 |   await page.locator('textarea[data-qa="message"]').fill('This is a sample contact message.');
  22 | 
  23 |   // Step 7: Upload file
  24 |   await page.locator('input[name="upload_file"]').setInputFiles('tests/AutomationExercise/sample.txt');
  25 | 
  26 |   // Step 9: Handle dialog (alert popup) — must be registered BEFORE click
  27 |   page.on('dialog', async (dialog) => {
  28 |     console.log(`Dialog type: ${dialog.type()}`);
  29 |     console.log(`Dialog message: ${dialog.message()}`);
  30 |     await dialog.accept();
  31 |   });
  32 | 
  33 |   // Step 8: Click Submit and wait for navigation/response together
  34 |   await Promise.all([
  35 |     page.waitForResponse(response =>
  36 |       response.url().includes('contact') && response.status() === 200
  37 |     ),
  38 |     page.locator('input[data-qa="submit-button"]').click({ force: true }),
  39 |   ]);
  40 | 
  41 |   // Step 10: Wait for .status to have text content (not just exist)
  42 |   await expect(page.locator('.status'))
  43 |     .toContainText('Success! Your details have been submitted successfully.', { timeout: 15000 });
  44 | 
  45 |   // Step 11: Click 'Home' button and verify landing on home page
> 46 |   await page.getByRole('link', { name: ' Home' }).click();
     |                                                   ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: ' Home' }) resolved to 2 elements:
  47 |   await expect(page).toHaveURL('https://automationexercise.com/');
  48 | 
  49 | });
```