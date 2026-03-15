import { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [a, setA] = useState<number>(0)
  const [b, setB] = useState<string>('')
  const [flag, setFlag] = useState<boolean>(false)

  const handleUpdate = () => {
    setA(a + 1)
    setB(`${a}`)
    setFlag(!flag)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span>a: {a}</span>
        <span>b: {b}</span>
        <span>{flag ? 'Yes' : 'No'}</span>
        <button type="button" onClick={handleUpdate} style={{ border: 'none', background: 'none', color: '#007AFF', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
          Update
        </button>
      </div>
    </div>
  )
}

export default ContentView