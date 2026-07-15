export type Todo = {
  id: number
  title: string
  completed: boolean
}

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  })
  if (!res.ok) throw new Error(`${init?.method ?? 'GET'} ${path} failed: ${res.status}`)
  return res.status === 204 ? (undefined as T) : ((await res.json()) as T)
}

export const getTodos = () => request<Todo[]>('/api/todos')

export const createTodo = (title: string) =>
  request<Todo>('/api/todos', { method: 'POST', body: JSON.stringify({ title }) })

export const updateTodo = (id: number, patch: Partial<Pick<Todo, 'title' | 'completed'>>) =>
  request<Todo>(`/api/todos/${id}`, { method: 'PATCH', body: JSON.stringify(patch) })

export const deleteTodo = (id: number) =>
  request<void>(`/api/todos/${id}`, { method: 'DELETE' })
