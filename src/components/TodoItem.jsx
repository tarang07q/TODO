import React, { useContext, useState } from 'react'
import { useTodo } from '../contexts/Todo_context'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()  // Call useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div
      className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 gap-x-3 shadow-lg transition-transform duration-300 hover:scale-[1.02] ${
        todo.completed ? "bg-[#d4f1c5]" : "bg-[#f1d5e5]"
      }`}
    >
      <div className="flex items-center gap-x-3 w-full">
        <input
          type="checkbox"
          className="cursor-pointer w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500 rounded"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`w-full text-lg font-medium outline-none bg-transparent ${
            isTodoEditable ? "border-b border-gray-500 px-1" : "border-none"
          } ${todo.completed ? "line-through text-gray-400" : "text-black"}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      
      {/* Edit, Save Button */}
      <button
        className={`ml-2 px-3 py-1 text-sm rounded-lg focus:outline-none ${
          todo.completed
            ? "cursor-not-allowed text-gray-400"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => {
          if (todo.completed) return

          if (isTodoEditable) {
            editTodo()
          } else setIsTodoEditable((prev) => !prev)
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      {/* Delete Todo Button */}
      <button
        className="ml-2 px-3 py-1 text-sm bg-red-400 text-white rounded-lg hover:bg-red-600 focus:outline-none transition-all"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem;
