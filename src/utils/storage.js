export const get_tasks = () => {
  try {
    return JSON.parse(localStorage.getItem("tasks")) || []
  } catch {
    return []
  }
}

export const save_tasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
