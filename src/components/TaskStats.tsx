import type { Task } from '../types/task'

interface TaskStatsProps {
  tasks: Task[]
}

function TaskStats({ tasks }: TaskStatsProps) {
  const completed = tasks.reduce((count, task) => count + Number(task.completed), 0)

  return (
    <section aria-label="Task overview">
      <dl className="task-stats">
        <div className="stat-card"><dt><span className="stat-dot total-dot" aria-hidden="true" />Total tasks</dt><dd>{tasks.length}<span>On your radar</span></dd></div>
        <div className="stat-card"><dt><span className="stat-dot active-dot" aria-hidden="true" />Active</dt><dd>{tasks.length - completed}<span>Ready for your focus</span></dd></div>
        <div className="stat-card"><dt><span className="stat-dot completed-dot" aria-hidden="true" />Completed</dt><dd>{completed}<span>One step further</span></dd></div>
      </dl>
    </section>
  )
}

export default TaskStats
