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
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'status alert alert-success\']') to be visible
    54 × locator resolved to hidden <div class="status alert alert-success"></div>

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
      - link "Development Tools" [ref=e82] [cursor=pointer]:
        - generic "Development Tools" [ref=e83]
        - img [ref=e85]
      - link "Programming" [ref=e87] [cursor=pointer]:
        - generic "Programming" [ref=e88]
        - img [ref=e90]
      - link "Software" [ref=e92] [cursor=pointer]:
        - generic "Software" [ref=e93]
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
      - link "Go to shopping options for Programming" [ref=e118]: Programming
    - button "Close shopping anchor" [ref=e119]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Contact Us Form', async ({ page }) => {
  4  | 
  5  |   // Step 1 & 2: Launch browser and navigate
  6  |   await page.goto('https://automationexercise.com/');
  7  | 
  8  |   // Step 3: Verify home page
  9  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  10 | 
  11 |   // Step 4: Click Contact Us
  12 |   await page.getByRole('link', { name: ' Contact us' }).click();
  13 | 
  14 |   // Step 5: Verify GET IN TOUCH
  15 |   await expect(page.getByText('Get In Touch')).toBeVisible();
  16 | 
  17 |   // Step 6: Fill form fields
  18 |   await page.locator('input[data-qa="name"]').fill('Sowndariya');
  19 |   await page.locator('input[data-qa="email"]').fill('sowndariya@gmail.com');
  20 |   await page.locator('input[data-qa="subject"]').fill('Playwright Testing');
  21 |   await page.locator('textarea[data-qa="message"]').fill('This is a sample contact message.');
  22 | 
  23 |   // Step 7: Upload file
  24 |   await page.locator('input[name="upload_file"]').setInputFiles('tests/AutomationExercise/sample.txt');
  25 | 
  26 |   // Step 9: ✅ Handle confirm dialog BEFORE clicking submit
  27 |   page.on('dialog', async (dialog) => {
  28 |     console.log(`Dialog type: ${dialog.type()} | Message: ${dialog.message()}`);
  29 |     await dialog.accept();
  30 |   });
  31 | 
  32 |   // Step 8: Click Submit
  33 |   await page.getByRole('button', { name: 'Submit' }).click();
  34 | 
  35 |   // Step 10: ✅ Wait using your exact XPath until text is non-empty
> 36 |   await page.waitForSelector(
     |              ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  37 |     "//div[@class='status alert alert-success']",
  38 |     { state: 'visible', timeout: 30000 }
  39 |   );
  40 | 
  41 |   // ✅ Assert text using XPath locator
  42 |   await expect(page.locator("//div[@class='status alert alert-success']"))
  43 |     .toHaveText('Success! Your details have been submitted successfully.', { timeout: 15000 });
  44 | 
  45 |   // Step 11: Go Home and verify URL
  46 |   await page.getByRole('link', { name: ' Home' }).click();
  47 |   await expect(page).toHaveURL('https://automationexercise.com/');
  48 | 
  49 | });
```