import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [value, setValue] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: 16 }}>
        <span>{value}</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={() => setValue(value - 1)}>-</button>
          <button onClick={() => setValue(value + 1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ContentView