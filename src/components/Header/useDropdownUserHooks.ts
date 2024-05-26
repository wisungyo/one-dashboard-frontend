import { useState } from "react";

export const useDropdownUserHooks = () => {
  const [username, setUsername] = useState("");

  return { username, setUsername };
};
