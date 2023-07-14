import { StyleSheet } from "react-native";

export const styles = (isIos: boolean = false) => {
  const stylesToReturn = StyleSheet.create({
    container: {
      backgroundColor: isIos ? "#32343e" : "white",
      marginBottom: 10,
      justifyContent: "space-around",
      borderRadius: 10,
      padding: 15,
      height: 180,
    },

    title: {
      fontSize: 20,
      fontWeight: "bold",
    },

    description: {
      fontSize: 18,
    },

    red: {
      color: "red",
      fontWeight: "bold",
    },

    green: {
      color: "green",
      fontWeight: "bold",
    },

    isDoneContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
    },
  });

  return stylesToReturn;
};
