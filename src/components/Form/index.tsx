import { TextInput, Keyboard } from "react-native";
import { useContext, useRef, useState } from "react";
import { Button } from "../Button";
import { Container, Input, Title } from "./styles";
import { ContextProvider } from "../../context/contextProvider";
import DatePicker from "react-native-date-picker";
import { DateModal } from "../DateModal";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [limitDate, setLimitDate] = useState(new Date());
  const { setTasksData, tasksData } = useContext(ContextProvider)!;
  const [open, setOpen] = useState(false);

  const descriptionInputRef = useRef<TextInput>(null);

  const createTask = (data: {
    title: string;
    description: string;
    limitDate: Date;
  }) => {
    const newTask = {
      ...data,
      id: tasksData.length,
      isDone: false,
    };
    if (data.title !== "" && data.description !== "" && data.limitDate)
      setTasksData([...tasksData, newTask]);
  };

  const onSubmit = () => {
    const formData = {
      title: title,
      description: description,
      limitDate: limitDate!,
    };
    createTask(formData);
    Keyboard.dismiss();
    setTitle("");
    setDescription("");
    setLimitDate(new Date());
  };

  return (
    <Container>
      <Title>Agregar Task</Title>
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
      <Button toAdd={true} onPress={onSubmit} text="Confirmar" />
    </Container>
  );
}
