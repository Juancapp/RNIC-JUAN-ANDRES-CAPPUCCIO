import { Platform, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles as stylesNotConverted } from "./styles";
import { CardProps } from "../../types/types";

export default function Card(props: CardProps) {
  const { switchState, data, isIos } = props;
  const { title, description, isDone, id } = data;
  const styles = stylesNotConverted(isIos);

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