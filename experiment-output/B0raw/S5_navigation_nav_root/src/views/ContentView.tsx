import React from 'react'
import { NavigationView, VStack, Text } from './ContentViewComponents'

function ContentView() {
  return (
    <NavigationView>
      <VStack>
        <Text>Root</Text>
      </VStack>
      navigationTitle="Home"
    </NavigationView>
  )
}

export default ContentView