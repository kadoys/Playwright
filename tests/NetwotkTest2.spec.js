const {test, expect} = require('@playwright/test')


test("Security test request intercept", async() =>
{
//login and reach the other page
await page.goto("https://rahulshettyacademy.com/client"); 
await page.locator("#userEmail").fill("kadoys@gmail.com");
await page.locator('#userPassword').fill("Kriscokfer654321!");
await page.locator("[value='Login']").click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();

await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*");
route=> route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=66b9db39ae2afd4c0b484c95' })
await  page.locator("button:has-text('View')").first().click();
await page.pause();
await expect(page.locator("p").last()).toHaveText("You are not authorize to view the order");

})




