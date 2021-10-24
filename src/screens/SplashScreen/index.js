import React,{useEffect} from 'react'
import { View, Text, StatusBar,Image } from 'react-native'
import { spotifyImage } from '../../assets/images'
import splashStyles from './styles'
export default function SplashScreen({navigation}) {
useEffect(()=>{
 setTimeout(()=>{
  navigation.navigate('LoginScreen')
 },300)
},[])    
    return (
        <View style={splashStyles.container}>
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <Image
            source={spotifyImage}
            />
        </View>
    )
}
