import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Details, Favourites, Home, Profile, Search, Settings, Events } from '../screens';
import { COLORS, ROUTES } from '../constants';
import { Ionicons } from "@expo/vector-icons";
import HomeNavigator from './HomeNavigator';



const Tab = createBottomTabNavigator();

function BottomTabNavigator(){
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown:false,
            tabBarIcon: ({color, size, focused}) => {
                let iconName;
                if (route.name === ROUTES.HOME_TAB) {
                    iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                  } else if (route.name === ROUTES.SETTINGS) {
                    iconName = focused ? 'settings' : 'settings-outline';
                  } else if (route.name === ROUTES.EVENT) {
                    iconName = focused ? 'shapes' : 'shapes-outline';
                  } else if (route.name === ROUTES.FAVOURITES) {
                    iconName = focused
                      ? 'heart-sharp'
                      : 'heart-outline';
                  }
                  //<Ionicons name={iconName as any} size={20} color={itemColor} style={{ marginBottom: 2}}/>
                  const itemColor = focused ? COLORS.cbBlue : COLORS.subtitle;

                return <Ionicons name={iconName as any} size={22} color={itemColor} style={{ marginBottom: 2}} />;

            },
        })}>
            <Tab.Screen name={ROUTES.HOME_TAB} component={HomeNavigator} />
            <Tab.Screen name={ROUTES.FAVOURITES} component={Favourites} />
            <Tab.Screen name={ROUTES.EVENT} component={Events} />
            <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />

        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
