import React from "react";
import { BlackCurtain, ButtonsContainer, Box, Title } from "./styles";
import { Button } from "../Button";

export const Modal = (props: {
  onConfirm: () => void;
  onCancel: () => void;
  text: string;
}) => {
  const { onConfirm, onCancel, text } = props;

  return (
    <>
      <BlackCurtain onPress={onCancel} />
      <Box>
        <Title>{text}</Title>
        <ButtonsContainer>
          <Button text="Cancelar" variant="delete" onPress={onCancel} />
          <Button text="Confirmar" onPress={onConfirm} />
        </ButtonsContainer>
      </Box>
    </>
  );
};
