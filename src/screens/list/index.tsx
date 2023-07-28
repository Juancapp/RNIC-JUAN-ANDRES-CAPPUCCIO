import { TasksList } from "../../components/TasksList";
import { Button } from "../../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

type ScreenOneProps = NativeStackScreenProps<RootStackParamList, "List">;

export const List = ({ navigation }: ScreenOneProps) => {
  return (
    <>
      <TasksList />
      <Button text="Go back" onPress={navigation.navigate("EditTask")!} />
    </>
  );
};
