import React, { useState } from "react"
import "./style.css"

export default function TaskForm({ add_task }) {
  const [title, set_title] = useState("")
  const [desc, set_desc] = useState("")

  const handle_add = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    const new_task = {
      id: Date.now(),
      title,
      desc,
      done: false,
      created: new Date().toISOString()
    }
    add_task(new_task)
    set_title("")
    set_desc("")
  }

  return (
    <form onSubmit={handle_add} className="form-container">
      <input
        value={title}
        onChange={e => set_title(e.target.value)}
        placeholder="Task title"
        className="input"
      />
      <input
        value={desc}
        onChange={e => set_desc(e.target.value)}
        placeholder="Description (optional)"
        className="input"
      />
      <button type="submit" className="button green-button">Add Task</button>
    </form>
  )
}
