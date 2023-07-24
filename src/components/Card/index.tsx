import { Text, TouchableWithoutFeedback } from "react-native";
import { Container, Description, IsDoneContainer, Title } from "./styles";
import { CardProps } from "../../types/types";

export default function Card(props: CardProps) {
  const { switchState, data } = props;
  const { title, description, isDone, id } = data;

  return (
    <TouchableWithoutFeedback onPress={() => switchState && switchState(id)}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <IsDoneContainer>
          <Text>Realizada:</Text>
          <Text>{isDone ? "Sí" : "No"}</Text>
        </IsDoneContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
