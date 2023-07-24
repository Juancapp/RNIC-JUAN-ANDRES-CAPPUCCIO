import { TextInput, Keyboard } from "react-native";
import { useRef, useState } from "react";
import { Button } from "../Button";
import { Container, Input, Title } from "./styles";

export default function Form(props: {
  passData: (data: { title: string; description: string }) => void;
}) {
  const { passData } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const descriptionInputRef = useRef<TextInput>(null);

  const onSubmit = () => {
    const dataToPass = {
      title: title,
      description: description,
    };
    passData(dataToPass);
    Keyboard.dismiss();
    setTitle("");
    setDescription("");
  };

  return (
    <Container>
      <Title>Add new task</Title>
      <Input
        autoCapitalize="sentences"
        placeholder="Título"
        value={title}
        onChangeText={(value) => setTitle(value)}
        onSubmitEditing={() => {
          descriptionInputRef.current?.focus();
        }}
      />
      <Input
        autoCapitalize="sentences"
        placeholder="Descripción"
        value={description}
        onChangeText={(value) => setDescription(value)}
        ref={descriptionInputRef}
        onSubmitEditing={() => {
          descriptionInputRef.current?.blur();
          Keyboard.dismiss();
        }}
      />
      <Button onPress={onSubmit} text="agregar task" />
    </Container>
  );
}
