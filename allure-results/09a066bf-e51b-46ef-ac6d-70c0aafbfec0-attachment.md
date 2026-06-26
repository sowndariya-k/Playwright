# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\test6contact.test.ts >> Contact Us Form
- Location: tests\AutomationExercise\test6contact.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
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
        - generic [ref=e53]:
          - textbox "Name" [ref=e55]
          - textbox "Email" [ref=e57]
          - textbox "Subject" [ref=e59]
          - textbox "Your Message Here" [ref=e61]
          - button "Choose File" [ref=e63]
          - button "Submit" [ref=e65] [cursor=pointer]
      - generic [ref=e67]:
        - heading "Feedback For Us" [level=2] [ref=e68]
        - generic [ref=e69]:
          - paragraph [ref=e70]: We really appreciate your response to our website.
          - paragraph [ref=e71]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e72] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e73]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e74]: Thank you
  - contentinfo [ref=e75]:
    - generic [ref=e80]:
      - heading "Subscription" [level=2] [ref=e81]
      - generic [ref=e82]:
        - textbox "Your email address" [ref=e83]
        - button "" [ref=e84] [cursor=pointer]:
          - generic [ref=e85]: 
        - paragraph [ref=e86]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e90]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e91]:
    - iframe [ref=e94]:
      - iframe [ref=f17e1]:
        - generic [active]:
          - generic [ref=f18e1]:
            - generic [ref=f18e2]:
              - generic:
                - img [ref=f18e6] [cursor=pointer]
                - button [ref=f18e8] [cursor=pointer]:
                  - img [ref=f18e9]
            - insertion [ref=f18e16]:
              - generic [ref=f18e17]:
                - link "Click Here" [ref=f18e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=Cp-KifeY9arW5ApaG29gPy46ouAqPv_PzhwHs9uLDkxWhpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgwJP0AZ9GY87I7IWGHVGideqKzWSXeICPLRKVh1Mp9KiYVzmq8gyic7Cdkfz0DwNH1xA6qClQybzPwO0wKCfku5lbu8s2aM6Xj9m-nm-jG0IuTpD6e3X4bkkXqHYROJCT75PXBrqPLXf6-3AxzsZU-hNBZ-n_SoeZGHpWH7e9VIQ3490W6lhWD1flvFAUcOb7C0sOo7BepRtswKhzMD8nbfCw286rWidoFA9PMUAmemHZ-qd5iPQTLeb7iyH3EcsDh22kNnbnpna7wNAHZ7OTZeknrBS-e2JsCWtMVIyn7dLBfOqTg04hU8sEQzOIWalarWuTDUdFpp8ymdJ6LNdJXNP-1X5wATzzfiUqQXgBAOIBZjfs45UkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYm5jksfCjlQNgAYAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAklO6g0TCLjy5bHwo5UDFRbDFgUdSwcKp_ANAYgOCbATk9j4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRIC6FgYTSIBANAZAQ&ae=1&num=1&cid=CAQSjQIAEQoqgUXJJPOphfiqo3xnwtYc1NOXLco13BpILBj7WJeeTMXScCmZrSvRdxHU18UXYDf5h5ml5qB12DDCvN8gopCBr_sI2Yf4GC_M3LJY4JU-r1NNN5Tbz4ewBbhwrlrrlgraYcHukmyE_xxuTnjw8FSoat2GAnqvHfIE6oCLZwMBFWela6ilYi3u5Dd2Y66I5JI9j5B7e2prenS01NUjt-NfUrye-OAK0jBvcutM90HkL7C-Y6BPgb2m7r5j6_W3QppY86zU5HZdto-KVWyIuIFzXfagRozKCJXLYCFLCn2R_-2DMAE4Y4tiSTRUw74AlWbuPNTTrAl5dAJajwn0nMRD_xghgrnQHjDGohgB&sig=AOD64_2_cfWm1unDokd4-ibeB1-5hL8FOg&client=ca-pub-1677597403311019&dbm_c=AKAmf-BdLAHMCZ5FTpRTdB0dYzfESiUm0UVouyR-KL1RlmgYVorLYqrvdmDo01_nBku2JpDmPLJCo9UqIDRoMrblDh2kEsNbii8vbVnmSB6qsPVxPR6t87CpLfnJLWRsABxscCjIr5vf1GHHal8AmlqgnEvGzjYxkV8AoYaMEsa9plrOgRM22d6_0SjqXY5V0idkpijxpjwG3neHCnlYWbFXLJVoiqsJfFO1cshK-05LPVMyQ4nZJZQNql2wkm0c0MR8OKDe24bWwFRJpS5g8Zf9mx0b88E0OQ&cry=1&dbm_d=AKAmf-BW6HIbDGnkgw_ga9wvWYLYLG3u15jxM93oXU4ddBicU6KXcQwChx20P1cK0LbTk7cPFhSPlwaec9-A_2QzA-tuvoPIg9bk82JdKoLvqh38vRdPwyO8krtvg7vXhKrVsdBe7v7cu6Jl8JCH1BxeOliSh7JS7ihxDrN2GiruAmp-iIcIxK27-qO4aHI-YdMWebugQ6WOkMNRhw0r5ZMPbl-0o7BspRmo_5TENMKc0QBKNT_Y7fdeA8LzfIrAwwiYhUb2TjZxvtxUNzujavON9KM2qhC2Iy_LBfMsa2MQ0njuR0EqENtTZeXSDFHxP7pgmbKoM-oNFANXqTlMe6p9vxFUYi9PYia4xiAOvS1VJksiIjR7MIMc8TlPnLpFZVh3xt44rA47sesQhLyLWVhgiXj0eeOHbm254szETj2EoO0fdD5cEU_1rYqIgNHMXeVx-HvBzXav7l6_2ZOiICak3CTWpCXWUVKR-uDnks-EYRT9S28ALvEHPl_b2aEHg8CeKwATNkIC1T3rFghxz6LaKoRz0pfb47eBDatQ9kZgRNI7KgcgLPRtMqVmIpNfX_NV-ZNnbxUqwx2q5S5VtzA0xtLie1epxTQ0GCzBTg8EcwqTt5ZK-ME-JAkQIcm9waWKyvirxXMy8SYk3S_OSAOiUqoA8YSykUUS6w-VrBT016UdYH6slnqABCQBFE58BL8nWDlNP1XTBSzSaPfK8OC6PCi4-mbZ8Q&adurl=https://servedby.flashtalking.com/click/7/299371;10256504;4795920;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0inHQaGtzFOZm1eWUlB5lNs&ft_impID=DE031255-80D7-C644-2E10-413094C7B9A6&ft_section=22578786200&g=67510CC19CFB85&random=164006.60925832856&ft_width=728&ft_height=90&url=https://www.adobe.com/in/products/illustrator.html?sdid=WPHDJ44J&mv=display&mv2=display
                  - img "Click Here" [ref=f18e19]
                - link "AdChoices arrow" [ref=f18e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f18e22]
                - link "Privacy Notification" [ref=f18e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e25]
                - link "Privacy Notification" [ref=f18e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e28]
          - iframe
  - generic [ref=e95]:
    - generic [ref=e96] [cursor=pointer]:
      - img [ref=e98]
      - link "Go to shopping options for Development Tools" [ref=e100]: Development Tools
    - button "Close shopping anchor" [ref=e101]
```