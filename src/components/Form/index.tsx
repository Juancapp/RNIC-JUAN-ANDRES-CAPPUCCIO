import {
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Form(props: {
  passData: (data: { title: string; description: string }) => void;
}) {
  const { passData } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    const dataToPass = {
      title: title,
      description: description,
    };
    passData(dataToPass);
  };

  return (
    <View>
      <Text>New task</Text>
      <TextInput
        autoCapitalize="sentences"
        placeholder="Título"
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <TextInput
        autoCapitalize="sentences"
        placeholder="Descripción"
        value={description}
        onChangeText={(value) => setDescription(value)}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Agregar Task
        </Text>
      </TouchableOpacity>
    </View>
  );
}
