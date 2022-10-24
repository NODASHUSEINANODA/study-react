import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [IsShow, setIsShow] = useState(true);
  const handleClick = useCallback(
    (e) => {
      // console.log(count);
      if (count < 10) {
        setCount((prevcount) => prevcount + 1);
      }
    },
    [count]
  );
  const handleDisplay = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  return { count, IsShow, handleClick, handleDisplay };
};