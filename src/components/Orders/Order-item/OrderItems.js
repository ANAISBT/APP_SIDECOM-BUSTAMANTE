import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const formatDate=(time) =>{
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem =({item,onSelected})=>{

    return(
        <TouchableOpacity style={styles.container} onPress={()=>onSelected(item)}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.Containerdetails}>
                <View style={styles.details}>
                    <Text style={styles.Text}>Total: {item.Total}</Text>
                </View>
            </View>
        </TouchableOpacity>
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