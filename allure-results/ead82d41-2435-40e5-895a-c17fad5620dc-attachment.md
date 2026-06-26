# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\test6contact.test.ts >> Contact Us Form
- Location: tests\AutomationExercise\test6contact.test.ts:3:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: ' Home' }) resolved to 2 elements:
    1) <a href="/">…</a> aka getByRole('link', { name: ' Home' })
    2) <a href="/" class="btn btn-success">…</a> aka getByRole('link', { name: ' Home' })

Call log:
  - waiting for getByRole('link', { name: ' Home' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - text: "Note: Below contact form is for testing purpose."
          - link "Software testing certifications" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: Software testing certifications
        - heading "Get In Touch" [level=2] [ref=e51]
        - generic [ref=e52]: Success! Your details have been submitted successfully.
        - link " Home" [ref=e54] [cursor=pointer]:
          - /url: /
          - generic [ref=e55]:
            - generic [ref=e56]: 
            - text: Home
      - generic [ref=e58]:
        - heading "Feedback For Us" [level=2] [ref=e59]
        - generic [ref=e60]:
          - paragraph [ref=e61]: We really appreciate your response to our website.
          - paragraph [ref=e62]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e63] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e64]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e65]: Thank you
  - contentinfo [ref=e66]:
    - generic [ref=e71]:
      - heading "Subscription" [level=2] [ref=e72]
      - generic [ref=e73]:
        - textbox "Your email address" [ref=e74]
        - button "" [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: 
        - paragraph [ref=e77]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - generic [ref=e78]:
      - insertion [ref=e80]:
        - generic [ref=e83]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e85]: Discover more
          - link "Programming" [ref=e86] [cursor=pointer]:
            - generic "Programming" [ref=e87]
            - img [ref=e89]
          - link "Development Tools" [ref=e91] [cursor=pointer]:
            - generic "Development Tools" [ref=e92]
            - img [ref=e94]
          - link "Software" [ref=e96] [cursor=pointer]:
            - generic "Software" [ref=e97]
            - img [ref=e99]
      - paragraph [ref=e103]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e104]:
    - iframe [ref=e107]:
      - iframe [ref=f18e1]:
        - generic [ref=f22e1]:
          - generic [ref=f22e2]:
            - generic:
              - img [ref=f22e6] [cursor=pointer]
              - button [ref=f22e8] [cursor=pointer]:
                - img [ref=f22e9]
          - insertion [ref=f22e16]:
            - generic [ref=f22e17]:
              - link "Click Here" [ref=f22e18] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CRTIsqOc9aoH1Gs2M9fwPgYPvyQvx-_bqhQGn-bT3ohXKuozxvgEQASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgAJP0LLLQmqTacx0Fz88-hB_RtbdWk5jiRP45Qe65GuNzxX_mpTgHZl-6haGmizugz5k9nalSaOulilxwZ3hVP_gyaknnY86iziNAGbfS2F7YsBvzYJ036refldy8pjBK-hAmhbOmQuCWjp-z9Z96QgAyoBxzRIB0E6PTiy3AQm6KSMq5X6rKZj9W7yo2TjtvRn-dSg1dmwhrP6jbmkP2Rd7i-3lJoShOarBo-2ASQiMTfirsAQSRY3JKJVLcU1W_AwPcPGQ3OPvZnjXXlg0e9cCfqbAA0_h5ydFz9l9_hXsBhQmnEw3_E8Q8QWUfjaHJEbVX4W-vgmRup6Dj8uccC-DwATunNiCwQTgBAOIBZnHj_1NkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYqsXHwPGjlQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCKLxx8Dxo5UDFU1GnQkdgcE7ufANAYgOCbAT_uznItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRIC6FgYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQSjQIAEQoqgaKLpElQMEslILtgIx9dmkI8kyE2_aB1AeEriazTUbzR1_gP2CuSsEpUy_jAIZNnAKOrr3R3VeSjAeefn89AEKk1qmJY_vXEkyFV3FpBtZjm3ZjT1PfDcaTHlqTD8cYNdJ4WkKNfqOSiD6IvMShdzCsCirVBi3E2bNqz0AUTWVD_-ANtpd7VSd-hSBqpj2Cy-MURBABGX00vYjiNHgMJpBffcvF-gEdMcTkiw9wGHrnVmThRhLP5Fn0l6SCm_hKmEitMJOmaSpyKpQ1s5wiJV7fxySi3aZ0OmR4pSrMbFOWsDPCOcps8JhqvLgHN54AIum70kn4TBFsO41G3fr8SAMWL79L7R5ZdjBgB&sig=AOD64_2w0fzv6MLyTEmOM0W2E25vOcU7hg&client=ca-pub-1677597403311019&dbm_c=AKAmf-AGQuwRgFNWjPturVun2HLtYD7YqDwe9zJ9F8gO1wRAmqOfJipq6bgc2nKLL1LWgKzm-UwUigvTYA261ey3u9RpqSH3mwUJgZfH1FeusDXg09tnJZ-4UbrdR-_aWEVS_HI5KoJMF_PI3u2jxR2o0LRUAc1hFuVXlSlSSjq_NZ05ex1l0_00VYleQw38m9vdmKVEOd0ocP9AP-QQUhIXRpq4UCciTxAYIoVELwd8tYHOkz7_zGFg53l5w-RTQK2iEGiCN5C5eWonBDK2iFMZPc-lmw3F0A&cry=1&dbm_d=AKAmf-CToLWQIRhXfGok7bQkroAGcN22VwaTSVlu3TPgBLUp9eRllqXDD4SK_BnlBMfuiPGEm0reT7Zzm0sT4X8e_3Wjrn-aeDL4nFxtraq6dxl-OnQrKNG0MV3I_SLIzqjMriZoyTlzpdvwRUdNY00oe3pucAhJcjyfHp9wfzlKSQwMOM8IbPMUlU_ej5bQHe6x9Ip4e7g2C-M-pz3T6q-pNXxETClWurSkoATBP8GU9cOKOP9oBiC0EGRSYwlnR8MaxjeEG294c5bODn9Cf1tZ7H8rThRHlqL1JATSD-3ZvxHy_ZbzjZPwbeySi6iiIjYt3pYux7013ih0f-io29ov7RKx7-zzF8apDVUUczprX84Am-Huv5zwZvTyz1yo2xb6RwI9d_Gfs9JniZxO8I6sOvdl8sVnPt0e8hsDSxNZkr5QWzviUaNeGCFdHKmcLrqEaReo4gYef9wSSNGEgB73RtKmN0O_8f1gRzyili6pXM3K92-QFD10uyviVXbSYOfQGyijdfaUKCYd_76rmFr1iRD1dmAljDVfvoxfXWsCRsSLHOJL-wwExtBF-TUl4M5FKMD7pHFlxfqJoObtmMQcbzpPQSqhLp0IDtTS_uAepYeZm9E2DjTiqqcxc8KRSvRo7ERF14yfl4vQPp4i-Zc1xyT6sUOzuMzYBdFezz4yGD5TMelIbTBhkFbvb0lB19SFM1fF1dKEThRLKAxJ6m3GRyTTiYInMQ&adurl=https://servedby.flashtalking.com/click/7/296969;10262952;6145789;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0if7UkB8IHNfp89uBjDM3fW&ft_impID=BA8A66B3-DCC0-7898-7E19-9A365667B0A8&ft_section=20931928985&g=675159B0F0B2E2&random=616396.6236043228&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                - img "Click Here" [ref=f22e19]
              - link "AdChoices arrow" [ref=f22e21] [cursor=pointer]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img "AdChoices arrow" [ref=f22e22]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Contact Us Form', async ({ page }) => {
  4  | 
  5  |   // Step 1 & 2: Launch browser and navigate
  6  |   await page.goto('https://automationexercise.com/');
  7  | 
  8  |   // Step 3: Verify home page
  9  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  10 | 
  11 |   // Step 4: Click Contact Us
  12 |   await page.getByRole('link', { name: ' Contact us' }).click();
  13 | 
  14 |   // Step 5: Verify GET IN TOUCH
  15 |   await expect(page.getByText('Get In Touch')).toBeVisible();
  16 | 
  17 |   // Step 6: Fill form fields
  18 |   await page.locator('input[data-qa="name"]').fill('Sowndariya');
  19 |   await page.locator('input[data-qa="email"]').fill('sowndariya@gmail.com');
  20 |   await page.locator('input[data-qa="subject"]').fill('Playwright Testing');
  21 |   await page.locator('textarea[data-qa="message"]').fill('This is a sample contact message.');
  22 | 
  23 |   // Step 7: Upload file
  24 |   await page.locator('input[name="upload_file"]')
  25 |     .setInputFiles('tests/AutomationExercise/sample.txt');
  26 | 
  27 |   // ✅ KEY FIX: Override window.confirm via JS to auto-return true
  28 |   // This bypasses the dialog entirely — no handler needed
  29 |   await page.evaluate(() => {
  30 |     window.confirm = () => true;
  31 |   });
  32 | 
  33 |   // Step 8: Click Submit
  34 |   await page.locator('input[data-qa="submit-button"]').click({ force: true });
  35 | 
  36 |   // Step 10: ✅ Wait for hidden div to become visible after successful submit
  37 |   await expect(page.locator("//div[@class='status alert alert-success']"))
  38 |     .toBeVisible({ timeout: 15000 });
  39 | 
  40 |   await expect(page.locator("//div[@class='status alert alert-success']"))
  41 |     .toHaveText('Success! Your details have been submitted successfully.');
  42 | 
  43 |   // Step 11: Go Home and verify URL
> 44 |   await page.getByRole('link', { name: ' Home' }).click();
     |                                                   ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: ' Home' }) resolved to 2 elements:
  45 |   await expect(page).toHaveURL('https://automationexercise.com/');
  46 | 
  47 | });
```