import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../constans/themes/colors";
import React from "react";

const PlaceItem=({title,image,onSelect})=>{
    return(
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <Image source={{uri:image}} style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity> 
    )
}

export default PlaceItem;

const styles=StyleSheet.create({
    container:{
        borderBottomColor: Colors.primary,
        borderBottomWidth:1,
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
    },
    image:{
        width: 80,
        height: 80,
        borderRadius:20,
        backgroundColor: Colors.graylight,
    },
    info:{
        marginLeft:10,
        flex: 1,
        justifyContent:"center",
        alignItems:"flex-start"
    },
    title:{
        fontSize:16,
        color: Colors.textColorPrimary,
        marginBottom:10,
    },
    address:{
        fontSize:14,
        color: Colors.gray,
    }
})