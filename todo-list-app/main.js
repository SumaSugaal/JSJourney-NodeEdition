const readline = require('readline');
const todo = require('./todo');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  const todoList = todo.loadTodoList();

  rl.on('close', () => {
    console.log("Goodbye!");
    process.exit(0);
  });

  function promptUser() {
    console.log("Todo List Menu:");
    console.log("1. Add a task");
    console.log("2. Update a task");
    console.log("3. Delete a task");
    console.log("4. Display tasks");
    console.log("5. Search tasks");
    console.log("6. Quit");

    rl.question("Enter your choice: ", (choice) => {
      switch (choice) {
        case '1':
          rl.question("Enter the task: ", (task) => {
            todo.addTask(todoList, task);
            console.log("Task added.");
            todo.displayTasks(todoList);
            promptUser();
          });
          break;
        case '2':
          todo.displayTasks(todoList);
          rl.question("Enter the task number to update: ", (taskNumber) => {
            const index = parseInt(taskNumber) - 1;
            if (index >= 0 && index < todoList.length) {
              rl.question("Enter the updated task: ", (updatedTask) => {
                todo.updateTask(todoList, index, updatedTask);
                console.log("Task updated.");
                todo.displayTasks(todoList);
                promptUser();
              });
            } else {
              console.log("Invalid task number. Please try again.");
              promptUser();
            }
          });
          break;
        case '3':
          todo.displayTasks(todoList);
          rl.question("Enter the task number to delete: ", (taskNumber) => {
            const index = parseInt(taskNumber) - 1;
            if (index >= 0 && index < todoList.length) {
              todo.deleteTask(todoList, index);
              console.log("Task deleted.");
              todo.displayTasks(todoList);
              promptUser();
            } else {
              console.log("Invalid task number. Please try again.");
              promptUser();
            }
          });
          break;
        case '4':
          todo.displayTasks(todoList);
          promptUser();
          break;
        case '5':
          rl.question("Enter a keyword to search for tasks: ", (keyword) => {
            const searchResults = todo.searchTasks(todoList, keyword);
            if (searchResults.length === 0) {
              console.log("No matching tasks found.");
            } else {
              console.log("Search Results:");
              todo.displayTasks(searchResults);
            }
            promptUser();
          });
          break;
        case '6':
          console.log("Goodbye!");
          rl.close();
          break;
        default:
          console.log("Invalid choice. Please try again.");
          promptUser();
      }
    });
  }

  promptUser();
}

main();
