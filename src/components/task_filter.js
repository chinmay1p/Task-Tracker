import React from "react"
import "./style.css"

export default function TaskFilter({ tasks, filter, set_filter }) {
  const count = (cond) => tasks.filter(cond).length
  return (
    <div className="filter-container">
      <button
        onClick={() => set_filter("all")}
        className={`filter-button ${filter === "all" ? "active" : ""}`}
      >
        All ({tasks.length})
      </button>
      <button
        onClick={() => set_filter("done")}
        className={`filter-button ${filter === "done" ? "active" : ""}`}
      >
        Done ({count(t => t.done)})
      </button>
      <button
        onClick={() => set_filter("todo")}
        className={`filter-button ${filter === "todo" ? "active" : ""}`}
      >
        Todo ({count(t => !t.done)})
      </button>
    </div>
  )
}
