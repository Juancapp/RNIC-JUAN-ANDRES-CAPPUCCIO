import React from "react";
import { Container } from "./styles";
import { ActivityIndicator } from "react-native";
import { colors } from "../../constants/theme";

export const Spinner = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.primaryButton} />
    </Container>
  );
};
