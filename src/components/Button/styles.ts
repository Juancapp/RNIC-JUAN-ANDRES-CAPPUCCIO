import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${colors.primaryButton};
  border-radius: 20px;
  height: 30px;
  width: 100px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: 600;
`;
