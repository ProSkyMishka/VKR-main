import React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'

const ContentView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.text}>Overlay</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default ContentView