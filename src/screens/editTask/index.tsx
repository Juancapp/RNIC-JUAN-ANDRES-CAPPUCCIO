import React from "react";
import Form from "../../components/Form";
import { Button } from "../../components/Button";
import { RootStackParamList } from "../../types/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ScreenOneProps = NativeStackScreenProps<RootStackParamList, "EditTask">;

export const EditTask = ({ navigation }: ScreenOneProps) => {
  return (
    <>
      <Form />
      <Button text="Go back" onPress={navigation.navigate("AddTask")!} />
    </>
  );
};
