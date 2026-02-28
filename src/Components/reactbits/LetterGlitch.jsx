/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback, useRef } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const LetterGlitch = ({
  text = "",
  className = "",
  speed = 50,
  revealDelay = 1000,
  sequential = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isRevealed, setIsRevealed] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isRevealed]);

  const startGlitch = useCallback(() => {
    if (isRevealed) return;

    let currentIndex = 0;
    const finalText = text.split("");

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return finalText
          .map((char, i) => {
            if (char === " ") return " ";
            if (sequential && i < currentIndex) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });

      if (sequential) {
        currentIndex += 0.5;
        if (currentIndex >= finalText.length) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsRevealed(true);
        }
      }
    }, speed);

    if (!sequential) {
      setTimeout(() => {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsRevealed(true);
      }, revealDelay);
    }
  }, [text, speed, revealDelay, sequential, isRevealed]);

  useEffect(() => {
    if (inView) {
      startGlitch();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, startGlitch]);

  return (
    <span ref={containerRef} className={className} style={{ fontFamily: "monospace" }}>
      {displayText}
    </span>
  );
};

export default LetterGlitch;
