const { test, expect } = require('@playwright/test');
const { loginButton,usernameField,passwordField} = require("./Selectors")


test('validate with invalid data', async ({ page }) => {
    await page.goto("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
    await page.waitForSelector(loginButton);
    await page.fill(usernameField,'username');
    await page.fill(passwordField,'password');
    await page.click(loginButton);
    await expect(page.locator('span.help-block >> nth=0')).toHaveText('No account found with that username.')

});

test('validate with empty password', async ({ page }) => {
    await page.goto("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
    await page.waitForSelector(loginButton);
    await page.fill(usernameField,'username');
    await page.fill(passwordField,'');
    await page.click(loginButton);
    await expect(page.locator('span.help-block >> nth=1')).toHaveText('Please enter your password.')
});

test('validate with empty username', async ({ page }) => {
    await page.goto("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
    await page.waitForSelector(loginButton);
    await page.fill(usernameField,'');
    await page.fill(passwordField,'password');
    await page.click(loginButton);
    await expect(page.locator('span.help-block >> nth=0')).toHaveText('Please enter username.')
});

test('validate with empty fields', async ({ page }) => {
    await page.goto("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
    await page.waitForSelector(loginButton);
    await page.fill(usernameField,'');
    await page.fill(passwordField,'');
    await page.click(loginButton);
    await expect(page.locator('span.help-block >> nth=0')).toHaveText('Please enter username.')
    await expect(page.locator('span.help-block >> nth=1')).toHaveText('Please enter your password.')
});