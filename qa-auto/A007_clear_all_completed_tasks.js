module.exports = 
{'A007-clear-all-completed-tasks': function(client) {
    client
    .url('http://todomvc.com/examples/angular2/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#new-todo', 'TaskA007-1')
    .submitForm('#todo-form')
    .setValue('#new-todo', 'TaskA007-2')
    .submitForm('#todo-form')
    .click('#todo-list li:nth-child(2) .toggle')
    .click('#clear-completed')
    .assert.containsText('#todo-count', '1 item left')
    .assert.containsText('#todo-list li:first-child', 'TaskA007-1')
	save.Screenshot(A007-clear-all-completed-tasks.png)
    .end();
};