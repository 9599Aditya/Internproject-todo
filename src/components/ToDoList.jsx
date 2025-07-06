import ToDoItem from './ToDoItem'

export default function ToDoList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
