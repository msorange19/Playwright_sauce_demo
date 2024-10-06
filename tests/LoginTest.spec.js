const {test} = require ('../fixtures/init')
const {describe, beforeEach} = require("node:test");
const {expect} = require("@playwright/test");
const testData = JSON.parse(JSON.stringify(require('../config/cred.json')))

describe("signup Test", ()=>{

    test.beforeEach(async ({loginCredObj,page})=>{
        await loginCredObj.signUpNavigation(testData.base_url);
    })

    test("verify signup url Test", async({loginCredObj,productSorting,page})=>{
        await loginCredObj.verifyUserCred(testData.user_name,testData.pass_word);
       // await loginCredObj.LoginErrorMessage();

    })
})