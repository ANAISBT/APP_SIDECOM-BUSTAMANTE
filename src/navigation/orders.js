import { Colors } from "../constans/themes/colors";
import OrdersScreen from "../screens/OrdersScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../constans/utils/index";

const Stack = createNativeStackNavigator(); //iniciar el Stack

const OrdersNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Orders"
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
  
        <Stack.Screen name="Orders" 
        component={OrdersScreen} 
        options={{
          title:'Lista de Ordenes',
        }} />
        
      </Stack.Navigator>
    );
  };
  export default OrdersNavigator;
