# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeActions\testtimeout.test.ts >> Test Timeout Example
- Location: tests\PracticeActions\testtimeout.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test("Test Timeout Example", async ({ page }) => {
  4  |     await page.goto("https://example.com");
> 5  |     await page.waitForTimeout(35000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  6  | });
  7  | 
  8  | 
  9  | //increase timeout
  10 | test("Example", async ({ page }) => {
  11 |     test.setTimeout(60000);
  12 | 
  13 |     await page.goto("https://example.com");
  14 |     await page.waitForTimeout(35000);
  15 | });
  16 | 
```