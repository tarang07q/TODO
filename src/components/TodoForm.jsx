import React, { useState } from 'react'
import { useTodo } from '../contexts/Todo_context'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo: todo, completed: false })
    setTodo("")  // Reset input field after adding
  }

  return (
    <form onSubmit={add} className="flex bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-transparent focus:border-indigo-300 rounded-l-lg px-4 py-2 outline-none bg-white/90 text-black placeholder-gray-500 duration-150 transition-all focus:ring-2 focus:ring-indigo-500"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-4 py-2 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-150 ease-in-out shadow-md">
        Add
      </button>
    </form>
  )
}

export default TodoForm
