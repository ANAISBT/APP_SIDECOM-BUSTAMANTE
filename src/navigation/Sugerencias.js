import { Colors } from "../constans/themes/colors";
import IonicIcons from '@expo/vector-icons/Ionicons';
import MapScreen from "../screens/MapScreen";
import NewSuggestScreen from "../screens/NewSugguestScreen";
import React from "react";
import SugerenciasScreen from "../screens/SugerenciasScreen";
import SuggestDetailsScreen from "../screens/SuggestDetailScreen";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../constans/utils/index";

const Stack = createNativeStackNavigator(); //iniciar el Stack

const SugerenciasNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Sugerencias"
        screenOptions={{
            headerStyle:{
                backgroundColor: isAndroid ? Colors.green : Colors.blue,
            },
            headerTintColor: isAndroid ? Colors.black : Colors.white,
            headerTitleStyle: {
              fontFamily: isAndroid ? "OpenSansItalic" : "OpenSansBold",
            },
        }}
      >
        {/* dentro del stack */}
  
        <Stack.Screen name="Sugerencias" 
        component={SugerenciasScreen} 
        options={({navigation})=>({
          title:'Sugiere un Producto',
          headerRight: ()=>(
            <TouchableOpacity onPress={()=> navigation.navigate("NewSuggest")}>
                <IonicIcons name="add-circle-outline" 
                color={Colors.white}
                size={40}
                style={{marginRight:20}}/>
            </TouchableOpacity>
        )
        })} />
        <Stack.Screen name="Map" 
        component={MapScreen} 
        options={{
          title:'Mapa',
        }} />
        <Stack.Screen name="SuggestDetails" 
        component={SuggestDetailsScreen} 
        options={{
          title:'Detalle de la Sugerencia',
        }} />
        <Stack.Screen name="NewSuggest" 
        component={NewSuggestScreen} 
        options={{
          title:'Nueva Sugerencia',
        }} />
        
      </Stack.Navigator>
    );
  };
  export default SugerenciasNavigator;
