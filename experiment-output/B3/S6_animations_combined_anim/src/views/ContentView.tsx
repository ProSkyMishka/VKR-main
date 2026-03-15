import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [on, setOn] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 16 }}>
      <span style={{ opacity: on ? 1 : 0.5, transform: `scale(${on ? 1.2 : 1})`, transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out' }}>Combo</span>
      <button onClick={() => setOn(prev => !prev)}>Toggle</button>
    </div>
  )
}

export default ContentView