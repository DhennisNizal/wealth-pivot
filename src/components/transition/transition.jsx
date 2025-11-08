import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "./styles";

const Transition = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} isVisible={isVisible}>
      {children}
    </Wrapper>
  );
};

export default Transition;
