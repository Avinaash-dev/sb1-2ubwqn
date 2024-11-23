import React, { useState, useEffect } from 'react';

export function TypingText() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = [
    "I build amazing web experiences",
    "I create responsive designs",
    "I develop modern applications"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const shouldDelete = isDeleting && text.length === 0;
    const shouldType = !isDeleting && text.length === currentPhrase.length;

    if (shouldDelete) {
      setIsDeleting(false);
      setPhraseIndex((current) => (current + 1) % phrases.length);
      return;
    }

    if (shouldType) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    const timeout = setTimeout(() => {
      setText(current => {
        if (isDeleting) {
          return current.slice(0, -1);
        }
        return currentPhrase.slice(0, current.length + 1);
      });
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <p className="text-2xl md:text-4xl text-gray-300 h-[40px]">
      {text}<span className="animate-pulse">|</span>
    </p>
  );
}