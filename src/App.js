import React, { useState, useEffect } from "react"
import Login from "./components/login"
import TaskForm from "./components/task_form"
import TaskList from "./components/task_list"
import TaskFilter from "./components/task_filter"
import { get_tasks, save_tasks } from "./utils/storage"
import "./App.css"

export default function App() {
  const [user, set_user] = useState(localStorage.getItem("user") || "")
  const [tasks, set_tasks] = useState(get_tasks())
  const [filter, set_filter] = useState("all")

  useEffect(() => {
    save_tasks(tasks)
  }, [tasks])

  if (!user) return <Login set_user={set_user} />

  const add_task = (task) => set_tasks([...tasks, task])
  const update_task = (id, updated) =>
    set_tasks(tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)))
  const delete_task = (id) =>
    set_tasks(tasks.filter((t) => t.id !== id))

  const shown_tasks = tasks.filter((t) =>
    filter === "all" ? true : filter === "done" ? t.done : !t.done
  )

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Hi {user}</h1>
        <button
          onClick={() => {
            localStorage.removeItem("user")
            set_user("")
          }}
          className="logout-button"
        >
          Logout
        </button>
      </div>
      <TaskForm add_task={add_task} />
      <TaskFilter tasks={tasks} filter={filter} set_filter={set_filter} />
      <TaskList tasks={shown_tasks} update_task={update_task} delete_task={delete_task} />
    </div>
  )
}
