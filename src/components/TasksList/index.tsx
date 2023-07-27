import { Task, TaskListProps } from "../../types/types";
import Card from "../Card";
import { Empty, Container } from "./styles";

export const TasksList = (props: TaskListProps) => {
  const { data } = props;

  return (
    <Container
      data={data}
      renderItem={({ item }) => <Card data={item as Task} />}
      ListEmptyComponent={() => <Empty>The list is empty</Empty>}
    />
  );
};
