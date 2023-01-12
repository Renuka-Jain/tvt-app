import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/home/Home'
import DetailsScreen from '../screens/home/Detail'
import FavouritesScreen from '../screens/home/MyFavourites'
import ProfileScreen from '../screens/home/Profile'
import SearchScreen from '../screens/home/Search'
import SettingsScreen from '../screens/home/Settings'

import TabBar from '../components/TabBar'
import AuthNavigator from './AuthNavigator'

const HomeStackNavigator = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
            <HomeStackNavigator.Screen name="Detail" component={DetailsScreen} />
        </HomeStackNavigator.Navigator>
    )
}

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <TabBarNavigator.Navigator tabBar={(props) => <TabBar {... props} />}>
            <TabBarNavigator.Screen name='Home' component={HomeScreen} />
            {/* <TabBarNavigator.Screen name='Detail' component={DetailsScreen} /> */}
            <TabBarNavigator.Screen name='Favourites' component={FavouritesScreen} />
            <TabBarNavigator.Screen name='Search' component={SearchScreen} />
            <TabBarNavigator.Screen name='Profile' component={ProfileScreen} />
            <TabBarNavigator.Screen name='Settings' component={SettingsScreen} />
        </TabBarNavigator.Navigator>
    )
}

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator 