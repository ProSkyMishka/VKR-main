import React from 'react'
import { ZStack, Color, Text } from './ContentViewStyles'

function ContentView() {
  return (
    <ZStack>
      <Color color="red" ignoresSafeArea />
      <Text color="white">Red</Text>
    </ZStack>
  )
}

export default ContentView