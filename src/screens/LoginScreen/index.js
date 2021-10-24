import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopNavigation from '../../components/TopNavigation'
export default function LoginScreen() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#282C35"}}>
          <StatusBar  backgroundColor="#282C35" barStyle="light-content"/>
           <TopNavigation/>
        </SafeAreaView>
    )
}
