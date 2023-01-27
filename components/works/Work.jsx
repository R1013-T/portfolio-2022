import styles from "./Work.module.scss";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Work = (props) => {
  const router = useRouter();

  const workRef = useRef(null);

  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      workRef.current,
      { opacity: 0.1 },
      {
        opacity: 1,
      }
    );
  };

  const handleClick = () => {
    if ((props.name === "comingsoon")) return;
    props.changePanelState(true, props.name);
  };

  return (
    <div className={styles.work} onClick={handleClick} ref={workRef}>
      <div className={styles.inner}>
        <img src={`./images/works/${props.name}-panel.jpg`} alt="" />
        <div className={styles.texts}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.use}>{props.use}</p>
          <p className={styles.state}>
            <span
              className={`${props.state === "Done" ? styles.done : ""} ${
                props.state === "In progress" ? styles.inprogress : ""
              }`}
            ></span>
            {props.state}
          </p>
          <p className={styles.desc}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
