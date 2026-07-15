# ToDoList

Express server for the ToDoList app.

## Setup

```bash
npm install
```

## Run

```bash
npm start      # production
npnpm run dev    # auto-reload with nodemon
```

Server listens on `PORT` (default `3000`).

## API

Base path: `/api/todos`

| Method | Endpoint          | Description       |
|--------|--------------------|--------------------|
| GET    | `/api/todos`       | List all todos     |
| GET    | `/api/todos/:id`   | Get a single todo  |
| POST   | `/api/todos`       | Create a todo      |
| PUT    | `/api/todos/:id`   | Update a todo      |
| DELETE | `/api/todos/:id`   | Delete a todo      |

Request/response body:

```json
{
  "id": 1,
  "title": "Buy milk",
  "completed": false
}
```

`POST` requires `title` (string). `completed` defaults to `false`.

Health check: `GET /health`
