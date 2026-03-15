import { useState } from 'react'

interface ContentViewProps {
  // no props
}

export default function ContentView() {
  const [currentScreen, setCurrentScreen] = useState<number>(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <a href="#" onClick={() => setCurrentScreen(0)}>
          <span>Page 1</span>
        </a>
        <a href="#" onClick={() => setCurrentScreen(1)}>
          <span>Page 2</span>
        </a>
        <a href="#" onClick={() => setCurrentScreen(2)}>
          <span>Page 3</span>
        </a>
      </div>
    </div>
  )
}