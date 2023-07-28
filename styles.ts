import { colors } from "./src/constants/theme";
import styled from "styled-components/native";

export const ViewContainer = styled.KeyboardAvoidingView`
  background-color: ${colors.background};
  flex: 1;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;
