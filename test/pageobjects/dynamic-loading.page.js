const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get startButton() {
        return $('#start button');
    }
    
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async button () {
        //const start = await $('#start');
        //await this.button.click();


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dynamic_loading/1');
    }
}

module.exports = new DynamicLoadingPage();
