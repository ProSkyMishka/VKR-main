import React from 'react'
import { StyleSheet, View, Text } from 'react-native-web'

function ContentView() {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default ContentView