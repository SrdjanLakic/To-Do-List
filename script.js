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
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  checkButton.classList.add('check-button');
  todoEl.appendChild(checkButton);
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-circle-trash"></i>';
  trashButton.classList.add('trash-button');
  todoEl.appendChild(trashButton);
  todoList.appendChild(todoEl);
};

todoButton.addEventListener('click', addTodo);
