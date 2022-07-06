const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

const addTodo = function (e) {
  e.preventDefault();

  const todoEl = document.createElement('div');
  todoEl.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.textContent = todoInput.value;
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
  todoInput.value = '';
};

const deleteCheckItem = function (e) {
  const item = e.target;
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('slide');
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
  console.log(todos);
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

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckItem);
