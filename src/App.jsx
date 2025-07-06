import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input.trim(), completed: false }])
      setInput('')
    }
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const editTask = (id, text) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text } : t))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center px-4 py-8">
      <Header />
      <div className="bg-white shadow-lg rounded-lg p-4 mt-6 w-full max-w-md">
        <div className="flex gap-2 mb-4">
          <input
            className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring focus:ring-purple-300"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What do you need to do?"
          />
          <button
            onClick={addTask}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
          >
            Add
          </button>
        </div>
        {tasks.length === 0 ? (
          <div className="text-center text-gray-400 py-8">No tasks yet. Add one!</div>
        ) : (
          <ToDoList
            tasks={tasks}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        )}
      </div>
    </div>
  )
}
