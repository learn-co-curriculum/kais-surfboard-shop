const api = "http://localhost:3000";

module.exports = {
  "user goes to Kai's surfboard shop": (client) => {
    client 
      .url(client.launchUrl)

    client.assert.urlEquals(`${api}/`)
    client.assert.elementPresent('.navbar')
  },

  "user goes to the surfboards page": (client) => {
    client 
      .url(client.launchUrl)
      .waitForElementVisible('.navbar', 1000)
      .click('a[href="/surfboards"]')

    client.assert.urlEquals(`${api}/surfboards`)
    client.getText(".surfboards div#surfboard-main-container h4", function(result) {
      this.assert.equal(result.value, "...loading");
    });

  },

  'close': (client) => client.end()
}