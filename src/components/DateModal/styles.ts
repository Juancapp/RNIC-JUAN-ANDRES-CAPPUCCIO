import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
`;
