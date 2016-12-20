module.exports = {
'A006-Add-space-does-not-add-task': function(client) {
  client
    .url('http://todomvc.com/examples/angular2/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#new-todo', 'TaskA006-1')
    .submitForm('#todo-form')
    .setValue('#new-todo', ' ')
    .submitForm('#todo-form')
    .assert.containsText('#todo-count', '1 item left')
	.saveScreenshot('A006-no-tasks-test.png')
    .end();
}