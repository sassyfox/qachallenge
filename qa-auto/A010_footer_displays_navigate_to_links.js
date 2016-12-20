module.exports = {
'A010-footer-displays-and-navigate-to-links': function(client) {
    client
    .url('http://todomvc.com/examples/angular2/')
      .waitForElementVisible('#footer.info', 1000)
      .assert.containsText('#footer.info', 'Created by Sam Saccone and Colin Eberhardt using Angular2')
	  .click.link(#Sam Saccon', 'http://github.com/samccone')
	  .click.link(#Colin Eberhardt', 'http://github.com/colineberhardt')
	  .saveScreenshot('A010-footer-displays-navigate-to-links.png')
      .end();
  }
};