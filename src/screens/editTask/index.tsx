import React from "react";
import Form from "../../components/Form";
import { Container } from "./styles";

export const EditTask = () => {
  return (
    <Container>
      <Form isToEdit={true} />
    </Container>
  );
};
