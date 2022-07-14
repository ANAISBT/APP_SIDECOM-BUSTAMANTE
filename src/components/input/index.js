import { Text, TextInput, View } from "react-native";

import Label from "./label";
import React from "react";
import { styles } from "./styles";

const Input=({editable,
     children,
     value,
     onChangeText,
     onFocus,
     onBlur,
     maxLenght,
     placeholder,
     placeholderTextColor,
     keyboardType,
     hasError,
     error,
     touched,
     ...props})=>{
    return(
        <View style={styles.container}>
            <Label {...props}>
                <TextInput 
                {...props}
                style={styles.input}
                editable={!editable}
                onFocus={onFocus}
                onChangeText={onChangeText}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                maxLength={maxLenght}
                keyboardType={keyboardType}
                value={value}
                />
            </Label>
            {hasError && touched && (
                <View style={styles.message}> 
                <Text style={styles.helperText}>{error}</Text>
                </View>
            )}
        </View>
    );
};

export default Input;