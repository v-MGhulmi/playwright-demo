import {  Page } from '@playwright/test';
import { SettengsPageLocators } from '../locators/settings.locator';

export class SettingsPage {
    
    readonly page : Page;
    readonly locator: SettengsPageLocators;

    constructor(page:Page){
        this.page = page
        this.locator = new SettengsPageLocators(page)
    }

    async deleteRepo(repoName:string){
        await this.locator.clickDeleteButton();
        await this.locator.confirmdialog.waitFor({state:'visible'});
        await this.locator.clicklConfirmButton();
        await this.locator.clicklConfirmButton();
        await this.locator.fillVerifaction(repoName);
        await this.locator.clicklConfirmButton();
    }
}