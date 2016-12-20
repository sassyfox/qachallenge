module.exports = 
{ 'A004-remove-single-task': function(client) {
    client
	  .url('http://todomvc.com/examples/angular2/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'TaskA004-1')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'TaskA004-2')
      .submitForm('#todo-form')
	  .setValue('#new-todo', 'TaskA004-3')
      .submitForm('#todo-form')
	  .click('#todo-list li:nth-child(2) .toggle')	  
	  .saveScreenshot('A004-remove-single-task.png')
      .end();
  }