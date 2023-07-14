import { FlatList, Text } from "react-native";
import { TasksListProps } from "../../types/types";
import Card from "../Card";
import { styles } from "./styles";

export const TasksList = (props: TasksListProps) => {
  const { data, switchState } = props;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card switchState={switchState} data={item} />}
      style={styles.container}
      ListEmptyComponent={() => (
        <Text style={styles.empty}>The list is empty</Text>
      )}
    />
  );
};
