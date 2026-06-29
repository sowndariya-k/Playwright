# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PracticeActions\radiobtn.test.ts >> Radio Button Example
- Location: tests\PracticeActions\radiobtn.test.ts:3:1

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//label[text()=\'Chrome\']') resolved to 2 elements:
    1) <label for="j_idt87:console1:0">Chrome</label> aka getByText('Chrome').first()
    2) <label for="j_idt87:console2:0">Chrome</label> aka getByText('Chrome').nth(1)

Call log:
  - waiting for locator('//label[text()=\'Chrome\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: /dashboard.xhtml;jsessionid=node01hsi7k296dyyv1hc2mmmx2j3kr19715256.node0
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
            - heading "Your most favorite browser" [level=5] [ref=e156]
            - generic [ref=e158]:
              - generic [ref=e160]:
                - radio "Chrome"
              - generic [ref=e163] [cursor=pointer]: Chrome
              - generic [ref=e165]:
                - radio "Firefox"
              - generic [ref=e168] [cursor=pointer]: Firefox
              - generic [ref=e170]:
                - radio "Safari"
              - generic [ref=e173] [cursor=pointer]: Safari
              - generic [ref=e175]:
                - radio "Edge"
              - generic [ref=e178] [cursor=pointer]: Edge
          - generic [ref=e179]:
            - heading "UnSelectable" [level=5] [ref=e180]
            - generic [ref=e184]:
              - generic [ref=e185]:
                - generic [ref=e187]:
                  - radio "Chennai"
                - generic [ref=e190] [cursor=pointer]: Chennai
              - generic [ref=e191]:
                - generic [ref=e193]:
                  - radio "Bengaluru"
                - generic [ref=e196] [cursor=pointer]: Bengaluru
              - generic [ref=e197]:
                - generic [ref=e199]:
                  - radio "Hyderabad"
                - generic [ref=e202] [cursor=pointer]: Hyderabad
        - generic [ref=e203]:
          - generic [ref=e204]:
            - heading "Find the default select radio button" [level=5] [ref=e205]
            - generic [ref=e207]:
              - generic [ref=e209]:
                - radio "Chrome"
              - generic [ref=e212] [cursor=pointer]: Chrome
              - generic [ref=e214]:
                - radio "Firefox"
              - generic [ref=e217] [cursor=pointer]: Firefox
              - generic [ref=e219]:
                - radio "Safari" [checked]
              - generic [ref=e222] [cursor=pointer]: Safari
              - generic [ref=e224]:
                - radio "Edge"
              - generic [ref=e227] [cursor=pointer]: Edge
          - generic [ref=e228]:
            - heading "Select the age group (only if not selected)" [level=5] [ref=e229]
            - generic [ref=e233]:
              - generic [ref=e234]:
                - generic [ref=e236]:
                  - radio "1-20 Years"
                - generic [ref=e239] [cursor=pointer]: 1-20 Years
              - generic [ref=e240]:
                - generic [ref=e242]:
                  - radio "21-40 Years" [checked]
                - generic [ref=e245] [cursor=pointer]: 21-40 Years
              - generic [ref=e246]:
                - generic [ref=e248]:
                  - radio "41-60 Years"
                - generic [ref=e251] [cursor=pointer]: 41-60 Years
      - generic [ref=e256]: 2022 - All Rights Reserved
  - generic [ref=e257]: 
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Radio Button Example", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://leafground.com/radio.xhtml");
  6  |     const chrome = page.locator("//label[text()='Chrome']");
> 7  |     await chrome.click();
     |                  ^ Error: locator.click: Error: strict mode violation: locator('//label[text()=\'Chrome\']') resolved to 2 elements:
  8  |     await expect(page.locator("//input[@value='Chrome']")).toBeChecked();
  9  |     await chrome.click();
  10 |     await expect(page.locator("//input[@value='Chrome']")).toBeChecked();
  11 | });
```