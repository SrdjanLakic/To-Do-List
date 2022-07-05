const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

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
    console.log(todo);
    todo.remove();
  }
  if (item.classList[0] === 'done-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
};
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckItem);
