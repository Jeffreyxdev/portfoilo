/* eslint-disable react/prop-types */
import { useMemo, useRef, useEffect, useState, useCallback } from "react";

const SplitText = ({
  text = "",
  className = "",
  delay = 50,
  animationFrom = { opacity: 0, transform: "translate3d(0,30px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const words = useMemo(() => text.split(" "), [text]);
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const [inView, setInView] = useState(false);

  const setLetterRef = useCallback((el, index) => {
    letterRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (!inView) return;

    letterRefs.current.forEach((letter, index) => {
      if (!letter) return;
      
      Object.assign(letter.style, animationFrom);
      letter.style.transition = "none";
      letter.style.display = "inline-block";

      requestAnimationFrame(() => {
        setTimeout(() => {
          letter.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`;
          Object.assign(letter.style, animationTo);

          if (onLetterAnimationComplete && index === letterRefs.current.length - 1) {
            setTimeout(onLetterAnimationComplete, 600);
          }
        }, index * delay);
      });
    });
  }, [inView, delay, animationFrom, animationTo, onLetterAnimationComplete]);

  let letterIndex = 0;

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        textAlign,
        display: "inline",
        overflow: "hidden",
      }}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((letter) => {
            const currentIdx = letterIndex++;
            return (
              <span
                key={currentIdx}
                ref={(el) => setLetterRef(el, currentIdx)}
                style={{ display: "inline-block", willChange: "transform, opacity", ...animationFrom }}
              >
                {letter}
              </span>
            );
          })}
          {wIdx < words.length - 1 && (
            <span style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
