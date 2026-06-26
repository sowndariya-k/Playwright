# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\test6contact.test.ts >> Contact Us Form
- Location: tests\AutomationExercise\test6contact.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "dialog"
============================================================
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
          - link "Software testing certifications" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: Software testing certifications
        - heading "Get In Touch" [level=2] [ref=e51]
        - generic [ref=e53]:
          - textbox "Name" [ref=e55]
          - textbox "Email" [ref=e57]
          - textbox "Subject" [ref=e59]
          - textbox "Your Message Here" [ref=e61]
          - button "Choose File" [ref=e63]
          - button "Submit" [ref=e65] [cursor=pointer]
      - generic [ref=e67]:
        - heading "Feedback For Us" [level=2] [ref=e68]
        - generic [ref=e69]:
          - paragraph [ref=e70]: We really appreciate your response to our website.
          - paragraph [ref=e71]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e72] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e73]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e74]: Thank you
  - insertion [ref=e76]:
    - generic [ref=e79]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e81]: Discover more
      - link "Software" [ref=e82] [cursor=pointer]:
        - generic "Software" [ref=e83]
        - img [ref=e85]
      - link "Programming" [ref=e87] [cursor=pointer]:
        - generic "Programming" [ref=e88]
        - img [ref=e90]
      - link "Development Tools" [ref=e92] [cursor=pointer]:
        - generic "Development Tools" [ref=e93]
        - img [ref=e95]
  - contentinfo [ref=e97]:
    - generic [ref=e102]:
      - heading "Subscription" [level=2] [ref=e103]
      - generic [ref=e104]:
        - textbox "Your email address" [ref=e105]
        - button "" [ref=e106] [cursor=pointer]:
          - generic [ref=e107]: 
        - paragraph [ref=e108]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e112]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=e113]:
    - generic [ref=e114] [cursor=pointer]:
      - img [ref=e116]
      - link "Go to shopping options for Development Tools" [ref=e118]: Development Tools
    - button "Close shopping anchor" [ref=e119]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Contact Us Form', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://automationexercise.com/');
  6  | 
  7  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  8  | 
  9  |   await page.getByRole('link', { name: ' Contact us' }).click();
  10 | 
  11 |   await expect(page.getByText('Get In Touch')).toBeVisible();
  12 | 
  13 |   await page.locator('input[data-qa="name"]').fill('Sowndariya');
  14 | 
  15 |   await page.locator('input[data-qa="email"]').fill('sowndariya@gmail.com');
  16 | 
  17 |   await page.locator('input[data-qa="subject"]').fill('Playwright Testing');
  18 | 
  19 |   await page.locator('textarea[data-qa="message"]').fill('This is a sample contact message.');
  20 | 
  21 |   await page.locator('input[name="upload_file"]').setInputFiles('tests/AutomationExercise/sample.txt');
> 22 | const dialogPromise = page.waitForEvent('dialog');
     |                            ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  23 | 
  24 | await page.locator('input[data-qa="submit-button"]').click();
  25 | 
  26 | const dialog = await dialogPromise;
  27 | await dialog.accept();
  28 | 
  29 | await expect(page.locator('.status'))
  30 |   .toContainText('Success! Your details have been submitted successfully.');
  31 | 
  32 |   await page.getByRole('link', { name: ' Home' }).click();
  33 | 
  34 |   await expect(page).toHaveURL('https://automationexercise.com/');
  35 | });
```