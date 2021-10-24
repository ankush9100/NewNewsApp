import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

export default function TopTabBar({index,setIndex}) {
    return (
        <View style={{...styles.container,backgroundColor:"#282C35"}}>
           {index==0?
            <TouchableOpacity onPress={()=>setIndex(index==1?0:1)}
            style={styles.left}
            >
                <Text>
                <MaterialIcon name="theme-light-dark" size={20} color="#007FFF"/>
                </Text>
            </TouchableOpacity>  
            :
            <TouchableOpacity style={styles.left} onPress={()=>setIndex(index==0?1:0)}>
                <SimpleIcon name="arrow-left" size={20} color="#007FFF"/>
                <Text style={{...styles.text,color:"lightgrey"}}>Discover</Text>
            </TouchableOpacity> 
        }
        <Text style={{...styles.center,color:"white"}}>
            {index?"All News":"Discover"}
        </Text>
        {index?(
            <TouchableOpacity
            style={styles.right}
            >
                <Text>
                    <AntDesignIcon name="reload1" color="#007FFF" size={20}/>
                </Text>

            </TouchableOpacity>
        ):(
            <TouchableOpacity
            style={styles.left}
            onPress={()=>setIndex(index===0?1:0)}
            >
                <Text style={{...styles.text,color:"lightgrey"}}>All News</Text>
                <SimpleIcon name="arrow-right" size={20} color="#007FFF"/>
            </TouchableOpacity>
        )}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        alignItems:"center",
        borderBottomColor:"black",
        borderBottomWidth:0.5
    },
    left:{
        flexDirection:"row",
        alignItems:"center",
        width:80,
        justifyContent:"space-between"
    },
    text:{
        fontSize:16,
    },
    right:{
        width:80,
        alignItems:"flex-end"
    },
    center:{
        paddingBottom:6,
        borderBottomColor:"#007FFF",
        borderBottomWidth:5,
        borderRadius:10,
        fontSize:16,
        fontWeight:"700"
    }
})
