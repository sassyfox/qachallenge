module.exports = {
'A002-add-item': function(client) {
  client
    .url('http://todomvc.com/examples/angular2/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#task1', 'Shovel driveway')
    .submitForm('#todo-form')
    .assert.containsText('#todo-list li:first-child label', 'task1')
	.saveScreenshot('A002-add-item.png')
    .end();
},