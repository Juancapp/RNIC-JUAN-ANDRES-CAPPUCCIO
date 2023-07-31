import styled from "styled-components/native";
import { colors } from "../../constants/theme";
import { bgColors } from "../../constants/data";

export const ButtonStyle = styled.TouchableOpacity<{
  disabled: boolean;
  variant: "primary" | "delete";
}>`
  background-color: ${(props) =>
    props.disabled ? bgColors.disabled : bgColors[props.variant]};
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
