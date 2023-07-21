import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import { useRef, useState } from "react";

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
    <View style={styles.container}>
      <Text style={styles.title}>Add new task</Text>
      <TextInput
        autoCapitalize="sentences"
        placeholder="Título"
        value={title}
        onChangeText={(value) => setTitle(value)}
        onSubmitEditing={() => {
          descriptionInputRef.current?.focus();
        }}
        style={styles.input}
      />
      <TextInput
        autoCapitalize="sentences"
        placeholder="Descripción"
        value={description}
        onChangeText={(value) => setDescription(value)}
        ref={descriptionInputRef}
        onSubmitEditing={() => {
          descriptionInputRef.current?.blur();
          Keyboard.dismiss();
        }}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.textButton}>Agregar Task</Text>
      </TouchableOpacity>
    </View>
  );
}
