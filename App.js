import {ActivityIndicator} from 'react-native';
import React from 'react';
import Root from "./src/Root";
import { useFonts } from 'expo-font';

export default function App() {

  let [loaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansItalic: require("./assets/fonts/OpenSans-Italic.ttf"),
    OpenSansLight:require("./assets/fonts/OpenSans-Light.ttf"),
    OpenSansLightItalic:require("./assets/fonts/OpenSans-LightItalic.ttf"),
    OpenSansMedium:require("./assets/fonts/OpenSans-Medium.ttf"),
  });
  if (!loaded) return <ActivityIndicator />;

  return (
    <Root/>
  );
}