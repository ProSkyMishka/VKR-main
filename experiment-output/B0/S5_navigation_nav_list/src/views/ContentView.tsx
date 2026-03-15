import React from 'react'
import { NavigationView, List, Text } from './ContentViewComponents'

function ContentView() {
  return (
    <NavigationView title="List">
      <List>
        <Text>Row 1</Text>
        <Text>Row 2</Text>
      </List>
    </NavigationView>
  )
}

export default ContentView