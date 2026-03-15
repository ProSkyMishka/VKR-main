import React from 'react'
import { View, Text, Color } from 'react-native'

const ContentView: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 24 }}>Green</Text>
    </View>
  )
}

export default ContentView