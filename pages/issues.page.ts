import { expect, Locator, Page } from '@playwright/test';
import { IssuePageLocators } from '../locators/issues.locators';

export class IssuesDisplayPage {
    readonly page : Page;
    readonly issueLocator :IssuePageLocators;

    constructor(page:Page,randomName:string){
        this.page = page;
        this.issueLocator = new IssuePageLocators(page,randomName);
    }
}