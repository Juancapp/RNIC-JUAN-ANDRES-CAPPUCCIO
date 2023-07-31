import styled from "styled-components/native";
import { colors } from "../../constants/theme";

const bgColors = {
  disabled: colors.disabled,
  primary: colors.primaryButton,
  delete: colors.delete,
};

export const ButtonStyle = styled.TouchableOpacity<{
  disabled: boolean;
  variant: "primary" | "delete";
}>`
  background-color: ${(props) =>
    props.disabled ? bgColors.disabled : bgColors[props.variant]};
  border-radius: 5px;
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
