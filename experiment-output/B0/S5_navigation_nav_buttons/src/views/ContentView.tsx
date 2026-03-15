import React from 'react'
import { NavigationView, VStack, NavigationLink, Text } from './ContentViewComponents'

function ContentView() {
  return (
    <NavigationView>
      <VStack spacing={16}>
        <NavigationLink to="First">
          <Text>First</Text>
        </NavigationLink>
        <NavigationLink to="Second">
          <Text>Second</Text>
        </NavigationLink>
      </VStack>
    </NavigationView>
  )
}

export default ContentView