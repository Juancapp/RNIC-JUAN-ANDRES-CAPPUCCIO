import { TextInput, Keyboard } from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Container, Input, Title } from "./styles";
import { ContextProvider } from "../../context/contextProvider";
import { DateModal } from "../DateModal";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [limitDate, setLimitDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const { setTasksData, tasksData, isToEdit, selectedTask } =
    useContext(ContextProvider)!;

  const descriptionInputRef = useRef<TextInput>(null);

  const isDirty = title !== "" && description !== "";

  useEffect(() => {
    if (isToEdit && selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setLimitDate(
        selectedTask.limitDate ? new Date(selectedTask.limitDate) : new Date()
      );
    }
  }, [selectedTask]);

  const createTask = (data: {
    title: string;
    description: string;
    limitDate: string;
  }) => {
    const newTask = {
      ...data,
      id: tasksData.length,
      isDone: false,
    };
    setTasksData([...tasksData, newTask]);
  };

  const onSubmit = () => {
    const formData = {
      title: title,
      description: description,
      limitDate: limitDate.toDateString()!,
    };
    createTask(formData);
    Keyboard.dismiss();
    setTitle("");
    setDescription("");
    setLimitDate(new Date());
  };

  return (
    <Container>
      <Title>{isToEdit ? "Editar Task" : "Agregar Task"}</Title>
      <Input
        autoCapitalize="sentences"
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={() => {
          descriptionInputRef.current?.focus();
        }}
      />
      <Input
        autoCapitalize="sentences"
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        ref={descriptionInputRef}
        onSubmitEditing={() => {
          descriptionInputRef.current?.blur();
          onSubmit();
        }}
      />
      <DateModal
        limitDate={limitDate}
        setLimitDate={setLimitDate}
        open={open}
        setOpen={setOpen}
      />
      <Button
        disabled={!isDirty}
        toAdd={true}
        onPress={onSubmit}
        text="Confirmar"
      />
    </Container>
  );
}
