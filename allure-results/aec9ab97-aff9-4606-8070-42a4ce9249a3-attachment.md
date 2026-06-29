# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Timeout\checkbox.test.ts >> Multiple Cities
- Location: tests\Timeout\checkbox.test.ts:57:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Paris') resolved to 2 elements:
    1) <label for="j_idt87:multiple:2">Paris</label> aka locator('[id="j_idt87:multiple"]').getByText('Paris')
    2) <label for="e469e2a0-3a35-48a2-8daa-6829e2dea3f8">Paris</label> aka locator('[id="j_idt87:multiple_panel"]').getByText('Paris')

Call log:
  - waiting for getByText('Paris')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: /dashboard.xhtml;jsessionid=node01njlj7pstv4j81ohf40h6gnx2y19710359.node0
      - text: 
      - link "" [ref=e5] [cursor=pointer]:
        - /url: "#"
        - generic [ref=e6]: 
    - generic [ref=e8]:
      - link [ref=e11] [cursor=pointer]:
        - /url: "#"
      - list [ref=e13]:
        - menuitem "" [ref=e14]:
          - link "" [ref=e15] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e16]: 
            - text: 
          - text:  
        - menuitem "" [ref=e17]:
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
            - text: 
          - text:    
        - menuitem "" [ref=e20]:
          - link "" [ref=e21] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e22]: 
            - text: 
          - text:       
        - menuitem "" [ref=e23]:
          - link "" [ref=e24] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e25]: 
            - text: 
          - text:    
        - menuitem "" [ref=e26]:
          - link "" [ref=e27] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e28]: 
            - text: 
          - text:   
        - menuitem "" [ref=e29]:
          - link "" [ref=e30] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e31]: 
            - text: 
          - text:    
    - generic [ref=e33]:
      - tablist [ref=e34]:
        - tab "" [expanded] [selected] [ref=e35] [cursor=pointer]:
          - link "" [ref=e36]:
            - /url: "#j_idt44:j_idt45"
            - generic [ref=e37]: 
        - tab "" [ref=e38] [cursor=pointer]:
          - link "" [ref=e39]:
            - /url: "#j_idt44:j_idt48"
            - generic [ref=e40]: 
        - tab "" [ref=e41] [cursor=pointer]:
          - link "" [ref=e42]:
            - /url: "#j_idt44:j_idt57"
            - generic [ref=e43]: 
      - generic [ref=e44]:
        - tabpanel [ref=e45]:
          - generic [ref=e46]: Settings
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]: 
              - generic [ref=e51]: NEW TRAINING
            - generic [ref=e52]:
              - generic [ref=e53]: 
              - generic [ref=e54]: SUCCESS STORIES
            - generic [ref=e55]:
              - generic [ref=e56]: 
              - generic [ref=e57]: UPCOMING SESSION
            - generic [ref=e58]:
              - generic [ref=e59]: 
              - generic [ref=e60]: TOTAL LEARNERS
            - generic [ref=e61]:
              - generic [ref=e62]: 
              - generic [ref=e63]: REBOOT CAREER
            - generic [ref=e64]:
              - generic [ref=e65]: 
              - generic [ref=e66]: YOUR MENTORS
        - text:  
    - generic [ref=e68] [cursor=pointer]: 
    - generic [ref=e69]:
      - heading "Menu Type" [level=5] [ref=e70]
      - generic [ref=e71]:
        - generic [ref=e73]:
          - radio "Static"
        - generic [ref=e76] [cursor=pointer]: Static
        - generic [ref=e78]:
          - radio "Overlay"
        - generic [ref=e81] [cursor=pointer]: Overlay
        - generic [ref=e83]:
          - radio "Horizontal"
        - generic [ref=e86] [cursor=pointer]: Horizontal
        - generic [ref=e88]:
          - radio "Slim"
        - generic [ref=e91] [cursor=pointer]: Slim
        - separator [ref=e92]
        - heading "Menu Color" [level=5] [ref=e93]
        - generic [ref=e95]:
          - radio "Light"
        - generic [ref=e98] [cursor=pointer]: Light
        - generic [ref=e100]:
          - radio "Dark"
        - generic [ref=e103] [cursor=pointer]: Dark
        - generic [ref=e105]:
          - radio "Gradient" [checked]
        - generic [ref=e108] [cursor=pointer]: Gradient
        - separator [ref=e109]
        - heading "User Menu Type" [level=5] [ref=e110]
        - generic [ref=e112]:
          - radio "Inline" [checked]
        - generic [ref=e115] [cursor=pointer]: Inline
        - generic [ref=e117]:
          - radio "Top"
        - generic [ref=e120] [cursor=pointer]: Top
        - separator [ref=e121]
        - heading "Input Style" [level=5] [ref=e122]
        - generic [ref=e124]:
          - radio "Outlined"
        - generic [ref=e127] [cursor=pointer]: Outlined
        - generic [ref=e129]:
          - radio "Filled" [checked]
        - generic [ref=e132] [cursor=pointer]: Filled
        - separator [ref=e133]
    - generic [ref=e134]:
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e137]: 
          - text: /
        - list [ref=e138]:
          - listitem [ref=e139]:
            - generic [ref=e140]: 
            - textbox "Search..." [ref=e141]
          - listitem [ref=e142]:
            - link "" [ref=e143] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e144]: 
          - listitem [ref=e145]:
            - link "" [ref=e146] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e147]: 
          - listitem [ref=e148]:
            - link "" [ref=e149] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e150]: 
      - generic [ref=e153]:
        - generic [ref=e154]:
          - generic [ref=e155]:
            - heading "Basic Checkbox" [level=5] [ref=e156]
            - generic [ref=e159]:
              - generic [ref=e160]:
                - checkbox "Basic"
              - generic [ref=e162] [cursor=pointer]: Basic
          - generic [ref=e163]:
            - heading "Notification" [level=5] [ref=e164]
            - generic [ref=e167]:
              - generic [ref=e168]:
                - checkbox "Ajax"
              - generic [ref=e170] [cursor=pointer]: Ajax
          - generic [ref=e171]:
            - heading "Choose your favorite language(s)" [level=5] [ref=e172]
            - generic [ref=e174]:
              - generic [ref=e176]:
                - checkbox "Java"
              - generic [ref=e178] [cursor=pointer]: Java
              - generic [ref=e180]:
                - checkbox "Python"
              - generic [ref=e182] [cursor=pointer]: Python
              - generic [ref=e184]:
                - checkbox "Javascript"
              - generic [ref=e186] [cursor=pointer]: Javascript
              - generic [ref=e188]:
                - checkbox "C-Sharp"
              - generic [ref=e190] [cursor=pointer]: C-Sharp
              - generic [ref=e192]:
                - checkbox "Others"
              - generic [ref=e194] [cursor=pointer]: Others
          - generic [ref=e195]:
            - heading "Tri State Checkbox" [level=5] [ref=e196]
            - generic [ref=e200]:
              - textbox: "0"
        - generic [ref=e202]:
          - generic [ref=e203]:
            - heading "Toggle Switch" [level=5] [ref=e204]
            - generic [ref=e206]:
              - checkbox
          - generic [ref=e208]:
            - heading "Verify if check box is disabled" [level=5] [ref=e209]
            - generic [ref=e212]:
              - generic [ref=e213]:
                - checkbox "Disabled" [disabled]
              - generic: Disabled
          - generic [ref=e214]:
            - heading "Select Multiple" [level=5] [ref=e215]
            - combobox [ref=e216] [cursor=pointer]:
              - list [ref=e218]
              - generic [ref=e220]: 
      - generic [ref=e225]: 2022 - All Rights Reserved
  - generic [ref=e226]: 
  - text:  
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Basic Checkbox", async ({ page }) => {
  4  |     await page.goto("https://leafground.com/checkbox.xhtml");
  5  | 
  6  |     const checkbox = page.locator("//div[@class='ui-chkbox-box ui-widget']");
  7  | 
  8  |     await checkbox.click();
  9  | 
  10 |     await expect(page.locator("input[type='checkbox']").first()).toBeChecked();
  11 | });
  12 | 
  13 | 
  14 | test("Ajax Checkbox", async ({ page }) => {
  15 |     await page.goto("https://leafground.com/checkbox.xhtml");
  16 | 
  17 |     await page.getByText("Ajax").click();
  18 | 
  19 |     await expect(page.locator(".ui-growl-message")).toContainText("Checked");
  20 | });
  21 | 
  22 | test("Favorite Languages", async ({ page }) => {
  23 |     await page.goto("https://leafground.com/checkbox.xhtml");
  24 | 
  25 |     await page.getByText("Java").click();
  26 |     await page.getByText("Python").click();
  27 | });
  28 | 
  29 | test("Disabled Checkbox", async ({ page }) => {
  30 |     await page.goto("https://leafground.com/checkbox.xhtml");
  31 | 
  32 |     const disabled = page.locator("input[disabled]");
  33 | 
  34 |     await expect(disabled).toBeDisabled();
  35 | });
  36 | 
  37 | 
  38 | 
  39 | test("Toggle Switch", async ({ page }) => {
  40 |     await page.goto("https://leafground.com/checkbox.xhtml");
  41 | 
  42 |     const toggle = page.locator(".ui-toggleswitch-slider");
  43 | 
  44 |     await toggle.click();
  45 | 
  46 |     await expect(page.locator("input[type='checkbox']").nth(5)).toBeChecked();
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
> 60 |     await page.getByText("Paris").click();
     |                                   ^ Error: locator.click: Error: strict mode violation: getByText('Paris') resolved to 2 elements:
  61 |     await page.getByText("London").click();
  62 | });
```