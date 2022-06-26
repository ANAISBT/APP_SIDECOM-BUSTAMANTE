import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

const CartItems =({item,onDelete})=>{

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.Containerdetails}>
                <View style={styles.details}>
                    <Text style={styles.Text}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.Text}>PRECIO: {item.price}</Text>
                </View>
                <TouchableOpacity onPress={onDelete(item.id)}>
                    <Ionicons name='trash' size={20} color='#31CB00'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CartItems;
const styles= StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
    },
    headerContainer:{

    },
    header:{
        fontSize:16,
        fontFamily:"OpenSansItalic",
    },
    Containerdetails:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:"center",
    },
    details:{

    },
    Text:{
        fontSize:14,
        fontFamily:"OpenSansMedium",

    }
 })