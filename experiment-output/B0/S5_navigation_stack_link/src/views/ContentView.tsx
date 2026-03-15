import React from 'react'
import { NavigationStack, NavigationLink, Text } from './components'

const ContentView = () => {
  return (
    <NavigationStack>
      <NavigationLink title="Next">
        <Text>Next</Text>
      </NavigationLink>
    </NavigationStack>
  )
}

export default ContentView