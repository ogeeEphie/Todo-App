const form = document.querySelector("#task-form");
const input = document.querySelector("#todo-text");
const level = document.querySelector("#priority");
const list = document.querySelector("#todo-list");

let todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

function addTodo() {
  const todo = {
    text: input.value,
    priority: level.value,
    id: Date.now(),
  };

  todos.push(todo);
  input.value = "";
  level.value = "";

  const listItem = `
    <li class="list-group-item d-flex justify-content-between align-items-center" id="${todo.id}">
      <span>${todo.priority} | ${todo.text}</span>
      <button type="button" class="btn btn-danger btn-sm" onclick="removeTodo(${todo.id})">Remove</button>
    </li>
  `;

  list.insertAdjacentHTML("beforeend", listItem);
}

function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  document.getElementById(id).remove();
}
