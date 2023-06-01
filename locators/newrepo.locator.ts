import { Locator, Page } from "@playwright/test";
import { Click, Fill } from "../utils/Page.utils";
export class NewRepoLocators{
    readonly page :Page;
    readonly repoName :Locator;
    readonly newrepobutton :Locator;
    readonly ready :Locator;
    constructor(page:Page){
        this.page = page;
        this.repoName = page.locator('#react-aria-2');
        this.newrepobutton = page.locator('.aBKvw [type="button"]');
        this.ready = page.locator('.UHfVg');
    }

    async click(){
        await this.ready.waitFor({state:'visible'});
        await Click(this.page,this.newrepobutton);
    }
    async fillreponame(name:string){
        await Fill(name,this.repoName)
    }
}