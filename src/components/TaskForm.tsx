import { useState } from 'react'
import type { FormEvent } from 'react'

interface TaskFormProps {
  onAddTask: (title: string) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedTitle = title.trim()

    if (!trimmedTitle) return

    onAddTask(trimmedTitle)
    setTitle('')
  }

  return (
    <form className="task-form" aria-label="Add a task" aria-describedby="preview-note" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task-title">Task title</label>
      <input id="task-title" name="title" type="text" placeholder="What would you like to work on?" value={title} onChange={(event) => setTitle(event.target.value)} />
      <button className="add-button" type="submit"><span aria-hidden="true">+</span> Add task</button>
    </form>
  )
}

export default TaskForm
