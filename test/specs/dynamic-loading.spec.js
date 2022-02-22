const DynamicLoadingPage = require('../pageobjects/dynamic-loading.page');


describe('My Dynamic Loading Page', () => {
    it('should verify that start button exists', async () => {
        await DynamicLoadingPage.open();
        
        await browser.setTimeout({ 'script': 5000 })
        await browser.executeAsync((done) => {
    console.log('this should not fail')
    setTimeout(done, 4900)
        })
        

        await expect(DynamicLoadingPage.startButton).toBeExisting();
        
    });
});
