import { expect, Locator, Page } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';
export class LoginPage {
    readonly url = "https://github.com/login"
    readonly page : Page;
    readonly locator : loginLocators;

    constructor(page:Page){
        this.page = page
        this.locator = new loginLocators(page);
        
    }

    async gotologinpage(){
        await this.page.goto(this.url)

    }

    async signIn(username:string,password:string){
        await this.locator.fillusername(username);
        await this.locator.fillpassword(password);
        await this.locator.click();
    }
}