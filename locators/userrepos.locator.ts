import { Locator, Page } from "@playwright/test";
import { Click, Fill } from "../utils/Page.utils";
export class UserRepoPageLocators{
    
    readonly page :Page;
    readonly alert: Locator;
    readonly search: Locator;
    readonly searchalert: Locator;
    readonly searchresult: Locator;
    readonly noresults:Locator;
    public repoName:string;
    constructor(page:Page){
        this.page = page;
        this.noresults= this.page.getByText("mohammadghulmi doesn’t have any repositories that match.");
        this.alert = this.page.locator('.js-flash-alert');
        this.search = this.page.locator('#your-repos-filter')
        this.searchalert = this.page.locator('.user-repo-search-results-summary');
        this.searchresult = this.page.locator('#user-repositories-list > ul > li:nth-child(1) > div.col-10.col-lg-9.d-inline-block > div.d-inline-block.mb-1 > h3 > a');
    }
    async searchrepos(content:string){
        await Fill(content,this.search);
        await this.searchalert.waitFor({state:'visible'});
    }
    async clickrepo(){
        await this.searchalert.waitFor({state:'visible'});
        this.searchresult.innerText().then(value =>{
            this.repoName = value;
        })
        await Click(this.page,this.searchresult);
    }
}