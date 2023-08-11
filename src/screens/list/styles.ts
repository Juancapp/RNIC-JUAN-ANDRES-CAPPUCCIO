import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const Container = styled.FlatList`
  background-color: ${colors.transparent};
  padding-bottom: 10px;
`;

export const Empty = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
`;
