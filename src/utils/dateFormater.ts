import { format } from "date-fns";

export const formatDate = (date: string) => {
  const dateObj = new Date(date);

  const formattedDate = format(dateObj, "dd-MM-yyyy");
  const formattedTime = format(dateObj, "HH:mm");

  const formattedDateTime = `${formattedDate}, ${formattedTime}`;
  return formattedDateTime;
};
