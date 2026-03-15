import React, { useState } from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  return (
    <div>
      <div>
        <button onClick={() => setSelectedSection('A')}>Section A</button>
        <button onClick={() => setSelectedSection('B')}>Section B</button>
      </div>
      {selectedSection === 'A' && (
        <div>
          <div>A1</div>
          <div>A2</div>
        </div>
      )}
      {selectedSection === 'B' && (
        <div>
          <div>B1</div>
          <div>B2</div>
        </div>
      )}
    </div>
  )
}

export default ContentView