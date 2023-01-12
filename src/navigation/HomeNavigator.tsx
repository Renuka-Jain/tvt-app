import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import { Details, ForgotPassword, Search } from '../screens';
import COLORS from '../constants/colors';
import Home from '../screens/home/Home';
import Register from '../screens/auth/Register';
//import DrawerNavigator from './DrawerNavigator';
import { ROUTES } from '../constants';
import { RollInLeft } from 'react-native-reanimated';

// Navigator, Screen, Group
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function DetailNavigator() {
  console.log(Stack);
  return ( //
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={Home}/> 
      <Stack.Screen name={ROUTES.SEARCH_MENU} component={Search} /> 
      <Stack.Screen name={ROUTES.DETAIL} component={Details} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default DetailNavigator;