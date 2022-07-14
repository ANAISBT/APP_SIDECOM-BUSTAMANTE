import { Colors } from "../constans/themes/colors";
import React from "react";
import SugerenciasScreen from "../screens/SugerenciasScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../constans/utils/index";

const Stack = createNativeStackNavigator(); //iniciar el Stack

const SugerenciasNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Sugerencias"
        screenOptions={{
            headerStyle:{
                backgroundColor: isAndroid ? Colors.primary : Colors.secondary,
            },
            headerTintColor: isAndroid ? Colors.white : Colors.black,
            headerTitleStyle: {
              fontFamily: isAndroid ? "OpenSansItalic" : "OpenSansBold",
            },
        }}
      >
        {/* dentro del stack */}
  
        <Stack.Screen name="Sugerencias" 
        component={SugerenciasScreen} 
        options={{
          title:'SUGIERE PRODUCTO',
        }} />
        
      </Stack.Navigator>
    );
  };
  export default SugerenciasNavigator;
