import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SplashScreen from '../screens/SplashScreen'

export default function AuthNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}>
            </Stack.Screen>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}