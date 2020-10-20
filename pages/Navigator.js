import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './HomePage'
import Detail from './DetailsPage'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home ' }}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          
          options={({ route }) => ({
            title: 'Movie Details'
          })}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator