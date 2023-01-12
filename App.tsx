import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { SafeAreaView,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView
        style={{flex:1,
        justifyContent: 'center',
        alignItems: 'center'}}>

        <Text>App</Text>
      </SafeAreaView> */}
      <AuthNavigator />
    </NavigationContainer>
      // <AppNavigator />
  );
}
