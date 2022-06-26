import CartNavigator from "./Cart";
import  Ionicons  from "@expo/vector-icons/Ionicons";
import React from "react";
import SidecomNavigator from "./SidecomNavigator";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs= createBottomTabNavigator();

const TabNavigator=()=>{
    return(
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown:false,
            tabBarLabelStyle:{
                fontFamily:"OpenSansBold",
            },
            tabBarActiveTintColor:"red",
            tabBarStyle:styles.tabBar,
            }}>
            <BottomTabs.Screen name='ShopTab' component={SidecomNavigator} options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({focused})=>(
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={focused ? "#000000" : "#dddddd"}/>
                )
            }}/>
            <BottomTabs.Screen name='CartTab' component={CartNavigator} options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({focused})=>(
                    <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={focused ? "#000000" : "#dddddd"}/>
                ),
                }}/>
        </BottomTabs.Navigator>
            )
}
export default TabNavigator;
const styles=StyleSheet.create({
 container:{
    flex:1,
    justifyContent:"center",
    alignContent:"center",
 },
tabBar:{
    shadowColor:'#7f5df0',
    shadowOffset:{
        width: 0,height:10
   },
     shadowOpacity:0.25,
     shadowRadius:0.25,
     elevation:5,
 bottom: 25,
 left:20,
 right: 20,
 borderRadius:15,
 height: 90,
 width: 300,
}
})