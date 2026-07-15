# ToDoList — Frontend

React + TypeScript + Vite client for the ToDoList app.

## Setup

```bash
npm install
```

Copy the env file and adjust if needed:

```bash
cp .env.example .env
```

`VITE_API_URL` defaults to `http://localhost:3000`, matching the [backend](../backend/readme.md)'s default port.

## Run

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

The [backend](../backend/readme.md) must be running for the app to load todos.

## Structure

- `src/api.ts` — fetch wrapper and API calls (`getTodos`, `createTodo`, `updateTodo`, `deleteTodo`)
- `src/App.tsx` — top-level state and data flow
- `src/components/TodoInput.tsx` — add-todo form
- `src/components/TodoItem.tsx` — single todo row (toggle/delete)
