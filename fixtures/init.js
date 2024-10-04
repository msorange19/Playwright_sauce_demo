const  { test :base } = require( '@playwright/test' );
const { LogInPage } = require('../pages/LogInPage.spec.js');

export const test = base.extend({
    loginCredObj : async ({ page}, use) =>{
        const loginCredObj = new LogInPage(page);
        await use(loginCredObj);
    },

})