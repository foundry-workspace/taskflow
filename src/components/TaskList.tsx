import type { Task } from '../types/task'
import TaskItem from './TaskItem'

interface TaskListProps {
  tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="task-list" aria-label="Tasks">
      {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </ul>
  )
}

export default TaskList
