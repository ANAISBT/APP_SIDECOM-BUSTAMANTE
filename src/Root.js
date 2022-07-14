import { StyleSheet, View } from "react-native";

import AppNavigator from "./navigation/main";
import { Provider } from "react-redux";
import { store } from "./store/indexSlices";

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