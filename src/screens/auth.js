import {
  Button,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useReducer, useState } from "react";
import { UPDATED_FORM, onFocusOut, onInputChange } from "../utils/forms";
import { signin, signup } from "../store/action/authAction";

import { Colors } from "../constans/themes/colors";
import { Input } from "../components/Main";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

const initialState = {
  email: { value: "", touched: false, hasError: true, error: "" },
  password: { value: "", touched: false, hasError: true, error: "" },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
      };
    default:
      return state;
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageAction = isLogin ? "Sign up" : "Sign in";
  const messageTarget = isLogin ? "register" : "login";
  const buttonText = isLogin ? "Sign in" : "Sign up";

  const onChangeText = (text, type) => {
    onInputChange(type, text, dispatchFormState, formState);
  };

  const onBlurInput = (text, type) => {
    console.log(text);
    onFocusOut(type, text, dispatchFormState, formState);
  };

  const handlerSubmit = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };

  const onChangeAuth = () => {
    setPassword("");
    setEmail("");
    setIsLogin(!isLogin);
  };

  console.log({ formState });

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          style={styles.input}
          label="Email"
          placeholder="Email address"
          placeholderTextColor={Colors.gray}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={formState.email.value}
          onChangeText={(text) => onChangeText(text, "email")}
          onBlur={(text) => onBlurInput(text.nativeEvent.text, "email")}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
        />
        <Input
          style={styles.input}
          label="Password"
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={formState.password.value}
          onChangeText={(text) => onChangeText(text, "password")}
          onBlur={(text) => onBlurInput(text.nativeEvent.text, "password")}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
        />
        <View style={styles.button}>
          <Button
            color={Colors.primary}
            title={buttonText}
            onPress={() => handlerSubmit()}
          />
        </View>
        <View style={styles.prompt}>
          <Text style={styles.propmtMessage}>{message}</Text>
          <TouchableOpacity onPress={() => onChangeAuth()}>
            <Text style={styles.propmtButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;

const styles = StyleSheet.create({
    containerKeyboard: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: "80%",
      maxWidth: 400,
      padding: 12,
      margin: 12,
      borderColor: Colors.primary,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: Colors.white,
    },
    title: {
      fontSize: 16,
      fontFamily: "OpenSansBold",
      marginBottom: 12,
      textAlign: "center",
    },
    label: {
      fontSize: 14,
      fontFamily: "OpenSansBold",
      marginVertical: 10,
    },
    input: {
      height: 40,
      borderBottomColor: Colors.primary,
      borderBottomWidth: 1,
      width: "90%",
      fontFamily: "OpenSansMedium",
    },
    prompt: {
      paddingVertical: 20,
      alignItems: "center",
    },
    promptMessage: {
      fontSize: 14,
      fontFamily: "OpenSansMedium",
      color: Colors.textColorPrimary,
    },
    propmtButton: {
      fontSize: 14,
      fontFamily: "OpenSansBold",
      color: Colors.primary,
      textAlign: "center",
    },
    button: {
      marginTop: 20,
    },
  });
  