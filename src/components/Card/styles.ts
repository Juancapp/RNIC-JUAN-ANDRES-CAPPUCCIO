import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const Container = styled.TouchableOpacity`
  background-color: ${colors.white};
  margin-bottom: 12px;
  justify-content: space-around;
  border-radius: 10px;
  padding: 15px;
  height: ${(props: { hasImage: boolean }) =>
    props.hasImage ? "400px" : "180px"};
`;

export const CustomFont = styled.Text`
  font-family: ${(bold: boolean) => (bold ? "Lato-Bold" : "Lato-Regular")};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: "Lato-Regular";
`;

export const ButtonsAndTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`;
