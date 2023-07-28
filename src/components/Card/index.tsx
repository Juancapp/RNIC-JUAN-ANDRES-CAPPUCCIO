import {
  Container,
  Description,
  Title,
  ButtonsAndTitleContainer,
  Image,
  CustomFont,
} from "./styles";
import { CardProps, Task } from "../../types/types";
import NotChecked from "../../assets/icons/NotChecked.svg";
import Checked from "../../assets/icons/Checked.svg";
import Delete from "../../assets/icons/Delete.svg";
import Edit from "../../assets/icons/Edit.svg";
import { Text, TouchableOpacity } from "react-native";
import { ContextProvider } from "../../context/contextProvider";
import { useContext } from "react";

export default function Card(props: CardProps) {
  const { data, onPress } = props;
  const { setTasksData, setSelectedTask } = useContext(ContextProvider)!;
  const { title, description, isDone, id, img, limitDate } = data;
  const dataWithoutImg = { title, description, isDone, id, limitDate };

  const switchState = (id: number) => {
    setTasksData((prevTasksData: Task[]) => {
      return prevTasksData
        .map((task) => {
          if (task.id === id) {
            return { ...task, isDone: !task.isDone };
          }
          return task;
        })
        .sort((a, b) => a.id - b.id);
    });
  };

  return (
    <Container activeOpacity={1} onPress={() => switchState && switchState(id)}>
      <ButtonsAndTitleContainer>
        <CustomFont bold={true}>
          <Title>{title}</Title>
        </CustomFont>
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <Delete />
        </TouchableOpacity>
      </ButtonsAndTitleContainer>
      {img && <Image alt={title} source={img} />}
      <CustomFont>
        <Description>{description}</Description>
      </CustomFont>
      {limitDate && <Text>Limit date: {limitDate}</Text>}
      <ButtonsAndTitleContainer>
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => {
            e.stopPropagation();
            setSelectedTask(dataWithoutImg);
            onPress();
          }}
        >
          <Edit />
        </TouchableOpacity>
        {isDone ? <Checked stroke="green" /> : <NotChecked stroke="red" />}
      </ButtonsAndTitleContainer>
    </Container>
  );
}
