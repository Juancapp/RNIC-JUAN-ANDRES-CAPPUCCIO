import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-native-date-picker";
import { Button } from "../Button";

export const DateModal = (props: {
  limitDate: Date;
  setLimitDate: Dispatch<SetStateAction<Date>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { limitDate, setLimitDate, open, setOpen } = props;

  return (
    <>
      <Button text="Date" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={limitDate}
        onConfirm={(date) => {
          setOpen(false);
          setLimitDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
