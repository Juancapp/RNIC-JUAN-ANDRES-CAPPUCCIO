import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const BlackCurtain = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${colors.black};
  opacity: 0.3;
`;

export const Box = styled.View`
  position: absolute;
  width: 300px;
  border-radius: 10px;
  background-color: ${colors.white};
  gap: 25px;
  left: 12%;
  top: 40%;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;
