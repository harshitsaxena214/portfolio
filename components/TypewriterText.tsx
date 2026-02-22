"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export const TypewriterText = ({ words, className = "" }: TypewriterTextProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let delay = isDeleting ? 50 : 100;

    // Pause when word is fully typed
    if (!isDeleting && text === currentWord) {
      delay = 2000;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="typing-cursor" />
    </span>
  );
};