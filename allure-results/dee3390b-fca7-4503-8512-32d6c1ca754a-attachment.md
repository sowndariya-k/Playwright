# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeActions\radiobtn.test.ts >> Radio Button Example
- Location: tests\PracticeActions\radiobtn.test.ts:3:1

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator:  locator('input[type=\'radio\']').first()
Expected: checked
Received: unchecked
Timeout:  5000ms

Call log:
  - Expect "toBeChecked" with timeout 5000ms
  - waiting for locator('input[type=\'radio\']').first()
    13 × locator resolved to <input type="radio" value="static" id="config-form:j_idt62:0" name="config-form:j_idt62" onchange="PrimeFaces.bcn(this,event,[function(event){PrimeFaces.CaliforniaConfigurator.changeMenuMode(event.target.value)},function(event){PrimeFaces.ab({s:"config-form:j_idt62",e:"valueChange",f:"config-form",p:"config-form:j_idt62",u:"config-form topbarProfileForm sidebarProfileForm"});}])"/>
       - unexpected value "unchecked"

```

```yaml
- link:
  - /url: /dashboard.xhtml;jsessionid=node0iefzomj0lzzve02ncbwllf8r19727918.node0
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
- heading "Your most favorite browser" [level=5]
- radio "Chrome" [checked]
- text: Chrome
- radio "Firefox"
- text: Firefox
- radio "Safari"
- text: Safari
- radio "Edge"
- text: Edge
- heading "UnSelectable" [level=5]
- radio "Chennai"
- text: Chennai
- radio "Bengaluru"
- text: Bengaluru
- radio "Hyderabad"
- text: Hyderabad
- heading "Find the default select radio button" [level=5]
- radio "Chrome"
- text: Chrome
- radio "Firefox"
- text: Firefox
- radio "Safari" [checked]
- text: Safari
- radio "Edge"
- text: Edge
- heading "Select the age group (only if not selected)" [level=5]
- radio "1-20 Years"
- text: 1-20 Years
- radio "21-40 Years" [checked]
- text: 21-40 Years
- radio "41-60 Years"
- text: 41-60 Years 2022 - All Rights Reserved
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Radio Button Example", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://leafground.com/radio.xhtml");
  6  | 
  7  |     await page.getByText("Chrome", { exact: true }).first().click();
  8  | 
  9  |     const chromeRadio = page.locator("input[type='radio']").first();
  10 | 
> 11 |     await expect(chromeRadio).toBeChecked();
     |                               ^ Error: expect(locator).toBeChecked() failed
  12 | 
  13 |     console.log("Chrome selected");
  14 | 
  15 | });
```