import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  Player
} from '../screens';

const Stack = createStackNavigator();

const Screens = () =>  {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="home"
        options={{
          headerShown:false
        }}
        component={Home} />
      <Stack.Screen 
        name="player"
        options={{
          headerShown:false
        }}
        component={Player} />
    </Stack.Navigator>
  );
}

export default Screens;