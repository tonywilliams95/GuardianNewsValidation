import UIActions from "../../support/playwright/actions/UIActions";
import Log from "../../support/logger/Log";
``
export default class NewsPage {
    constructor(private web: UIActions) { }

    private newsContent= "//div[contains(@class,'fc-slice-wrapper')]//li[contains(@class,'u-faux-block-link')]//h3/a";
    

    public async navigateToHomePage() {
        await this.web.goto(process.env.BASE_URL, "News page");
    }

    public async getAllNewsTitles(){
        const Newslists = await this.web.element(this.newsContent, "News").getAllTextContent();
        for(const news of Newslists) {
            Log.info("News Title:- "+ news);
        }
        return Newslists;
    }

}