# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task\skip.test.ts >> Soft Assertion Demo
- Location: tests\task\skip.test.ts:32:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Log in' })
    - locator resolved to <button type="button" onclick="logIn()" class="btn btn-primary">Log in</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```