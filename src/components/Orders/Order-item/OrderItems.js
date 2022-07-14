import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../../../constans/themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const formatDate=(time) =>{
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem =({item,onDelete})=>{

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.Containerdetails}>
                <View style={styles.details}>
                    <Text style={styles.Text}>Total: $ {item.total}</Text>
                </View>
                <TouchableOpacity onPress={()=>onDelete(item.id)}>
                    <Ionicons name="trash" size={20} color={Colors.black}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default OrderItem;
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