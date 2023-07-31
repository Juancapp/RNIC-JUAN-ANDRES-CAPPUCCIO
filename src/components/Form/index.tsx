import { TextInput, Keyboard, Image } from "react-native";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../Button";
import { ButtonsContainer, Container, Input, Title } from "./styles";
import { ContextProvider } from "../../context/contextProvider";
import { DateModal } from "../DateModal";
import { useNavigation } from "@react-navigation/native";
import { objectsEqual } from "../../helpers";
import { FormTask } from "../../types/types";
import { Spinner } from "../Spinner";
import { Modal } from "../Modal";

export default function Form(props: { isToEdit: boolean }) {
  const { isToEdit } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [limitDate, setLimitDate] = useState(new Date());
  const [dateModalDisplay, setDateModalDisplay] = useState(false);
  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const navigation = useNavigation();
  const currentData: FormTask = {
    title: title,
    description: description,
    limitDate: limitDate.toDateString(),
  };

  const { setTasksData, tasksData, selectedTask } =
    useContext(ContextProvider)!;

  const descriptionInputRef = useRef<TextInput>(null);

  const isDirty = !isToEdit
    ? !title || !description
    : objectsEqual(currentData, {
        title: selectedTask?.title!,
        description: selectedTask?.description!,
        limitDate: selectedTask?.limitDate,
      }) ||
      !title ||
      !description;

  useEffect(() => {
    if (isToEdit && selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setLimitDate(
        selectedTask.limitDate ? new Date(selectedTask.limitDate) : new Date()
      );
    }
  }, [selectedTask]);

  useEffect(() => {
    dateModalDisplay && setModalDisplay(false);
  }, [dateModalDisplay]);

  const createTask = (data: {
    title: string;
    description: string;
    limitDate: string;
  }) => {
    const newTask = {
      ...data,
      id: tasksData.length + 1,
      isDone: false,
      isActive: true,
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
    const changedData = tasksData.map((task) => {
      if (task.id === selectedTask?.id)
        return { ...selectedTask, isActive: false };
      else return task;
    });
    setTasksData(changedData);
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
    <>
      {isToEdit && !selectedTask ? (
        <Spinner />
      ) : (
        <Container>
          <Title>{isToEdit ? "Editar Tarea" : "Agregar Tarea"}</Title>
          <Input
            autoCapitalize="sentences"
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={() => {
              descriptionInputRef.current?.focus();
            }}
            blurOnSubmit={false}
          />
          <Input
            autoCapitalize="sentences"
            placeholder="Descripción"
            value={description}
            onChangeText={setDescription}
            ref={descriptionInputRef}
            onSubmitEditing={() => {
              descriptionInputRef.current?.blur();
              setDateModalDisplay(true);
            }}
          />
          <DateModal
            limitDate={limitDate}
            setLimitDate={setLimitDate}
            open={dateModalDisplay}
            setOpen={setDateModalDisplay}
          />
          <ButtonsContainer>
            {isToEdit && (
              <Button
                onPress={() => setModalDisplay(true)}
                text="Eliminar"
                variant="delete"
              />
            )}
            <Button
              disabled={isDirty}
              toAdd={!isToEdit}
              onPress={onSubmit}
              text={isToEdit ? "Editar" : "Agregar"}
            />
          </ButtonsContainer>
        </Container>
      )}
      {modalDisplay && (
        <Modal
          text="¿Desea eliminar la tarea?"
          onCancel={() => setModalDisplay(false)}
          onConfirm={deleteData}
        />
      )}
    </>
  );
}
