# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\test6contact.test.ts >> Contact Us Form
- Location: tests\AutomationExercise\test6contact.test.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('//div[@class=\'status alert alert-success\']')
Expected: visible
Received: hidden
Timeout:  15000ms

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('//div[@class=\'status alert alert-success\']')
    31 × locator resolved to <div class="status alert alert-success"></div>
       - unexpected value "hidden"

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Contact Us" [level=2]:
  - text: Contact
  - strong: Us
- text: "Note: Below contact form is for testing purpose."
- link "Software testing certifications":
  - img
  - text: Software testing certifications
- heading "Get In Touch" [level=2]
- textbox "Name"
- textbox "Email"
- textbox "Subject"
- textbox "Your Message Here"
- button "Choose File"
- button "Submit"
- heading "Feedback For Us" [level=2]
- paragraph: We really appreciate your response to our website.
- paragraph:
  - text: Kindly share your feedback with us at
  - link "feedback@automationexercise.com":
    - /url: mailto:feedback@automationexercise.com
  - text: .
- paragraph: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
- paragraph: Thank you
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
- img
- link "Go to shopping options for Video tutorial library": Video tutorial library
- button "Close shopping anchor"
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
  14 |   await page.locator('input[data-qa="email"]').fill('sowndariya@gmail.com');
  15 |   await page.locator('input[data-qa="subject"]').fill('Playwright Testing');
  16 |   await page.locator('textarea[data-qa="message"]').fill('This is a sample contact message.');
  17 | 
  18 |   await page.locator('input[name="upload_file"]')
  19 |     .setInputFiles('tests/AutomationExercise/sample.txt');
  20 | 
  21 |   await page.evaluate(() => {
  22 |     window.confirm = () => true;
  23 |   });
  24 | 
  25 |   await page.locator('input[data-qa="submit-button"]').click({ force: true });
  26 | 
  27 |   await expect(page.locator("//div[@class='status alert alert-success']"))
> 28 |     .toBeVisible({ timeout: 15000 });
     |      ^ Error: expect(locator).toBeVisible() failed
  29 | 
  30 |   await expect(page.locator("//div[@class='status alert alert-success']"))
  31 |     .toHaveText('Success! Your details have been submitted successfully.');
  32 | 
  33 |    await page.locator("//span[normalize-space()='Home']").click();
  34 |    await page.locator("//span[normalize-space()='Home']").screenshot({path:'pic.png'});
  35 |   await expect(page).toHaveURL('https://automationexercise.com/');
  36 | 
  37 | });
```