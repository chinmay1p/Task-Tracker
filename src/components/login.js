import React, { useState } from "react"
import "./style.css"

export default function Login({ set_user }) {
  const [name, set_name] = useState("")

  const handle_login = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    localStorage.setItem("user", name)
    set_user(name)
  }

  return (
    <form onSubmit={handle_login} className="form-container login-form">
      <h2 className="form-heading">Login</h2>
      <input
        value={name}
        onChange={e => set_name(e.target.value)}
        placeholder="Enter name"
        className="input"
      />
      <button type="submit" className="button blue-button">Go</button>
    </form>
  )
}
