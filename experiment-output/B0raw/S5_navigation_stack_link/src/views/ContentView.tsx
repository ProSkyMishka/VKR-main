import React from 'react'
import { NavigationStack, NavigationLink, Text } from 'react-native-web'

const ContentView: React.FC = () => {
  return (
    <NavigationStack>
      <NavigationLink to="/next">
        <Text>Next</Text>
      </NavigationLink>
      <Text>Stack</Text>
    </NavigationStack>
  )
}

export default ContentView