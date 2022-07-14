import { Button, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const AuthScreen=()=>{

const title="REGISTRO";
const message="¿Ya tienes una cuenta?";
const messageAction="Iniciar Sesión";
const messageTarget="login";

    return (
      <KeyboardAvoidingView style={styles.containerKey} behavior="height">
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>Inputs</Text>
        </View>
        <View style={styles.propmt}>
            <Text style={styles.propmtMessage}>{message}</Text>
            <TouchableOpacity onPress={()=>console.log(messageTarget)}>
                <Text style={styles.propmtButton}>{messageAction}</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
}

export default AuthScreen;

const styles=StyleSheet.create({
    containerKey:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    container:{
        width: 320,
        maxWidth:400,
        padding: 12,
        margin: 12,
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"white",
    },
    title:{
        fontSize:18,
        fontFamily:"OpenSansMedium",
        marginBottom:12,
        textAlign:"center",
    },
    propmt:{
        alignItems:"center",
    },
    propmtMessage:{
        width: 320,
        fontSize:24,
        fontFamily:"OpenSansMedium",
        color:"blue",
        // paddingVertical: 10,
        // paddingHorizontal:30,
        textAlign:"center"
    },
    propmtButton:{
        fontSize:20,
        fontFamily:"OpenSansMedium",
        color:"black",
        textAlign:"center"
    },
    button:{
        backgroundColor:"green",
        marginVertical:20,
    }
})