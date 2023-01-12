import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/home/Home';

const Tab = createBottomTabNavigator();


export const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: "blue", tabBarInactiveTintColor: "gray",}}>
            <Tab.Screen name="Home" component={HomeScreen} />

        </Tab.Navigator>
    )
}
