import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${colors.primaryButton};
  border-radius: 20px;
  gap: 3px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 8px 20px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: 600;
`;
