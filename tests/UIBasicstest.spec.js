 const {test, expect} = require('@playwright/test'); 


 test.only('Browser Context Playwright test', async ({browser})=>
 {
    
    const context =  await browser.newContext();
    const page = await context.newPage(); 
    page.route('**/*.{jpg,png,jpeg}',route => route.abort())
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    page.on('request', request => console.log(request.url()));
    page.on('response', response=>response.url(), response.status());v 
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await userName.type("rahulshetty");
    await page.locator('#username').fill("learning");
    await page.locator("[type='password']").fill("learning");
    await signIn.click(); 
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await signIn.click();
   console.log(await cardTitles.first().textContent());
   console.log(await cardTitles.nth[1] .textContent());
   const allTitless= await cardTitles.allTextContents();
   console.log(allTitles);
});

test.only('Page Playwright test', async ({page})=>
    {
       await page.goto("https://www.google.com");
    console.log(await page.title());
    
   });
   
   
   test.only('UI Controls', async ({page})=>
      {
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         const userName = page.locator('#username');
         const signIn = page.locator("#signInBtn");
         const documentLink = page.locator("[href*='documents-request']");
         const dropdown = page.locator("select.form-control");
         await dropdown.selectOption("consult");
         await page.locator(".radiotextsty").last().click();
         await page.locator("#okayBtn").click();
        console.log(await page.locator(".radiotextsty").last().isChecked());
        await expect(page.locator(".radiotextsty").last()).toBeChecked();
        await page.locator("#terms").click();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked( )).toBeFalsy();
        await expect(documentLink).toHaveAttribute("class","blinkingText");
       
       
       
        await page.pause();
     });

     test.only('Child windows hadl', async ({browser})=>
      {
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#userName');
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         const documentLink = page.locator("[href*='documents-request']");
         
        const [newPage]= await Promise.all( 
      [context.waitForEvent('page'),
         documentLink.click(),
      ])

      const text = await newPage.locator(".red").textContent();
      const arrayText = text.split("@")
      const domain = arrayText[1].split(" ")[0]
      console.log(domain);
      await page.locator("#username").type(domain);
      await page.pause();
      console.log(await page.locator("#username").textContent());


      })