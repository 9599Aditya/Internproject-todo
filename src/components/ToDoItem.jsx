import { useState } from 'react'

export default function ToDoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const saveEdit = () => {
    if (editText.trim()) {
      onEdit(task.id, editText.trim())
      setIsEditing(false)
    }
  }

  return (
    <div className="flex items-center justify-between bg-gray-50 rounded shadow-sm px-3 py-2 hover:shadow transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="accent-purple-500"
        />
        {isEditing ? (
          <input
            className="border rounded px-2 py-1 text-sm"
            value={editText}
            onChange={e => setEditText(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={e => e.key === 'Enter' && saveEdit()}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
          >
            {task.text}
          </span>
        )}
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-600 text-lg"
      >
        ×
      </button>
    </div>
  )
}
