import { Page } from "@playwright/test";
import { IssuePageLocators } from "../locators/issues.locators";

export class IssuesDisplayPage {
  readonly page: Page;
  readonly issueLocator: IssuePageLocators;

  constructor(page: Page) {
    this.page = page;
    this.issueLocator = new IssuePageLocators(page);
  }
}
