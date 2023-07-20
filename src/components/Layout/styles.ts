import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewContainer: {
    padding: 20,
    backgroundColor: Platform.OS === "ios" ? "#24222b" : "#DBDFEA",
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },
});
