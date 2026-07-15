import type { Todo } from '../api'

type Props = {
  todo: Todo
  onToggle: (todo: Todo) => void
  onDelete: (id: number) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
        <span className={todo.completed ? 'done' : undefined}>{todo.title}</span>
      </label>
      <button className="delete" onClick={() => onDelete(todo.id)} aria-label={`מחק ${todo.title}`}>
        ✕
      </button>
    </li>
  )
}
