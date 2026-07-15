import { useEffect, useState } from 'react'
import * as api from './api'
import type { Todo } from './api'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .getTodos()
      .then(setTodos)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const run = (fn: () => Promise<void>) => {
    setError(null)
    fn().catch((e: Error) => setError(e.message))
  }

  const add = (title: string) =>
    run(async () => {
      const todo = await api.createTodo(title)
      setTodos((prev) => [...prev, todo])
    })

  const toggle = (todo: Todo) =>
    run(async () => {
      const updated = await api.updateTodo(todo.id, { completed: !todo.completed })
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    })

  const remove = (id: number) =>
    run(async () => {
      await api.deleteTodo(id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    })

  const left = todos.filter((t) => !t.completed).length

  return (
    <main className="app">
      <h1>המשימות שלי</h1>

      <TodoInput onAdd={add} />

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="muted">טוען…</p>
      ) : todos.length === 0 ? (
        <p className="muted">אין משימות עדיין.</p>
      ) : (
        <>
          <ul className="list">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggle} onDelete={remove} />
            ))}
          </ul>
          <p className="muted">{left} משימות פתוחות</p>
        </>
      )}
    </main>
  )
}
