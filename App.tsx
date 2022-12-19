import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rect } from 'react-native-svg';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import routes from './src/config/routes';
import React, { useEffect } from 'react';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        {routes.map((r, i) => (
          <Stack.Screen key={i} name={r.name}>
            {(props) => <r.component nameProp={r.name} {...props} />}

          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
