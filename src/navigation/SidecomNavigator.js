import CategoriesScreen from "../screens/CategoriesScreen"
import { Colors } from "../constans/themes/colors";
import ProductsDetails from "../screens/ProductsDetailsScreen";
import ProductsScreen from "../screens/ProductsScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../constans/utils/index";

const Stack = createNativeStackNavigator(); //iniciar el Stack

const SidecomNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="CategoriasScreen"
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
  
        <Stack.Screen name="CategoriasScreen" component={CategoriesScreen} options={{
          title:'SIDECOM',
        }} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} 
        options={({route})=>({
          title:route.params.name,
        })}/>
        <Stack.Screen name="ProductsDetailsScreen" component={ProductsDetails} options={{
          title:'DETALLES',
        }}/>
        
      </Stack.Navigator>
    );
  };
  export default SidecomNavigator;
