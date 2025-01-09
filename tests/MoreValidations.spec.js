 const {test} = require('@playwright/test')

test("Popup balidations", async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect(page.locator("#display-text")).toBeVisable();
await page.locator("#hide-textbox").click();
await expect(page.locator("#display-text")).toBeHidden();
page.on('dialog', dialog => dialog.accept());
await page.locator("confirmbtn").click();
await page.locator("#mousehover").hover();
const framesPage = page.frameLocator("#courses-iframe");
await framesPage.locator("li a[href*='lifetime-access']:visible").click();
 const textCheck = framesPage.locator(".text h2").textContent();
 console.log(textCheck.split(" ")[1]);

})

test ("Screenshot & Visual comparision", async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#display-text")).toBeVisable();
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot:png'});
    await expect(page.locator("#display-text")).toBeHidden();

});

test.only('visual',async({page}) =>
{
await page.goto("https://www.rediff.com/");
expect(await page.screenshot()).toMatchSnapshot('landing.png')

});
