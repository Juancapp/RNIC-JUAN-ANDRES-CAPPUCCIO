import React from "react";
import Form from "../../components/Form";
import { Container } from "./styles";

export const AddTask = () => {
  return (
    <Container>
      <Form isToEdit={false} />
    </Container>
  );
};
