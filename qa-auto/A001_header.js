module.exports = {
'A001-header-h1-displays': function(client) {
    client
    .url('http://todomvc.com/examples/angular2/')
      .waitForElementVisible('#header h1', 1000)
      .assert.containsText('#header h1', 'todos')
	  .saveScreenshot('A001-h1-header-test.png')
      .end();
  }
}
