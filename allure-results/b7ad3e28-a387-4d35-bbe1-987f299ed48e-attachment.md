# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeActions\checkbox.test.ts >> Multiple Cities
- Location: tests\PracticeActions\checkbox.test.ts:58:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#j_idt87\\:multiple_label')
Expected substring: "Paris"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#j_idt87\\:multiple_label')

```

```yaml
- link:
  - /url: /dashboard.xhtml;jsessionid=node01wtg3jlw1qk7e3v141vkzs3319727729.node0
- link "":
  - /url: "#"
- link:
  - /url: "#"
- list:
  - menuitem "":
    - link "":
      - /url: "#"
  - menuitem "":
    - link "":
      - /url: "#"
  - menuitem "":
    - link "":
      - /url: "#"
  - menuitem "":
    - link "":
      - /url: "#"
  - menuitem "":
    - link "":
      - /url: "#"
  - menuitem "":
    - link "":
      - /url: "#"
- tablist:
  - tab "" [expanded] [selected]:
    - link "":
      - /url: "#j_idt44:j_idt45"
  - tab "":
    - link "":
      - /url: "#j_idt44:j_idt48"
  - tab "":
    - link "":
      - /url: "#j_idt44:j_idt57"
- tabpanel: Settings  NEW TRAINING  SUCCESS STORIES  UPCOMING SESSION  TOTAL LEARNERS  REBOOT CAREER  YOUR MENTORS
- text: 
- heading "Menu Type" [level=5]
- radio "Static"
- text: Static
- radio "Overlay"
- text: Overlay
- radio "Horizontal"
- text: Horizontal
- radio "Slim"
- text: Slim
- separator
- heading "Menu Color" [level=5]
- radio "Light"
- text: Light
- radio "Dark"
- text: Dark
- radio "Gradient" [checked]
- text: Gradient
- separator
- heading "User Menu Type" [level=5]
- radio "Inline" [checked]
- text: Inline
- radio "Top"
- text: Top
- separator
- heading "Input Style" [level=5]
- radio "Outlined"
- text: Outlined
- radio "Filled" [checked]
- text: Filled
- separator
- text:  /
- list:
  - listitem:
    - text: 
    - textbox "Search..."
  - listitem:
    - link "":
      - /url: "#"
  - listitem:
    - link "":
      - /url: "#"
  - listitem:
    - link "":
      - /url: "#"
- heading "Basic Checkbox" [level=5]
- checkbox "Basic"
- text: Basic
- heading "Notification" [level=5]
- checkbox "Ajax"
- text: Ajax
- heading "Choose your favorite language(s)" [level=5]
- checkbox "Java"
- text: Java
- checkbox "Python"
- text: Python
- checkbox "Javascript"
- text: Javascript
- checkbox "C-Sharp"
- text: C-Sharp
- checkbox "Others"
- text: Others
- heading "Tri State Checkbox" [level=5]
- textbox: "0"
- heading "Toggle Switch" [level=5]
- checkbox
- heading "Verify if check box is disabled" [level=5]
- checkbox "Disabled" [disabled]
- text: Disabled
- heading "Select Multiple" [level=5]
- combobox:
  - list:
    - listitem:  Paris
    - listitem:  London
  - text: 
- text: 2022 - All Rights Reserved
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
  31 |     await expect(disabled).toBeDisabled();
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
  57 | 
  58 | test("Multiple Cities", async ({ page }) => {
  59 | 
  60 |     await page.goto("https://leafground.com/checkbox.xhtml");
  61 | 
  62 |     // Open the dropdown
  63 |     await page.locator("#j_idt87\\:multiple .ui-selectcheckboxmenu-trigger").click();
  64 | 
  65 |     // Click cities from the popup panel
  66 |     await page.locator("#j_idt87\\:multiple_panel")
  67 |         .getByText("Paris", { exact: true })
  68 |         .click();
  69 | 
  70 |     await page.locator("#j_idt87\\:multiple_panel")
  71 |         .getByText("London", { exact: true })
  72 |         .click();
  73 | 
  74 |     // Close the popup
  75 |     await page.keyboard.press("Escape");
  76 | 
  77 |     // Verify selected values
  78 |     await expect(page.locator("#j_idt87\\:multiple_label"))
> 79 |         .toContainText("Paris");
     |          ^ Error: expect(locator).toContainText(expected) failed
  80 | 
  81 |     await expect(page.locator("#j_idt87\\:multiple_label"))
  82 |         .toContainText("London");
  83 | });
```