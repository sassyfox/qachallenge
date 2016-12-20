module.exports = 
{  'A008-select-caret-completes-all-tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angular2/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'My other new task')
      .submitForm('#todo-form')
      .click('#todo-list li:first-child .toggle')
      .click('#toggle-all')
      .assert.containsText('#todo-count', '0 items left')
	  .saveScreenshot('A008-select-caret-completes-all-tasks.png')
      .end();
  };