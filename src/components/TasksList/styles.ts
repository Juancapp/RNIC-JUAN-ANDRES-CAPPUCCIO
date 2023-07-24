import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.FlatList`
  gap: 30px;
  background-color: transparent;
  padding-bottom: 10px;
`;

export const Empty = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
`;
