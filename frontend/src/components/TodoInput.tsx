import { useState } from 'react'

type Props = { onAdd: (title: string) => void }

export default function TodoInput({ onAdd }: Props) {
  const [title, setTitle] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setTitle('')
  }

  return (
    <form className="input-row" onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="מה צריך לעשות?"
        aria-label="משימה חדשה"
      />
      <button type="submit" disabled={!title.trim()}>
        הוסף
      </button>
    </form>
  )
}
