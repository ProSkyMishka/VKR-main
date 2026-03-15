import { useState } from 'react'
import { TaskItem } from '../types'

interface ContentViewProps {
  // no props
}

const ContentView = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', name: 'A' },
    { id: '2', name: 'B' }
  ])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span>{t.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView