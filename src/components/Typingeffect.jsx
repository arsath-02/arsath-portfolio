// src/hooks/useTypingEffect.js
import { useEffect, useState } from "react";

const useTypingEffect = (text, typingSpeed = 100) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return displayedText;
};

export default useTypingEffect;
