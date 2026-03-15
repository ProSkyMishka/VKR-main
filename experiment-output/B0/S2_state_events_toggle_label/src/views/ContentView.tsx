import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div style={{ padding: '1rem' }}>
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        {enabled ? 'On' : 'Off'}
      </label>
    </div>
  )
}

export default ContentView