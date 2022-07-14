import { Button, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React ,{useState} from 'react';
import { signin, signup } from '../store/action/AuthActions';

import { Colors } from '../constans/themes/colors';
import Input from '../components/input';
import { useDispatch } from 'react-redux';

const AuthScreen=()=>{

const dispatch=useDispatch();
const [email,setEmail]=useState("");
const[password,setPassword]=useState("")
const [isLogin, setIsLogin]=useState(true);
const title=isLogin? "Login":"Registrarse";
const message=isLogin ? "¿No tienes una cuenta?":"¿Ya tienes una cuenta?";
const messageAction=isLogin ? "Registrarse":"Iniciar Sesión";
const messageTarget=isLogin ? "register":"login";
const buttonText = isLogin ? "Iniciar Sesión" : "Registrarse";

const onChangeText=(text,type)=>{
    if(type=="email"){
        setEmail(text);
    }else{
        setPassword(text);
    }
}

const handlerSubmit=()=>{
    dispatch(isLogin?signin(email,password):signup(email,password));
}

const onChangeAuth=()=>{
    setPassword("");
    setEmail("");
    setIsLogin(!isLogin);
}

    return (
      <KeyboardAvoidingView style={styles.containerKey} behavior="height">
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.casillas}>
            <Input
            style={styles.input}
            label="Correo Electrónico"
            placeholder='Correo Electrónico'
            placeholderTextColor={Colors.gray}
            keyboardType="email-address"
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(text)=>onChangeText(text,"email")}
            />
            </View>
            <View style={styles.casillas}>
            <Input
            style={styles.input}
            label="Contraseña"
            placeholder='Contraseña'
            placeholderTextColor={Colors.gray}
            secureTextEntry
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(text)=>onChangeText(text,"password")}
            />
            </View>
            <View style={styles.button}>
                <Button color={Colors.primary} 
                title={buttonText}
                onPress={()=>handlerSubmit()}/>
            </View>
            <View style={styles.propmt}>
            <Text style={styles.propmtMessage}>{message}</Text>
            <TouchableOpacity onPress={()=> onChangeAuth()}>
                <Text style={styles.propmtButton}>{messageAction}</Text>
            </TouchableOpacity>
        </View>
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
        fontSize:28,
        fontFamily:"OpenSansBoldItalic",
        marginBottom:12,
        textAlign:"center",
    },
    propmt:{
        alignItems:"center",
    },
    propmtMessage:{
        width: 320,
        fontSize:24,
        // fontFamily:"OpenSansMedium",
        color:"blue",
        textAlign:"center"
    },
    propmtButton:{
        fontSize:20,
        // fontFamily:"OpenSansMedium",
        color:"black",
        textAlign:"center"
    },
    button:{
        backgroundColor:"green",
        marginVertical:20,
    },
    casillas:{
        marginVertical:15,
    },
    input:{
        borderBottomWidth:1,
        borderTopColor:Colors.gray,
        borderBottomColor:Colors.black,
        height: 40,
    }
})