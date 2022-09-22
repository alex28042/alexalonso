import { useInView } from "framer-motion";
import React, { useRef } from "react";

const SectionAnimation = ({ children}, props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {props.orientation ? (
        <>
          <section ref={ref}>
            <div
              style={{
                transform: isInView ? "none" : "translateY(300px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {children}
            </div>
          </section>
        </>
      ) : (
        <>
          <section ref={ref}>
            <div
              style={{
                transform: isInView ? "none" : "translateX(-300px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {children}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SectionAnimation;
