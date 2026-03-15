import React from 'react'
import { NavigationView, NavigationLink, Text } from 'react-native'

function ContentView() {
  return (
    <NavigationView>
      <NavigationLink destination={<Text>Dest</Text>}>
        <Text>Go</Text>
      </NavigationLink>
      <Text>Link</Text>
    </NavigationView>
  )
}

export default ContentView