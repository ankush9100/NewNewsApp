
   
import React from 'react';
import {View}  from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
// import DashboardNavigator from './DashboardNavigator';
// import VendorDashboardNavigator from './VendorDashboardNavigator'
import AuthNavigator from './AuthNavigator';
// import {useAuth} from '../contexts/Auth';
// import Loading from '../components/common/LoaderComponent';

export const Router = () => {
//   const {authData, loading} = useAuth();
//   if (loading) {
//     return <View style={{flex:1,backgroundColor:"#fff"}}><Loading /></View>;
//   }
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};