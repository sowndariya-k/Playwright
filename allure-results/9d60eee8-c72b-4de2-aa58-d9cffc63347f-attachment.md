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
    - navigated to "https://www.google.com/search?q=Cypress&sca_esv=00e45183e994fb97&source=hp&ei=PZJCaufzDpqhnesP_JGmqAk&iflsig=ABILxe8AAAAAakKgTfzx9-BPcaFB2ftVTsGAZpAOvoQT&ved=0ahUKEwinhrzf5KyVAxWaUGcHHfyICZUQ4dUDCC4&…"

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
      - text: "IP address: 2409:40f4:3051:4fd8:b41f:728e:47cd:a344"
      - text: "Time: 2026-06-29T15:41:51Z"
      - text: "URL: https://www.google.com/search?q=Cypress&sca_esv=00e45183e994fb97&source=hp&ei=PZJCaufzDpqhnesP_JGmqAk&iflsig=ABILxe8AAAAAakKgTfzx9-BPcaFB2ftVTsGAZpAOvoQT&ved=0ahUKEwinhrzf5KyVAxWaUGcHHfyICZUQ4dUDCC4&uact=5&oq=Cypress&gs_lp=Egdnd3Mtd2l6IgdDeXByZXNzSFVQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCAKACAJgDAJIHAKAHALIHALgHAMIHAMgHAIAIAQ&sclient=gws-wiz&sei=PpJCareLFeTlseMPhvPWAQ"
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
  27 |     }
  28 | 
  29 | });
```