import React from "react";
import { ButtonProps } from "../../types/types";
import { ButtonText, ButtonStyle } from "./styles";
import Add from "../../assets/icons/Add.svg";

export const Button = (props: ButtonProps) => {
  const { onPress, text, toAdd = false, disabled = false } = props;

  return (
    <ButtonStyle
      onPress={() => {
        if (!disabled && onPress) {
          onPress();
        } else null;
      }}
      disabled={!!disabled}
    >
      <ButtonText>{text}</ButtonText>
      {toAdd && <Add />}
    </ButtonStyle>
  );
};
