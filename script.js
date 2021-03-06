const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

const addTodo = function (e) {
  e.preventDefault();
  if (!todoInput.value) return;
  const todoEl = document.createElement('div');
  todoEl.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.textContent = todoInput.value;
  newTodo.classList.add('todo-item');
  todoEl.appendChild(newTodo);
  saveLocalItem(todoInput.value);
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  checkButton.classList.add('done-btn');
  todoEl.appendChild(checkButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  trashButton.classList.add('trash-btn');
  todoEl.appendChild(trashButton);
  todoList.appendChild(todoEl);
  todoInput.value = '';
};

const deleteCheckItem = function (e) {
  const item = e.target;
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('slide');
    deleteLocalItem(todo);
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }
  if (item.classList[0] === 'done-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('done');
  }
};
const filterList = function (e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'done':
        if (todo.classList.contains('done')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'not-done':
        if (!todo.classList.contains('done')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
};

const saveLocalItem = function (todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const getItem = function () {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach((todo) => {
    const todoEl = document.createElement('div');
    todoEl.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.textContent = todo;
    newTodo.classList.add('todo-item');
    todoEl.appendChild(newTodo);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    checkButton.classList.add('done-btn');
    todoEl.appendChild(checkButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add('trash-btn');
    todoEl.appendChild(trashButton);
    todoList.appendChild(todoEl);
  });
};
const deleteLocalItem = function (todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
};

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckItem);
filterOption.addEventListener('click', filterList);
document.addEventListener('DOMContentLoaded', getItem);
