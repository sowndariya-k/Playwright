# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\test6contact.test.ts >> Contact Us Form
- Location: tests\AutomationExercise\test6contact.test.ts:3:1

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\Sowndariya\Desktop\Expleo\Playwright\tests\files\sample.txt'
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - textbox "Name" [ref=e55]: Sowndariya
          - textbox "Email" [ref=e57]: sowndariya@gmail.com
          - textbox "Subject" [ref=e59]: Playwright Testing
          - textbox "Your Message Here" [active] [ref=e61]: This is a sample contact message.
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
  - contentinfo [ref=e75]:
    - generic [ref=e80]:
      - heading "Subscription" [level=2] [ref=e81]
      - generic [ref=e82]:
        - textbox "Your email address" [ref=e83]
        - button "" [ref=e84] [cursor=pointer]:
          - generic [ref=e85]: 
        - paragraph [ref=e86]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - generic [ref=e87]:
      - insertion [ref=e89]:
        - generic [ref=e92]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e94]: Discover more
          - link "Development Tools" [ref=e95] [cursor=pointer]:
            - generic "Development Tools" [ref=e96]
            - img [ref=e98]
          - link "Software" [ref=e100] [cursor=pointer]:
            - generic "Software" [ref=e101]
            - img [ref=e103]
          - link "Programming" [ref=e105] [cursor=pointer]:
            - generic "Programming" [ref=e106]
            - img [ref=e108]
      - paragraph [ref=e112]: Copyright © 2021 All rights reserved
  - text: 
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
> 21 |   await page.locator('input[name="upload_file"]').setInputFiles('tests/files/sample.txt');
     |   ^ Error: ENOENT: no such file or directory, stat 'C:\Users\Sowndariya\Desktop\Expleo\Playwright\tests\files\sample.txt'
  22 | 
  23 |   page.once('dialog', async dialog => {
  24 |     await dialog.accept();
  25 |   });
  26 | 
  27 |   await page.locator('input[data-qa="submit-button"]').click();
  28 | 
  29 |   await expect(page.getByText('Success! Your details have been submitted successfully.')).toBeVisible();
  30 | 
  31 |   await page.getByRole('link', { name: ' Home' }).click();
  32 | 
  33 |   await expect(page).toHaveURL('https://automationexercise.com/');
  34 | });
```