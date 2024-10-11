const {test} = require('../fixtures/init')
const {describe, beforeEach} = require("node:test");
const {expect} = require("@playwright/test");
const {join} = require("node:path");
const testData = JSON.parse(JSON.stringify(require('../config/cred.json')))
const fs = require('fs');

describe("session Test", () => {

    test.beforeEach(async ({productSorting, page}) => {

        const sessionStorage = JSON.parse(fs.readFileSync('playwright/.auth/user.json', 'utf-8'));
        console.log(sessionStorage)
        await page.addInitScript(storage => {
            if (window.location.hostname === 'https://www.saucedemo.com/v1') {
                for (const [key, value] of Object.entries(storage))
                    window.sessionStorage.setItem(key, value);
            }
        }, sessionStorage);


        await productSorting.productInventoryNavigation('https://www.saucedemo.com/v1/inventory.html');
    })
    test('Verify the sorting is working', async ({productSorting, page}) => {
        await productSorting.verifySortProd('za')
        const prodName = await productSorting.getProductList();
        const prodNameSort = [...prodName].sort().reverse();
        expect(prodName).toEqual(prodNameSort);
    });

})