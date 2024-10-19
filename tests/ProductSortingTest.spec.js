import {test} from '../fixtures/init';
import {describe, beforeEach} from "node:test";
import {expect} from "@playwright/test";
import {join} from "node:path";
import fs from'fs';


let prodPriceSort = '';

describe("session Test", () => {

    test.beforeEach(async ({productSorting, page}) => {

        const sessionStorage = JSON.parse(fs.readFileSync('playwright/.auth/user.json', 'utf-8'));
       // console.log(sessionStorage)
        await page.addInitScript(storage => {
            if (window.location.hostname === 'https://www.saucedemo.com/v1') {
                for (const [key, value] of Object.entries(storage))
                    window.sessionStorage.setItem(key, value);
            }
        }, sessionStorage);


        await productSorting.productInventoryNavigation('https://www.saucedemo.com/v1/inventory.html');
    })

    test('Verify the sorting by naming z-a sort is working', async ({productSorting, page}) => {
        await productSorting.verifySortProd('za')
        const prodName = await productSorting.getProductList();
        const prodNameSort = [...prodName].sort().reverse();
        expect(prodName).toEqual(prodNameSort);
    });

    test('Verify the sorting by naming a-z sort is working', async ({productSorting, page}) => {
        await productSorting.verifySortProd('az')
        const prodName = await productSorting.getProductList();
        const prodNameSort = [...prodName].sort();
        expect(prodName).toEqual(prodNameSort);
    });


    test('Verify the sorting by pricing high to low sort is working', async ({productSorting, page}) => {
        await productSorting.verifySortProd('hilo')
        const prodPrice = await productSorting.getProductPrice();
       // console.log(prodPrice)
        prodPriceSort = [...prodPrice].sort((a,b)=>b-a);
        expect(prodPrice).toEqual(prodPriceSort);
    })

    test('Verify the sorting by pricing low to high sort is working', async ({productSorting, page}) => {
        await productSorting.verifySortProd('lohi')
        const prodPrice = await productSorting.getProductPrice();
        prodPriceSort = [...prodPrice].sort((a,b)=>a-b);
        expect(prodPrice).toEqual(prodPriceSort);
    })

})