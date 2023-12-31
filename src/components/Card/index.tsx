import {
  Container,
  Description,
  Title,
  ButtonsAndTitleContainer,
  Image,
  CustomFont,
} from "./styles";
import { Keys, Task } from "../../types/types";
import NotChecked from "../../assets/icons/NotChecked.svg";
import Checked from "../../assets/icons/Checked.svg";
import Edit from "../../assets/icons/Edit.svg";
import { Text, TouchableWithoutFeedback } from "react-native";
import { ContextProvider } from "../../context/contextProvider";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Images } from "../../constants/images";

export default function Card(props: {
  switchState?: (id: number) => void;
  data: Task;
  onPress: () => void;
}) {
  const { data, onPress } = props;
  const { setTasksData, setSelectedTask } = useContext(ContextProvider)!;
  const { title, description, isDone, id, img, limitDate } = data;
  const dataWithoutImg: Omit<Task, "img" | "isActive"> | null = {
    title,
    description,
    isDone,
    id,
    limitDate,
  };

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

  const setStorage = async (value: Omit<Task, "img" | "isActive">) => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(Keys.SELECTED_TASK_DATA_KEY, jsonValue);
  };

  return (
    <TouchableWithoutFeedback onPress={() => switchState?.(id)}>
      <Container>
        <ButtonsAndTitleContainer>
          <CustomFont bold={true}>
            <Title>{title}</Title>
          </CustomFont>
        </ButtonsAndTitleContainer>
        {img && <Image alt={title} source={Images[img]} />}
        <CustomFont>
          <Description>{description}</Description>
        </CustomFont>
        {limitDate && <Text>Limit date: {limitDate}</Text>}
        <ButtonsAndTitleContainer>
          <TouchableWithoutFeedback
            onPress={(e) => {
              e.stopPropagation();
              setSelectedTask(dataWithoutImg);
              setStorage(dataWithoutImg);
              onPress();
            }}
          >
            <Edit />
          </TouchableWithoutFeedback>
          {isDone ? <Checked stroke="green" /> : <NotChecked stroke="red" />}
        </ButtonsAndTitleContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
