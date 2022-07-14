import AuthScreen from "../screens/AuthScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); //iniciar el Stack

const AuthNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown:false
        }}
      >
        {/* dentro del stack */}
  
        <Stack.Screen name="Login" 
        component={AuthScreen} />
        
      </Stack.Navigator>
    );
  };
  export default AuthNavigator;