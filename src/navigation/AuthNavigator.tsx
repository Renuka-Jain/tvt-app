import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import { ForgotPassword } from '../screens';
import COLORS from '../constants/colors';
import Home from '../screens/home/Home';
import Register from '../screens/auth/Register';
//import DrawerNavigator from './DrawerNavigator';
import { ROUTES } from '../constants';
import { RollInLeft } from 'react-native-reanimated';
const Stack = createStackNavigator();
// Navigator, Screen, Group
import BottomTabNavigator from './BottomTabNavigator';



function AuthNavigator() {
  console.log(Stack);
  return ( //
    <Stack.Navigator screenOptions={{
      headerTintColor: COLORS.white,
      headerStyle:{
        backgroundColor: COLORS.primary,
      },
    }} initialRouteName={ROUTES.LOGIN}>
      {/* <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: route.params.userId,
        })}
      /> */}
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} 
      //options={({route}) => ({title: route.params.userId,})}
      /> 


      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen name={ROUTES.REGISTER} component={Register} /> 
      <Stack.Screen
        name={ROUTES.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;