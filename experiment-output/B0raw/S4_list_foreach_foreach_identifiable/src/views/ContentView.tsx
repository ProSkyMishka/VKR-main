import React, { useState } from 'react'

interface TaskItem {
  id: string
  name: string
}

const ContentView: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', name: 'A' },
    { id: '2', name: 'B' },
  ])

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView