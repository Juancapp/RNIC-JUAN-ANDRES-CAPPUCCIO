import {
  Text,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from "react-native";
import { styles as stylesNotConverted } from "./styles";
import { CardProps } from "../../types/types";

export default function Card(props: CardProps) {
  const { switchState, data } = props;
  const { title, description, isDone, id } = data;
  const isDarkMode = useColorScheme() === "dark";
  const styles = stylesNotConverted(isDarkMode);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => switchState && switchState(id)}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.isDoneContainer}>
            <Text>Realizada:</Text>
            <Text style={isDone ? styles.green : styles.red}>
              {isDone ? "Sí" : "No"}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
