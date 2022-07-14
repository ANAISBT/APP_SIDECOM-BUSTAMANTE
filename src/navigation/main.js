import AuthNavigator from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import TabNavigator from "./tab";
import { useSelector } from "react-redux";

const AppNavigator=()=>{
    const userId=useSelector((state)=>state.auth.userId);
    return(
    <NavigationContainer >
        {userId?<TabNavigator/>:<AuthNavigator/>}
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