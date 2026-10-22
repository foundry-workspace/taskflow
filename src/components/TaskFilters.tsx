function TaskFilters() {
  return (
    <div className="task-toolbar">
      <div className="task-filters" role="group" aria-label="Filter tasks" aria-describedby="preview-note">
        <button type="button" className="filter-button selected" aria-pressed="true" disabled>All</button>
        <button type="button" className="filter-button" aria-pressed="false" disabled>Active</button>
        <button type="button" className="filter-button" aria-pressed="false" disabled>Completed</button>
      </div>
      <span className="list-caption">Every step counts</span>
    </div>
  )
}

export default TaskFilters
