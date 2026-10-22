function TaskForm() {
  return (
    <form className="task-form" aria-label="Add a task" aria-describedby="preview-note">
      <label className="sr-only" htmlFor="task-title">Task title</label>
      <input id="task-title" name="title" type="text" placeholder="What would you like to work on?" disabled />
      <button className="add-button" type="button" disabled><span aria-hidden="true">+</span> Add task</button>
    </form>
  )
}

export default TaskForm
