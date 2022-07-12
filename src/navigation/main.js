import React,{useState} from "react";

import AuthNavigator from "./auth";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TabNavigator from "./tab";
import { useSelector } from "react-redux/es/exports";

const AppNavigator=()=>{
    const userId = useSelector((state) => state.auth.userId);
    return(
    <NavigationContainer >
        {userId ? <TabNavigator /> : <AuthNavigator />}
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