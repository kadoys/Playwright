const {test, expect, request} = require('@playwright/test');
const {APIUtils}= require('./utils/APIUtils')
let response;
test.beforeAll( async()=>
{
const apiContext = await request.newContext();
const apiUtils =new APiUtils(apiContext,loginPayLoad);
response = await apiUtils.createOrder(orderPayLoad);
});

test.beforeEach(()=>
{


});

// test1, test2, test3







test ('Place the order', async ({page})=>
    {
 
      page.addInitScript(value =>{
         window.localStorage.setItem('token', value);
}, response.token );
      
      await page.goto("https://rahulshettyacademy.com/client/")


await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");

for (let i =0; i< await rows.count(); i++)
{

 const rowOrderId = rows.nth(i).locator("th").textContent();
 if (response.orderId.includes(rowOrderId))
 {
  await rows.nth(i),locator("button").first().click();
  break;
 }
}
const OrderIdDetails = await page.locator(".col-text").textContent();
await page.pause();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
}








   //Zara Coat 4
   
   
   
   
   
   
   
   
   
   
    );