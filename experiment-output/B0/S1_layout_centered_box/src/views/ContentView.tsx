import React from 'react'
import { VStack, Text, Spacer } from 'react-native-web'

const ContentView = () => {
  return (
    <VStack>
      <Spacer />
      <Text style={{ padding: 24, backgroundColor: 'rgba(255, 165, 0, 0.3)', borderRadius: 8 }}>
        Center
      </Text>
      <Spacer />
    </VStack>
  )
}

export default ContentView