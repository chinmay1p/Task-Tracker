import React from "react"
import TaskItem from "./task_item"
import "./style.css"

export default function TaskList({ tasks, update_task, delete_task }) {
  return (
    <div>
      {tasks.length === 0 && <p className="empty-message">No tasks</p>}
      {tasks.map(t => (
        <TaskItem key={t.id} task={t} update_task={update_task} delete_task={delete_task} />
      ))}
    </div>
  )
}
