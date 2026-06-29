# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeActions\waits.test.ts >> Wait for Text Change
- Location: tests\PracticeActions\waits.test.ts:37:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('button[name="j_idt87:j_idt98"]')
Expected: "Did you notice?"
Received: "Click"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('button[name="j_idt87:j_idt98"]')
    14 × locator resolved to <button type="submit" role="button" id="j_idt87:j_idt98" aria-disabled="false" name="j_idt87:j_idt98" onclick="PrimeFaces.ab({s:"j_idt87:j_idt98",f:"j_idt87",u:"j_idt87:hide4"});return false;" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-button-danger mr-2 mb-2 ui-state-focus ui-state-hover">…</button>
       - unexpected value "Click"

```

```yaml
- button "Click"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Wait for Visibility", async ({ page }) => {
  4  |     await page.goto("https://leafground.com/waits.xhtml");
  5  | 
  6  |     await page.locator("//span[text()='Click']").first().click();
  7  | 
  8  |     const button = page.locator("//span[text()='I am here']");
  9  | 
  10 |     await expect(button).toBeVisible();
  11 | 
  12 |     console.log("Button is visible");
  13 | });
  14 | 
  15 | test("Wait for Invisibility", async ({ page }) => {
  16 |     await page.goto("https://leafground.com/waits.xhtml");
  17 | 
  18 |     await page.locator('button[name="j_idt87:j_idt92"]').click();
  19 | 
  20 |     const button = page.getByRole('button', { name: 'I am about to hide' });
  21 | 
  22 |     await expect(button).toBeHidden();
  23 | 
  24 |     console.log("Button disappeared");
  25 | });
  26 | 
  27 | test("Wait for Clickable", async ({ page }) => {
  28 |     await page.goto("https://leafground.com/waits.xhtml");
  29 | 
  30 |     await page.getByRole("button", { name: "Click First Button" }).click();
  31 | 
  32 |     await expect(page.getByText("Message 2")).toBeVisible();
  33 | 
  34 |     console.log("Message 2 is displayed.");
  35 | });
  36 | 
  37 | test("Wait for Text Change", async ({ page }) => {
  38 | 
  39 |     await page.goto("https://leafground.com/waits.xhtml");
  40 | 
  41 |     const button = page.locator('button[name="j_idt87:j_idt98"]');
  42 | 
  43 |     await button.click();
  44 | 
> 45 |     await expect(button).toHaveText("Did you notice?");
     |                          ^ Error: expect(locator).toHaveText(expected) failed
  46 | 
  47 |     console.log("Text changed");
  48 | 
  49 | });
```