// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import SongDetails from '../screens/SongDetails/SongDetails';



const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'float'}
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Song Detail" component={SongDetails}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;