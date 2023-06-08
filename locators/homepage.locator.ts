import { Locator, Page } from "@playwright/test";
import { Click, Fill } from "../utils/Page.utils";
export class HomePageLocators{
    readonly page :Page;
    readonly NewRepoButton: Locator;
    readonly Searchbar: Locator;
    readonly Searchresult : Locator;
    constructor(page:Page){
        this.page = page;
        this.NewRepoButton = this.page.getByRole('link', { name: 'New', exact: true });
        this.Searchbar = this.page.locator('#dashboard-repos-filter-left');
        this.Searchresult = this.page.locator('.wb-break-word');
        
    }

    async click(){
        await Click(this.page,this.NewRepoButton);
    }

    async clickSearchResult(){
        await this.Searchresult.click();
    }

    async fillSearchBar(content:string){
        await Fill(content,this.Searchbar);
    }
}