import React,{useState} from "react";

import AuthNavigator from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TabNavigator from "./tab";

const AppNavigator=()=>{
    const [user,setUser]=useState(null)
    return(
    <NavigationContainer >
        {user?<TabNavigator/>:<AuthNavigator/>}
    </NavigationContainer>
    )
}

export default AppNavigator;
const styles=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center",
       alignContent:"center",
    }
   })