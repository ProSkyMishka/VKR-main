import React from 'react'
import { NavigationStack, VStack, Text } from 'react-native-web'

const ContentView: React.FC = () => {
  return (
    <NavigationStack>
      <VStack>
        <Text>Stack root</Text>
      </VStack>
      <NavigationStack.Navigator>
        <NavigationStack.Screen name="Stack" component={VStack} />
      </NavigationStack.Navigator>
    </NavigationStack>
  )
}

export default ContentView