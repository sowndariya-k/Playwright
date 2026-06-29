# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Timeout\waits.test.ts >> Wait for Visibility
- Location: tests\Timeout\waits.test.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//span[text()=\'I am here\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//span[text()=\'I am here\']')

```

```yaml
- link:
  - /url: /dashboard.xhtml;jsessionid=node0p5vx1lp0nls9160fqio6ic14619709980.node0
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
- heading "Wait for Visibility (1 - 10 Sec)" [level=5]
- button "Click"
- heading "Wait for Invisibility (1 - 10 Sec)" [level=5]
- button "Click"
- button "I am about to hide"
- heading "Wait for Clickability" [level=5]
- button "Click First Button"
- button "Click Second"
- heading "Wait for Text Change (1 - 10 Sec)" [level=5]
- button "Click"
- button "I am going to change!"
- text: 2022 - All Rights Reserved
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
> 10 |     await expect(button).toBeVisible();
     |                          ^ Error: expect(locator).toBeVisible() failed
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
  38 |     await page.goto("https://leafground.com/waits.xhtml");
  39 | 
  40 |     await page.locator('button[name="j_idt87:j_idt98"]').click();
  41 | 
  42 |     const text = page.getByRole('button', { name: 'I am going to change!' });
  43 | 
  44 |     await expect(text).toContainText("Did you notice?");
  45 | 
  46 |     console.log("Text changed");
  47 | });
```