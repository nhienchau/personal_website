'use client'
import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
};

const TypewriterText = ({ text, speed = 100 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    setDisplayedText(text.charAt(0)); // Show first character immediately
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-6xl font-bold text-foreground">
      {displayedText}
      <span className="inline-block w-[1ch] animate-pulse">|</span>
    </h1>
  );
};

export default TypewriterText;
