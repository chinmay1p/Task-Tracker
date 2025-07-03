import React, { useState } from "react"
import "./style.css"

export default function TaskItem({ task, update_task, delete_task }) {
  const [edit, set_edit] = useState(false)
  const [title, set_title] = useState(task.title)
  const [desc, set_desc] = useState(task.desc)

  const save_edit = () => {
    update_task(task.id, { title, desc })
    set_edit(false)
  }

  return (
    <div className={`task-item ${task.done ? "done" : ""}`}>
      {edit ? (
        <>
          <input
            value={title}
            onChange={e => set_title(e.target.value)}
            className="input small"
          />
          <input
            value={desc}
            onChange={e => set_desc(e.target.value)}
            className="input small"
          />
          <div className="button-group">
            <button onClick={save_edit} className="button blue-button small">Save</button>
            <button onClick={() => set_edit(false)} className="text-button small">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="task-content">
            <div>
              <h3 className="task-title">{task.title}</h3>
              <p className="task-desc">{task.desc}</p>
              <p className="task-time">{new Date(task.created).toLocaleString()}</p>
            </div>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => update_task(task.id, { done: !task.done })}
            />
          </div>
          <div className="button-group">
            <button onClick={() => set_edit(true)} className="text-button small blue">Edit</button>
            <button
              onClick={() => window.confirm("Delete task?") && delete_task(task.id)}
              className="text-button small red"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}
