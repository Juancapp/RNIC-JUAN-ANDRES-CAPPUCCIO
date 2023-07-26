import { TasksListProps, Task } from "../../types/types";
import Card from "../Card";
import { Empty, Container } from "./styles";

export const TasksList = (props: TasksListProps) => {
  const { data, switchState } = props;

  return (
    <Container
      data={data}
      renderItem={({ item }: { item: Task }) => (
        <Card switchState={switchState} data={item} />
      )}
      ListEmptyComponent={() => <Empty>The list is empty</Empty>}
    />
  );
};
