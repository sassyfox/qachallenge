module.exports = 
{'A009-remove-task-from-list': function(client) {
  client
    .url('http://todomvc.com/examples/angular2/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#new-todo', 'TaskA009-1')
    .submitForm('#todo-form')
	.setValue('#new-todo', 'TaskA009-2')
    .submitForm('#todo-form')
	.click('#todo-list li:first-child .toggle button "destroy"')
	.save.Screenshot(A009-remove-task-from-list.png)
    .end();
};


