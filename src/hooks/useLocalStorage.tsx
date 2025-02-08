import { useState } from "react";

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [storedData, setStoredData] = useState<T>(parsedValue);

  const setValue = (value: T) => {
    setStoredData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedData, setValue] as const;
};
