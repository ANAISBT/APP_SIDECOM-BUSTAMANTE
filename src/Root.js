import { StyleSheet, View } from "react-native";

import AppNavigator from "./navigation/main";

export default function Root() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });