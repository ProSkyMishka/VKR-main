import React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'

const ContentView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Text style={styles.text}>Green</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default ContentView