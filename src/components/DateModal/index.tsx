import React, { Dispatch, SetStateAction } from "react";
import DatePicker from "react-native-date-picker";
import { Button } from "./styles";
import { Text } from "react-native";
import Calendar from "../../assets/icons/Calendar.svg";

export const DateModal = (props: {
  limitDate: Date;
  setLimitDate: Dispatch<SetStateAction<Date>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
}) => {
  const { limitDate, setLimitDate, open, setOpen, onSubmit } = props;

  return (
    <>
      <Button activeOpacity={1} text="Date" onPress={() => setOpen(true)}>
        <Text>{limitDate.toDateString()}</Text>
        <Calendar />
      </Button>
      <DatePicker
        modal
        open={open}
        date={limitDate}
        onConfirm={(date) => {
          setOpen(false);
          setLimitDate(date);
          onSubmit();
        }}
        onCancel={() => {
          setOpen(false);
        }}
        androidVariant="nativeAndroid"
        mode="date"
      />
    </>
  );
};
