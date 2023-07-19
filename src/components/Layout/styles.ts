import { StyleSheet } from "react-native";

export const styles = (isIos: boolean = false) => {
  const stylesToReturn = StyleSheet.create({
    viewContainer: {
      padding: 20,
      backgroundColor: isIos ? "#24222b" : "#DBDFEA",
      flex: 1,
    },

    safeArea: {
      flex: 1,
    },
  });

  return stylesToReturn;
};
