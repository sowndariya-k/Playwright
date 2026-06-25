# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test4logout.test.ts >> test
- Location: tests\test4logout.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#header')
Timeout: 5000ms
- Expected substring  -  1
+ Received string     + 34

- Logged in as sowndariya
+
+ 		
+ 			
+ 				
+ 					
+ 						
+ 							
+ 						
+ 					
+ 					
+ 						
+ 							
+ 								
+ 								 Home
+ 								 Products
+ 								 Cart
+ 								
+ 								 Logout
+ 								 Delete Account
+ 								
+ 								 Test Cases
+ 								 API Testing
+ 								 Video Tutorials
+ 								 Contact us
+ 								
+ 								 Logged in as Sowndariya
+ 								
+ 							
+ 						
+ 					
+ 				
+ 			
+ 		
+ 	

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#header')
    14 × locator resolved to <header id="header">…</header>
       - unexpected value "
		
			
				
					
						
							
						
					
					
						
							
								
								 Home
								 Products
								 Cart
								
								 Logout
								 Delete Account
								
								 Test Cases
								 API Testing
								 Video Tutorials
								 Contact us
								
								 Logged in as Sowndariya
								
							
						
					
				
			
		
	"

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Logout":
        - /url: /logout
    - listitem:
      - link " Delete Account":
        - /url: /delete_account
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
    - listitem:  Logged in as Sowndariya
```

# Test source

```ts
  1  | import { chromium, test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |     const browser = await chromium.launch({
  5  |         headless: false
  6  |     });
  7  |   await page.goto('https://automationexercise.com/');
  8  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  9  |   await page.getByRole('link', { name: ' Signup / Login' }).click();
  10 |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  11 | 
  12 |   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  13 |   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('sowndariya11@gmail.com');
  14 |   await page.getByRole('textbox', { name: 'Password' }).click();
  15 |   await page.getByRole('textbox', { name: 'Password' }).fill('Sow@911!');
  16 |   await page.getByRole('button', { name: 'Login' }).click();
  17 |   await expect(page.locator('#header')).toContainText('Logout');
> 18 |   await expect(page.locator('#header')).toContainText('Logged in as sowndariya');
     |                                         ^ Error: expect(locator).toContainText(expected) failed
  19 |   await page.getByRole('link', { name: 'Logout' }).click();
  20 |   await expect(page).toHaveURL('https://automationexercise.com/login');
  21 | });
```