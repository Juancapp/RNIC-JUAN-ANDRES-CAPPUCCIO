import styled from "styled-components/native";
import { colors } from "../../constants/theme";

export const Container = styled.TouchableOpacity`
  background-color: ${colors.white};
  margin-bottom: 12px;
  justify-content: space-around;
  gap: 10px;
  border-radius: 10px;
  padding: 15px;
`;

export const CustomFont = styled.Text<{ bold?: boolean }>`
  font-family: ${(props) => (props.bold ? "Lato-Bold" : "Lato-Regular")};
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

export const Image = styled.Image<{ source: string }>`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;
