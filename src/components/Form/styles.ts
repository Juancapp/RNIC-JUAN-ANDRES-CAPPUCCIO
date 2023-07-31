import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  gap: 10px;
  display: flex;
  justify-content: center;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.TextInput`
  background-color: ${colors.white};
  border-radius: 5px;
  padding-left: 10px;
  background-color: ${colors.white};
`;
