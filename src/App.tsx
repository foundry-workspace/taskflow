import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskFilters from './components/TaskFilters'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import type { Task } from './types/task'
import './App.css'

const sampleTasks: Task[] = [
  { id: '1', title: 'Plan the TaskFlow dashboard layout', completed: true },
  { id: '2', title: 'Build reusable React components', completed: false },
  { id: '3', title: 'Make the dashboard mobile friendly', completed: false },
  { id: '4', title: 'Set up the project with React and TypeScript', completed: true },
]

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content">
        <div className="dashboard-intro">
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
          <h2>A little focus. A lot of progress.</h2>
          <p>Make room for what matters, one task at a time.</p>
        </div>
        <TaskStats tasks={sampleTasks} />
        <section className="task-panel" aria-labelledby="tasks-heading">
          <div className="panel-heading">
            <div><h2 id="tasks-heading">My tasks</h2><p>Your next steps, all in one place.</p></div>
            <span className="preview-badge">UI preview</span>
          </div>
          <p className="preview-note" id="preview-note">Sample tasks only. Adding, filtering, editing, and completing tasks will be available later.</p>
          <TaskForm />
          <TaskFilters />
          <TaskList tasks={sampleTasks} />
          <div className="panel-footer"><span className="status-dot" aria-hidden="true" />Small steps add up. Keep going.</div>
        </section>
      </main>
      <footer className="app-footer">TaskFlow <span aria-hidden="true">·</span> A clearer day starts here.</footer>
    </div>
  )
}

export default App
