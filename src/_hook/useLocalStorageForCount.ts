import { useState, useEffect } from "react";

const useLocalStorageForCount = (key: string) => {
  if (key === "") {
    // Throw error for empty key (can be removed if allowed)
    throw new Error("key cannot be empty string");
  }
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Can be removed if not using loading state

  const increment = () => {
    setCount(count + 1);
    localStorage.setItem(key, String(count + 1));
  };

  const decrement = () => {
    setCount(count - 1);
    localStorage.setItem(key, String(count - 1));
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem(key, String(0));
  };

  useEffect(() => {
    const initialCurrent = Number(typeof window !== "undefined" && localStorage.getItem(key));
    if (initialCurrent) {
      setCount(initialCurrent);
    }
    setIsLoading(false); // Set loading state to false (can be removed if not used)
  }, [key]);

  return { count, isLoading, setCount, increment, decrement, reset };
};

export default useLocalStorageForCount;
