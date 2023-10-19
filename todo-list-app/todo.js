const fs = require('fs');

const todoFile = 'todo.json';

function loadTodoList() {
  try {
    const data = fs.readFileSync(todoFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    } else {
      console.error('Error loading Todo List:', err.message);
      process.exit(1);
    }
  }
}

function saveTodoList(todoList) {
  try {
    fs.writeFileSync(todoFile, JSON.stringify(todoList, null, 2));
  } catch (err) {
    console.error('Error saving Todo List:', err.message);
    process.exit(1);
  }
}

function addTask(todoList, task) {
  todoList.push({ task, done: false });
  saveTodoList(todoList);
}

function updateTask(todoList, index, updatedTask) {
  if (index >= 0 && index < todoList.length) {
    todoList[index].task = updatedTask;
    saveTodoList(todoList);
  }
}

function deleteTask(todoList, index) {
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
    saveTodoList(todoList);
  }
}

function displayTasks(todoList) {
  todoList.forEach((item, index) => {
    console.log(`${index + 1}. [${item.done ? 'x' : ' '}] ${item.task}`);
  });
}

function searchTasks(todoList, keyword) {
  const results = todoList.filter((item) => item.task.toLowerCase().includes(keyword.toLowerCase()));
  return results;
}

module.exports = {
  loadTodoList,
  saveTodoList,
  addTask,
  updateTask,
  deleteTask,
  displayTasks,
  searchTasks,
};
