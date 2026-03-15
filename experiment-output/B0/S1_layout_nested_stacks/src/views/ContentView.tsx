import React from 'react'

const ContentView: React.FC = () => {
  return (
    <VStack spacing={20}>
      <HStack>
        <Text>A</Text>
        <Text>B</Text>
      </HStack>
      <HStack>
        <Text>C</Text>
        <Text>D</Text>
      </HStack>
    </VStack>
  )
}

const VStack: React.FC<{ spacing: number }> = ({ children, spacing }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing }}>
      {children}
    </div>
  )
}

const HStack: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
      {children}
    </div>
  )
}

const Text: React.FC = ({ children }) => {
  return <div style={{ padding: '10px 20px' }}>{children}</div>
}

export default ContentView