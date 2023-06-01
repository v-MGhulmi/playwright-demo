import { Locator, Page } from "@playwright/test";
import { Click,Fill } from "../utils/Page.utils";
export class loginLocators{
    readonly page :Page;
    readonly username :Locator;
    readonly password :Locator;
    readonly signinbutton :Locator;
    constructor(page:Page){
        this.page = page;
        this.username = page.getByLabel('Username or email address');
        this.password = page.getByLabel('Password');
        this.signinbutton = page.getByRole('button', { name: 'Sign in' });
    }

    async click(){
        await Click(this.page,this.signinbutton);
    }
    async fillusername(username:string) {
        await Fill(username,this.username);
        
    }
    async fillpassword(password:string){
        await Fill(password,this.password);
    }
}