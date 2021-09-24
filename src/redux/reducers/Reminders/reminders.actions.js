import { SETREMINDERS } from "./reminders.types";

export const setReminders = (value) => {
  return {
    type: SETREMINDERS,
    payload: value,
  };
};
