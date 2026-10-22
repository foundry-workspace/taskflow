import type { Task } from '../types/task'

interface TaskItemProps {
  task: Task
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <li className={`task-item${task.completed ? ' is-completed' : ''}`}>
      <label className="task-label">
        <input type="checkbox" checked={task.completed} disabled />
        <span className="task-title">{task.title}</span>
      </label>
      <span className={`task-status ${task.completed ? 'done' : 'active'}`}>{task.completed ? 'Completed' : 'Active'}</span>
      <div className="task-actions">
        <button type="button" className="icon-button" aria-label={`Edit task: ${task.title}`} disabled>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 5 4 4M4 20l4-1 12-12a2.8 2.8 0 0 0-4-4L4 15Z" /></svg>
        </button>
        <button type="button" className="icon-button" aria-label={`Delete task: ${task.title}`} disabled>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5m4-5v5" /></svg>
        </button>
      </div>
    </li>
  )
}

export default TaskItem
