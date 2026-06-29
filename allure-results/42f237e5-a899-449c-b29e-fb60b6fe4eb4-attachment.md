# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeActions\checkbox.test.ts >> Disabled Checkbox
- Location: tests\PracticeActions\checkbox.test.ts:26:1

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator:  locator('//div[@id=\'j_idt87:j_idt102\']')
Expected: disabled
Received: enabled
Timeout:  5000ms

Call log:
  - Expect "toBeDisabled" with timeout 5000ms
  - waiting for locator('//div[@id=\'j_idt87:j_idt102\']')
    13 × locator resolved to <div id="j_idt87:j_idt102" class="ui-selectbooleancheckbox ui-chkbox ui-widget">…</div>
       - unexpected value "enabled"

```

```yaml
- checkbox "Disabled" [disabled]
- text: Disabled
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Basic Checkbox", async ({ page }) => {
  4  |     await page.goto("https://leafground.com/checkbox.xhtml");
  5  | 
  6  |    await page.locator('.ui-chkbox-box').first().click();
  7  |     await expect(page.locator("input[type='checkbox']").first()).toBeChecked();
  8  | });
  9  | 
  10 | 
  11 | test("Ajax Checkbox", async ({ page }) => {
  12 |     await page.goto("https://leafground.com/checkbox.xhtml");
  13 | 
  14 |     await page.getByText("Ajax").click();
  15 | 
  16 |     await expect(page.locator(".ui-growl-message")).toContainText("Checked");
  17 | });
  18 | 
  19 | test("Favorite Languages", async ({ page }) => {
  20 |     await page.goto("https://leafground.com/checkbox.xhtml");
  21 | 
  22 |     await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  23 |     await page.locator('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-hover').click();
  24 | });
  25 | 
  26 | test("Disabled Checkbox", async ({ page }) => {
  27 |     await page.goto("https://leafground.com/checkbox.xhtml");
  28 | 
  29 |     const disabled = page.locator("//div[@id='j_idt87:j_idt102']");
  30 | 
> 31 |     await expect(disabled).toBeDisabled();
     |                            ^ Error: expect(locator).toBeDisabled() failed
  32 | });
  33 | 
  34 | 
  35 | test("Toggle Switch", async ({ page }) => {
  36 | 
  37 |     await page.goto("https://leafground.com/checkbox.xhtml");
  38 | 
  39 |     const toggle = page.locator(".ui-toggleswitch-slider");
  40 | 
  41 |     await toggle.click();
  42 | 
  43 |     const toggleInput = page.locator(".ui-toggleswitch input");
  44 | 
  45 |     await expect(toggleInput).toBeChecked();
  46 | 
  47 | });
  48 | 
  49 | 
  50 | test("Tri State Checkbox", async ({ page }) => {
  51 |     await page.goto("https://leafground.com/checkbox.xhtml");
  52 | 
  53 |     await page.locator(".ui-chkbox-box").nth(5).click();
  54 | });
  55 | 
  56 | 
  57 | test("Multiple Cities", async ({ page }) => {
  58 |     await page.goto("https://leafground.com/checkbox.xhtml");
  59 | 
  60 |     await page.locator("#j_idt87\\:multiple .ui-selectcheckboxmenu-trigger").click();
  61 | 
  62 |     const panel = page.locator("#j_idt87\\:multiple_panel");
  63 | 
  64 |     await panel.getByText("Paris", { exact: true }).click();
  65 |     await panel.getByText("London", { exact: true }).click();
  66 | 
  67 |     await expect(
  68 |         panel.locator("input[type='checkbox']").nth(2)
  69 |     ).toBeChecked();
  70 | 
  71 |     await expect(
  72 |         panel.locator("input[type='checkbox']").nth(3)
  73 |     ).toBeChecked();
  74 | });
```