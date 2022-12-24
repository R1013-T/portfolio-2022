import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Loading.module.scss";

import { gsap } from "gsap/dist/gsap";

const Loading = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {
    gsap.set(barRef.current, {
      x: "-100%",
    });

    gsap.fromTo(
      textRef.current,
      {
        y: 10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
    gsap.fromTo(
      imageRef.current,
      {
        y: 10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );

    gsap.to(barRef.current, {
      x: 0,
      duration: 2.9,
      ease: "power4.inOut",
    });

    gsap.to(textRef.current, {
      y: 10,
      opacity: 0,
      duration: 0.6,
      delay: 2.5,
    });
    gsap.to(imageRef.current, {
      y: 10,
      opacity: 0,
      duration: 0.6,
      delay: 2.5,
    });
  };

  return (
    <div className={styles.loadingWrapper}>
      <p className={styles.topText} ref={textRef}>
        Welcome to Ryunosuke's portfolio
      </p>
      <Image
        className={styles.image}
        ref={imageRef}
        src="/logo.svg"
        layout="fill"
        objectFit="contain"
      />
      <div className={styles.underBar} ref={barRef}></div>
    </div>
  );
};

export default Loading;
