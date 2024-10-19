import {test} from '../fixtures/init'
import {describe, beforeEach} from "node:test";
//const testData = JSON.parse(JSON.stringify(require('../config/cred.json')))
import testData from '../config/cred.json';

describe("signup Test", ()=>{

    test.beforeEach(async ({loginCredObj,page})=>{
        await loginCredObj.signUpNavigation(testData.base_url);
    })

    test("verify signup url Test", async({loginCredObj,productSorting,page})=>{
        await loginCredObj.verifyUserCred(testData.user_name,testData.pass_word);

    })
})