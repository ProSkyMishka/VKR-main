import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [big, setBig] = useState<boolean>(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ transform: `scale(${big ? 2 : 1})`, transition: 'transform 0.3s ease-in-out' }}>Scale</span>
      <button onClick={() => setBig(!big)} style={{ marginTop: 16 }}>Toggle</button>
    </div>
  )
}

export default ContentView