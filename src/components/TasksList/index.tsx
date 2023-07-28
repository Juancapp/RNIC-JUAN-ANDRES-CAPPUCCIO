import { useContext } from "react";
import { Task } from "../../types/types";
import Card from "../Card";
import { Empty, Container } from "./styles";
import { ContextProvider } from "../../context/contextProvider";

export const TasksList = () => {
  const { tasksData } = useContext(ContextProvider)!;

  return (
    <Container
      data={tasksData}
      renderItem={({ item }) => <Card data={item as Task} />}
      ListEmptyComponent={() => <Empty>The list is empty</Empty>}
    />
  );
};
