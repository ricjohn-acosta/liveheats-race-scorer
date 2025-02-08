import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [storedData, setStoredData] = useState<string>(parsedValue);

  const setValue = (value: any) => {
    setStoredData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedData, setValue] as const;
};
