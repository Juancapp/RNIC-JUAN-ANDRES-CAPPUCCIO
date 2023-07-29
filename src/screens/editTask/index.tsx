import React from "react";
import Form from "../../components/Form";
import { RootStackParamList } from "../../types/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const EditTask = () => {
  return (
    <>
      <Form isToEdit={true} />
    </>
  );
};
