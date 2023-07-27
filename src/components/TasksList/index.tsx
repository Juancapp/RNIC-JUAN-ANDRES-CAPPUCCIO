import { useContext } from "react";
import { Task, TaskListProps } from "../../types/types";
import Card from "../Card";
import { Empty, Container } from "./styles";
import { ContextProvider } from "../../context/contextProvider";

export const TasksList = (props: TaskListProps) => {
  const { data } = props;

  return (
    <Container
      data={data}
      renderItem={({ item }: { item: Task }) => <Card data={item} />}
      ListEmptyComponent={() => <Empty>The list is empty</Empty>}
    />
  );
};
