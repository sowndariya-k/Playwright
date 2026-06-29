# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task\parameterize.test.ts >> Google Search Parameterized Test >> Search Flow - Cypress
- Location: tests\task\parameterize.test.ts:13:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h3').first()
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/search?q=Cypress&sca_esv=2ab59e100257b972&source=hp&ei=4CBCaqCuIYa7vr0PhsKaoQ0&iflsig=ABILxe8AAAAAakIu8DtRBThzPMElThVdOg2q3fOa3Acd&ved=0ahUKEwignqnR-KuVAxWGna8BHQahJtQQ4dUDCDE&…"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]:
        - checkbox "I'm not a robot" [ref=f2e7]
        - generic [ref=f2e11]: I'm not a robot
      - generic [ref=f2e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 49.206.117.252"
      - text: "Time: 2026-06-29T07:38:13Z"
      - text: "URL: https://www.google.com/search?q=Cypress&sca_esv=2ab59e100257b972&source=hp&ei=4CBCaqCuIYa7vr0PhsKaoQ0&iflsig=ABILxe8AAAAAakIu8DtRBThzPMElThVdOg2q3fOa3Acd&ved=0ahUKEwignqnR-KuVAxWGna8BHQahJtQQ4dUDCDE&uact=5&oq=Cypress&gs_lp=Egdnd3Mtd2l6IgdDeXByZXNzMggQABiABBixAzIFEAAYgAQyCBAuGIAEGLEDMgUQABiABDIIEC4YgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAuGIAEMgUQABiABEi-A1AAWABwAHgAkAEAmAGQAqABkAKqAQMyLTG4AQPIAQD4AQGYAgGgAr0CmAMAkgcDMy0xoAewCbIHAzMtMbgHvQLCBwM0LTHIByKACAE&sclient=gws-wiz&sei=4yBCasTWOvnBp84P3p6DoQQ"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const searchData = [
  4  |     { keyword: "Playwright", expectedTitle: "Playwright" },
  5  |     { keyword: "Selenium", expectedTitle: "Selenium" },
  6  |     { keyword: "Cypress", expectedTitle: "Cypress" }
  7  | ];
  8  | 
  9  | test.describe("Google Search Parameterized Test", () => {
  10 | 
  11 |     for (const data of searchData) {
  12 | 
  13 |         test(`Search Flow - ${data.keyword}`, async ({ page }) => {
  14 | 
  15 |             await page.goto("https://www.google.com");
  16 | 
  17 |             await page.locator('textarea[name="q"]').fill(data.keyword);
  18 |             await page.keyboard.press("Enter");
  19 | 
  20 |             const firstResult = page.locator("h3").first();
> 21 |             await firstResult.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 | 
  23 |             await expect(page).toHaveTitle(
  24 |                 new RegExp(data.expectedTitle, "i")
  25 |             );
  26 |         });
  27 | 
  28 |     }
  29 | 
  30 | });
```