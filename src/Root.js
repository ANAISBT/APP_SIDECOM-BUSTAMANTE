import { StyleSheet, View } from "react-native";

import AppNavigator from "./navigation/main";
import { init } from "./db";

init()
  .then(() => {
    console.log("DB initialized");
  })
  .catch((err) => {
    console.log("Error initializing DB", err);
  });


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
      alignItems: 'center',
      justifyContent: 'center',
    },
  });