import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  margin-bottom: 10px;
  justify-content: space-around;
  border-radius: 10px;
  padding: 15px;
  height: 180px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const Description = styled.Text`
  font-size: 18px;
`;

export const IsDoneContainer = styled.View`
  flex-direction: "row";
  align-items: "center";
  gap: 3;
`;
