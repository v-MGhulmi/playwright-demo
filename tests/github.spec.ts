import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/home.page'
import { NewPage } from '../pages/new.page';
import { RepoDisplayPage } from '../pages/repodisplay.page';
import { IssuesDisplayPage } from '../pages/issues.page';
import { WikiDisplayPage } from '../pages/wiki.page';
import { CreateWikiPage } from '../pages/createwiki.page';
import { NewWikiDisplayPage } from '../pages/newwiki.page';
import { SettingsPage } from '../pages/settings.page';
import { userrepoPage } from '../pages/userrepo,page';
let homePage:any
test.beforeEach(async ({page}) => {
    
    homePage = new HomePage(page);
    await homePage.gotoHomePage();
  
    // Click the get started link.
    
})
test('Create Repo test', async ({ page }) => {
  let randomName:any
  randomName = (Math.random() + 1).toString(36).substring(2);
  await homePage.newRepo();
  const newpage = new NewPage(page);
  await newpage.newRepo('test-repo'+randomName);
  
  const repoPage = new RepoDisplayPage(page,randomName)
  const testpara = repoPage.repoLocator.repoName;
  await expect(testpara).toBeVisible();

  });

test('Check Issues test', async ({ page }) => {
  let randomName:any
  randomName = (Math.random() + 1).toString(36).substring(2);
  await homePage.newRepo();
  const newpage = new NewPage(page);
  await newpage.newRepo('test-repo'+randomName);
  
  const repoPage = new RepoDisplayPage(page,randomName);
  await repoPage.repoLocator.clickissue();
  const issues = new IssuesDisplayPage(page,randomName);
  await expect(issues.issueLocator.issues).toBeVisible();
  

  
  });

test('Create Wiki page test', async ({ page }) => {
  let randomName:any
  randomName = (Math.random() + 1).toString(36).substring(2);
  await homePage.newRepo();
  const newpage = new NewPage(page);
  await newpage.newRepo('test-repo'+randomName);
  
  const repoPage = new RepoDisplayPage(page,randomName);
  await repoPage.repoLocator.clickwiki();
  const wiki = new WikiDisplayPage(page,randomName);
  await wiki.wikiLocator.click();
  const newwikipage = new CreateWikiPage(page);
  await newwikipage.newRepo(randomName);
  const wikipage = new NewWikiDisplayPage(page,randomName);
  await expect(wikipage.repoLocator.content).toBeVisible();


  

  
  });

  test('Delete repo test', async ({ page }) => {
    let randomName:any
    randomName = (Math.random() + 1).toString(36).substring(2);
    await homePage.newRepo();
    const newpage = new NewPage(page);
    await newpage.newRepo('test-repo'+randomName);
    
    const repoPage = new RepoDisplayPage(page,randomName)
    await repoPage.repoLocator.clickSettings();
    const settings = new SettingsPage(page);
    await settings.deleteRepo(randomName);
    const userrepos = new userrepoPage(page);
    await expect(userrepos.locator.alert).toBeVisible()
    
  
    });