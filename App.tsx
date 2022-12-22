import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import AppNavigator from './src/navigation/AppNavigator';


export default function App() {
  return (
    
      <AppNavigator />
  );
}
