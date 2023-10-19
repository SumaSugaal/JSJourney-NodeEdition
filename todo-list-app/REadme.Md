# Node.js Todo List Application

<div align="center">
  <img src="https://jumpseller.com/images/share/ecommerce-precio-de-mi-producto.jpg" alt="Assignment Icon" width="900">
</div>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Contributors](#contributors)
- [Contact](#contact)
- [License](#license)
- [Code](#code)

## Introduction

Hello, I'm Sumayo Cabdirisaaq Maxamuud, and this repository hosts my Node.js Todo List Application. This project was created as part of a Node.js assignment. It's a command-line-based Todo List application that allows users to manage their tasks effectively. With this application, you can add, update, delete, and search for tasks, making your task management more efficient.

## Features

- **Add a Task:** Easily add tasks to your list.
- **Update a Task:** Modify existing tasks to keep your list up-to-date.
- **Delete a Task:** Remove completed or unwanted tasks from your list.
- **Display Tasks:** View your tasks in a clear and organized manner.
- **Search Tasks:** Find specific tasks quickly using keywords.
- **Quit:** Exit the application when you're done managing your tasks.

## Usage

1. Clone the repository to your local machine.
2. Make sure you have Node.js installed.
3. Run the application by executing `node main.js` in your terminal.
4. Follow the on-screen instructions to interact with your Todo List.

```bash
$ node main.js





Contributors
Sumayo Cabdirisaaq Maxamuud
Contact
Connect with me on social media:

LinkedIn
Twitter
For inquiries, you can email me at sumayocabdirisaaq@email.com

License
This project is open-source and available .





// Node.js Todo List Application

const readline = require('readline');
const fs = require('fs');

const todoFile = 'todo.json';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

// Rest of your code here...


