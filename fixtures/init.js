const  { test :base } = require( '@playwright/test' );
const { LogInPage } = require('../pages/LogInPage.spec.js');
const {ProductPage} = require('../pages/ProductPage.spec.js');

export const test = base.extend({
    loginCredObj : async ({ page}, use) =>{
        const loginCredObj = new LogInPage(page);
        await use(loginCredObj);
    },
   productSorting : async ({page},use) =>{
        const productSorting = new ProductPage(page);
        await use (productSorting)
   }
})