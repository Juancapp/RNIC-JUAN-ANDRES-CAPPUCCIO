import { TextInput, Keyboard, Image } from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Container, Input, Title } from "./styles";
import { ContextProvider } from "../../context/contextProvider";
import { DateModal } from "../DateModal";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";

export default function Form(props: { isToEdit: boolean }) {
  const { isToEdit } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [limitDate, setLimitDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const { setTasksData, tasksData, selectedTask } =
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

  const editTask = (data: {
    title: string;
    description: string;
    limitDate: string;
  }) => {
    const updatedTask = tasksData.map((task) => {
      if (selectedTask?.id === task.id) return { ...task, ...data };
      else return task;
    });
    setTasksData(updatedTask);
  };

  const deleteData = () => {
    const filteredData = tasksData.filter(
      (task) => task.id !== selectedTask?.id
    );
    setTasksData(filteredData);
    navigation.goBack();
  };

  const onSubmit = () => {
    const formData = {
      title: title,
      description: description,
      limitDate: limitDate.toDateString()!,
    };
    isToEdit ? editTask(formData) : createTask(formData);
    Keyboard.dismiss();
    setTitle("");
    setDescription("");
    setLimitDate(new Date());
    navigation.goBack();
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
      {isToEdit && (
        <Button
          disabled={!isDirty}
          toAdd={true}
          onPress={() => deleteData()}
          text="Delete"
        />
      )}
    </Container>
  );
}
