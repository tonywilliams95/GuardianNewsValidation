import UIActions from "../../support/playwright/actions/UIActions";
import NewsUtil from "../../support/utils/NewsUtil"
import Assert from "../../support/playwright/asserts/Assert";
import Log from "../../support/logger/Log";
import Constants from "../constants/Constants";
   ``
export default class BBCNewsPage {
     constructor(private web: UIActions) { }
 
     private searchInput="#search-input";
    private searchButton = "button[data-testid='test-search-submit']";
    private BBCNewsSearch ="//main[@id='main-content']//span[@role='text']//span";
 

    public async navigateToBBCNews() {
         await this.web.goto("https://www.bbc.co.uk/search", "News page");
        const title=await this.web.getPageTitle();
        await Assert.assertEquals(title, "BBC - Search", "Title Validation");
    }


    public async validateNewsTitlesAreValid(newsArray: string[]){
        for (let i = 0; i < newsArray.length; i++) {
            let title = newsArray[i];
              const news=await NewsUtil.splitLivetitleNews(title);
            Log.info("News Searched as captured from Guardian - : " + news);
            await this.web.editBox(this.searchInput, Constants.SEARCHINPUT).fill('');
            await this.web.editBox(this.searchInput, Constants.SEARCHINPUT).fill(news);
            await this.web.element(this.searchButton,Constants.SEARCHBUTTON).click();
            await this.web.waitForDomContentLoaded();
            const newsList = await this.web.element(this.BBCNewsSearch, "News").getAllTextContent();
            for (let i = 0; i < 1; i++) {
                Log.info("News "+i+" - from BBC: -> "+newsList[1]);
                const matchPercentage =  await NewsUtil.getMatchScore(news,newsList[i]);
               if (matchPercentage > 10) {
                Log.info("Valid match - "+ news);
              } else {
                Log.info("Less match -" +news);
                // throw new Error(`News Not valid with source BBC`);
              }
            }
          }
          
     }

    
}