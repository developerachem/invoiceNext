import { useState } from "react";

const useInput = (fields) => {
  const [input, setInput] = useState(fields);

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { input, handleInputChange };
};

export default useInput;
