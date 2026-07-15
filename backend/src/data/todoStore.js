let todos = [];
let nextId = 1;

function getAll() {
  return todos;
}

function getById(id) {
  return todos.find((todo) => todo.id === id);
}

function create({ title, completed = false }) {
  const todo = { id: nextId++, title, completed };
  todos.push(todo);
  return todo;
}

function update(id, changes) {
  const todo = getById(id);
  if (!todo) return null;
  Object.assign(todo, changes);
  return todo;
}

function remove(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
