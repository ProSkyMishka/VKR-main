import React from 'react'
import { NavigationView, NavigationLink, Text } from 'react-native-web'

const ContentView: React.FC = () => {
  return (
    <NavigationView>
      <NavigationLink destination={<Text>Dest</Text>}>
        <Text>Go</Text>
      </NavigationLink>
      <Text style={{ navigationTitle: 'Link' }} />
    </NavigationView>
  )
}

export default ContentView