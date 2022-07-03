const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const addTodo = function (e) {
  e.preventDefault();
  console.log('Hello');
  const todoEl = document.createElement('div');
  todoEl.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.textContent = 'hey';
  todoEl.appendChild(newTodo);
};

todoButton.addEventListener('click', addTodo);
