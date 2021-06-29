import React, { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {
  const [input, setInput] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setInput(input);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return value;
}
export default useDebounce;