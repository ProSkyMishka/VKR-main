import React from 'react'
import { NavigationView, List, NavigationLink, Text } from './ContentViewComponents'

function ContentView() {
  return (
    <NavigationView>
      <List>
        <NavigationLink title="A">
          <Text>A</Text>
        </NavigationLink>
        <NavigationLink title="B">
          <Text>B</Text>
        </NavigationLink>
      </List>
    </NavigationView>
  )
}

export default ContentView