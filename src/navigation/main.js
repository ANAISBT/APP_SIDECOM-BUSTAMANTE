import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import TabNavigator from "./tab";

const AppNavigator=()=>{
    return(
    <NavigationContainer >
        <TabNavigator/>
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