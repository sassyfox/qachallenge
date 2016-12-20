module.exports = {
'A003-Double clicking allows you to edit the task': function(client) {
    client
      .url('http://todomvc.com/examples/angular2/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'TaskA003-1')
      .submitForm('#todo-form')
      .doubleClick('#todo-list li:first-child label')
      .assert.visible('#todo-list li:first-child form')
	  .saveScreenshot('A003-edit-test.png
	  .end();
};