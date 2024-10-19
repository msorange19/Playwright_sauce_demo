import  { test as base } from '@playwright/test' ;
import { LogInPage } from '../pages/LogInPage.spec.js';
import { ProductPage } from '../pages/ProductPage.spec.js';

export const test = base.extend({
    loginCredObj : async ({ page}, use) =>{
        await use(new LogInPage(page));
    },
   productSorting : async ({page},use) =>{
        await use (new ProductPage(page))
   }
})