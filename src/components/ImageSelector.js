import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";

import { Colors } from "../constans/themes/colors";

// const ImageSelector = ({ onImage }) => {
  const ImageSelector = props => {
    const [pickedUri, setPickedUri] = useState();
  
    const verifyPermissions = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
  
      if (status !== "granted") {
        Alert.alert(
          "Permisos insuficientes",
          "Necesitas permisos para usar la cámara",
          [{ text: "OK" }]
        );
  
        return false;
      }
      return true;
    };
  
    const handleTakeImage = async () => {
      const isCameraPermissionGranted = await verifyPermissions();
      if (!isCameraPermissionGranted) return;
  
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.8,
      });
  
      setPickedUri(image.uri);
      props.onImage(image.uri);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.preview}>
          {!pickedUri ? (
            <Text>No hay una imagen seleccionada...</Text>
          ) : (
            <Image source={{ uri: pickedUri }} style={styles.image} />
          )}
        </View>
        <Button
          title="Subir Foto"
          color={Colors.primary}
          onPress={handleTakeImage}
        />
      </View>
    );
  };
  
  export default ImageSelector;

  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    preview: {
      width: "100%",
      height: 200,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
      borderColor: Colors.primary,
      borderWidth: 1,
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });