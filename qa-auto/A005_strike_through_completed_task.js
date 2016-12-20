module.exports = 
{ 'A005-strike-through-completed-task': function(client) {
    client
	  .url('http://todomvc.com/examples/angular2/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'TaskA005-1')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'TaskA005-2')
      .submitForm('#todo-form')
	  .setValue('#new-todo', 'TaskA005-3')
      .submitForm('#todo-form')
	  .click('#todo-list li:nth-child(2) .toggle')
	  .assert.cssClassPresent('#todo-list li:first-child', 'completed')
	  .saveScreenshot('A005-strike-through-completed-task.png')
      .end();
};