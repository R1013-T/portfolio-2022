import styles from "./Front.module.scss";

import { useEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";

const Front = (props) => {
  const frontRef = useRef(null);

  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {
    const frontBackBars = document.querySelectorAll(".frontBackBar");
    if (props.state === "top") {
      frontBackBars.forEach((el) => {
        gsap.fromTo(
          el,
          {
            x: "-100%",
          },
          {
            x: 0,
            duration: 0.8,
          }
        );
      });
    } else if (props.state === "section") {
      frontBackBars.forEach((el) => {
        gsap.to(el, {
          x: "-100%",
          duration: 0.8,
          delay: 1.2,
        });
      });
      gsap.to(frontRef.current, {
        autoAlpha: 0,
        duration: 0,
        delay: 2,
      });
    }
  };

  return (
    <div className={styles.frontWrapper} ref={frontRef}>
      <div className={styles.frontBack}>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
        <div className={styles.frontBackBarWrapper}>
          <div className={`${styles.frontBackBar} frontBackBar`}></div>
        </div>
      </div>
    </div>
  );
};

export default Front;
