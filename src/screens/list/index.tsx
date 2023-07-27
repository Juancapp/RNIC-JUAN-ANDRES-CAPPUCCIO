import { useContext } from "react";
import { TasksList } from "../../components/TasksList";
import { ContextProvider } from "../../context/contextProvider";
import { Button } from "../../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

type ScreenOneProps = NativeStackScreenProps<RootStackParamList, "List">;

export const List = ({ navigation }: ScreenOneProps) => {
  const { tasksData } = useContext(ContextProvider)!;

  return (
    <>
      <TasksList data={tasksData} />
      <Button text="Go back" onPress={navigation.navigate("EditTask")!} />
    </>
  );
};
