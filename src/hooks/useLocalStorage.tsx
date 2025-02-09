import { useState, useEffect } from "react";

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedData, setStoredData] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedData));
  }, [key, storedData]);

  const setValue = (value: T) => {
    setStoredData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedData, setValue] as const;
};
