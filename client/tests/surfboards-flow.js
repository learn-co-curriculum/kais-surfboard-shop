module.exports = {
  'get to surfboards page': (browser) => {
    browser 
      // Load the page at the launch url 
      .url(browser.launchUrl)
      // wait for navbar to load
      .waitForElementVisible('.navbar', 1000)
      // click on the surfboard link 
      .click('a[href="/surfboards"]')

    // Verify that you are at the /surfboards route 
    browser.assert.urlContains('surfboards');
  }, 

  'close': (browser) => browser.end()
}