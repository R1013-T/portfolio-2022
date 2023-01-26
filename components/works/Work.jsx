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
    switch (props.name) {
      case "hitokan":
        alert("ヒトカン");
        break;
      case "three":
        alert("THREE");
        break;
      case "lp":
        alert("LP制作");
        break;
      case "typing":
        alert("タイピング大会");
        break;
      case "mystudy":
        alert("MyStudy");
        break;
      case "comingsoon":
        alert("Coming Soon");
        break;
    }
    console.log(props.name);
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
