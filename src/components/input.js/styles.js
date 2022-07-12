import { Colors } from "../../constans/themes/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "OpenSansMedium",
  },
  message: {
    paddingVertical: 5,
  },
  helperText: {
    fontFamily: "OpenSansMedium",
    fontSize: 14,
    color: Colors.secondary,
  },
});