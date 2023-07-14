import { FlatList } from "react-native";
import { TasksListProps } from "../../types/types";
import Card from "../Card";

export const TasksList = (props: TasksListProps) => {
  const { data, switchState } = props;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card switchState={switchState} data={item} />}
    />
  );
};
