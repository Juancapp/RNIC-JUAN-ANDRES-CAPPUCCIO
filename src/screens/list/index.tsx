import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Task } from "../../types/types";
import { Container, Empty } from "./styles";
import Card from "../../components/Card";
import { useContext } from "react";
import { ContextProvider } from "../../context/contextProvider";
import { Spinner } from "../../components/Spinner";
import { ActivityIndicator } from "react-native";

type ScreenOneProps = NativeStackScreenProps<RootStackParamList, "List">;

export const List = ({ navigation }: ScreenOneProps) => {
  const { tasksData, isSetted } = useContext(ContextProvider)!;

  const onPress = () => {
    navigation.navigate("EditTask");
  };

  return !isSetted ? (
    <Spinner />
  ) : (
    <Container
      data={tasksData.filter((task: Task) => task.isActive)}
      renderItem={({ item }) => <Card data={item as Task} onPress={onPress} />}
      ListEmptyComponent={() => <Empty>The list is empty</Empty>}
    />
  );
};
