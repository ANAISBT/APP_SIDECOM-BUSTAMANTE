import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SidecomNavigator from "./SidecomNavigator";

const AppNavigator=()=>{
    return(
    <NavigationContainer>
        <SidecomNavigator/>
    </NavigationContainer>
    )
}

export default AppNavigator;