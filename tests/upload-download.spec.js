const ExcelJS = require('exceljs');
const {tests,expect} = require('@playwright/test');

async function writeExcelTest(searchText, filePath)
{

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile(""); 
const worksheet = workbook.getWorksheet('Sheet1');
const output = await readExcel(worksheet,searchText, );
const cell = worksheet.getCell(output.row,output.column+ change.colChange);
cell.value = "350";
 await workbook.xlsx.writeFile(filePath);
}
async function readExcel(worksheet,searchText,)
{
   
    worksheet.eachRow((row, rowNumber) =>
        {
            row.eachCell((cell,colNumber) =>
            {
                if(cell.value==='Apple');
                {
                    output.row=rowNumber;;
                    output.column =colNumber; ;
                }
        
        
            } )
        
        })
       return output;


}
//writeExcelTest("Mango","350",{rowChange:0,colChange:2},"\Users\Valeriia.Horiuchkina\Downloads\excelTest.xlsx");
test('Upload download excel validation', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button',{name:'Download'}).click();
    await downloadPromise;
    writeExcelTest("Mango","350",{rowChange:0,colChange:2},"\Users\Valeriia.Horiuchkina\Downloads\download.xlsx");
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("\Users\Valeriia.Horiuchkina\Downloads\excelTest.xlsx");

})