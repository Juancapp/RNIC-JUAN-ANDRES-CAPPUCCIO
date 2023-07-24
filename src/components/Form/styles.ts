import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const Container = styled.View`
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  margin-top: 10px;
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.TextInput`
  background-color: ${colors.white};
  border-radius: 20px;
  padding-left: 10px;
  background-color: ${colors.background};
`;
