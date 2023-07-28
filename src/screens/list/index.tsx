import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Task } from "../../types/types";
import { Container, Empty } from "./styles";
import Card from "../../components/Card";
import { useContext } from "react";
import { ContextProvider } from "../../context/contextProvider";

type ScreenOneProps = NativeStackScreenProps<RootStackParamList, "List">;

export const List = ({ navigation }: ScreenOneProps) => {
  const { tasksData } = useContext(ContextProvider)!;

  const onPress = () => {
    navigation.navigate("EditTask");
  };

  return (
    <Container
      data={tasksData}
      renderItem={({ item }) => <Card data={item as Task} onPress={onPress} />}
      ListEmptyComponent={() => <Empty>The list is empty</Empty>}
    />
  );
};
