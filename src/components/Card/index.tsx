import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CardProps } from "../../types/types";

export default function Card(props: CardProps) {
  const { switchState, data } = props;
  const { title, description, isDone, id } = data;

  return (
    <>
      <TouchableOpacity onPress={() => switchState && switchState(id)}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
          <Text>Realizada: {isDone ? "Sí" : "No"}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
