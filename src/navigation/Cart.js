import Cart from "../screens/Cart";
import { Colors } from "../constans/themes/colors";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../constans/utils/index";

const Stack = createNativeStackNavigator(); //iniciar el Stack

const CartNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
            headerStyle:{
                backgroundColor: isAndroid ? Colors.green : Colors.secondary,
            },
            headerTintColor: isAndroid ? Colors.white : Colors.black,
            headerTitleStyle: {
              fontFamily: isAndroid ? "OpenSansItalic" : "OpenSansBold",
              fontWeight:'bold',
            },
        }}
      >
        {/* dentro del stack */}
  
        <Stack.Screen name="Cart" 
        component={Cart} 
        options={{
          title:'Carrito',
        }} />
        
      </Stack.Navigator>
    );
  };
  export default CartNavigator;
