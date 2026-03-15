import React from 'react'

interface ContentViewProps {
  // no props
}

const ContentView: React.FC<ContentViewProps> = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Custom: NavigationStack {
              NavigationLink("Next") { Text("Next") }
             .navigationTitle("Stack")
         } */}
    </div>
  )
}

export default ContentView