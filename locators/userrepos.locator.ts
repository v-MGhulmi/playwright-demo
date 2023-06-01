import { Locator, Page } from "@playwright/test";
import { Click } from "../utils/Page.utils";
export class UserRepoPageLocators{
    readonly page :Page;
    readonly alert: Locator;
    constructor(page:Page){
        this.page = page;
        this.alert = this.page.locator('.js-flash-alert');
    }
}