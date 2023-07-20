import { Platform, StyleSheet } from "react-native";

const isIos = Platform.OS === "ios";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: isIos ? "#32343e" : "white",
    borderRadius: 10,
    marginTop: 10,
    gap: 10,
  },

  button: {
    backgroundColor: "#7a7fd3",
    borderRadius: 20,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  title: {
    fontSize: 32432432432,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: isIos ? "#24222b" : "white",
    borderRadius: 20,
    paddingLeft: 10,
  },
});
