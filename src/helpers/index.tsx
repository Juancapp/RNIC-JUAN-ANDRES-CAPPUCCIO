import { FormTask } from "../types/types";

export const objectsEqual = (ob1: FormTask, obj2: FormTask) => {
  const entries1 = Object.entries(ob1).sort();
  const entries2 = Object.entries(obj2).sort();
  if (entries1.length !== entries2.length) return false;

  for (let i = 0; i < entries1.length; ++i) {
    if (entries1[i][0] !== entries2[i][0]) {
      return false;
    }
    if (entries1[i][1] !== entries2[i][1]) {
      return false;
    }
  }
  return true;
};
