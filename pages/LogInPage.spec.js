import { Page, Locator } from "@playwright/test";
import path from "node:path";
const fs = require('fs');


export class LogInPage{

    constructor(page){
        this.page = page;
        this.userNameInputField = '#user-name';
        this.passInputField = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = 'h3[data-test=error]';
    }

    async signUpNavigation(url){
        await this.page.goto(url);
    }

    async verifyUserCred(userName, userPass){
        await this.page.fill(this.userNameInputField,userName);
        await this.page.fill(this.passInputField,userPass);
        await this.page.click(this.loginButton);
        const sessionStorage = await this.page.evaluate(() => JSON.stringify(sessionStorage));
        fs.writeFileSync('playwright/.auth/user.json', sessionStorage, 'utf-8');



    }

    async LoginErrorMessage(){
        return this.page.innerText(this.errorMessage);
    }

}
