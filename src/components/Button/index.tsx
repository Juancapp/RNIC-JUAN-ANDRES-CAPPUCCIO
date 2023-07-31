import React from "react";
import { ButtonText, ButtonStyle } from "./styles";
import Add from "../../assets/icons/Add.svg";

export const Button = (props: {
  onPress?: () => void;
  text: string | number;
  toAdd?: boolean;
  variant?: "primary" | "delete";
  disabled?: boolean;
}) => {
  const {
    onPress,
    text,
    toAdd = false,
    disabled = false,
    variant = "primary",
  } = props;

  return (
    <ButtonStyle
      onPress={() => {
        if (!disabled && onPress) {
          onPress();
        } else null;
      }}
      disabled={!!disabled}
      variant={variant}
    >
      <ButtonText>{text}</ButtonText>
      {toAdd && <Add />}
    </ButtonStyle>
  );
};
