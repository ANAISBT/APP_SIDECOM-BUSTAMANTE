import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../constans/themes/colors";
import React from "react";

const Label =({children,style,label,subLabel,subLabelStyle})=>{
return(
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        {children}
        {subLabel && (<Text style={[styles.subLabel,subLabelStyle]}>{subLabel}</Text>)}
    </View>
)
}

export default Label

const styles=StyleSheet.create({
    container:{
        marginTop:20
    },
    label:{
        fontSize:20,
        color:Colors.textColorPrimary,
    },
    subLabel:{

    }
})