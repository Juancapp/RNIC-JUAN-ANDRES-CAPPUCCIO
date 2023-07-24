import React from "react";
import { ButtonProps } from "../../types/types";
import { ButtonText, ButtonStyle } from "./styles";

export const Button = (props: ButtonProps) => {
  const { onPress, text } = props;

  return (
    <ButtonStyle onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonStyle>
  );
};
