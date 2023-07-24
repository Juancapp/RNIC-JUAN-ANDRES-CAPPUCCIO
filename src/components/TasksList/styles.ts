import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.FlatList`
  gap: 30px;
  background-color: transparent;
  padding-bottom: 10px;
`;

export const Empty = styled.View`
  align-self: center;
  font-size: 20;
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  empty: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
