import styles from "./Section.module.scss";
import Back from "../back/Back";
import Front from "../front/Front";
import Header from "../header/Header";
import Menu from "../menu/Menu";

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap/dist/gsap";

const Section = (props) => {
  const menuRef = useRef();
  const titleWrapRef = useRef();
  const titleRef = useRef();
  const topImageRef = useRef();

  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    let spans;
    switch (props.name) {
      case "about":
        spans =
          "<span>A</span><span>B</span><span>O</span><span>U</span><span>T</span>";
        break;
      case "works":
        spans =
          "<span>W</span><span>O</span><span>R</span><span>K</span><span>S</span>";
        break;
      case "contact":
        spans =
          "<span>C</span><span>O</span><span>N</span><span>T</span><span>A</span><span>C</span><span>T</span>";
        break;
    }
    titleRef.current.innerHTML = spans;

    setupGsap();
  }, []);

  const setupGsap = () => {
    gsap.fromTo(
      titleRef.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        duration: 0.6,
      }
    );
  };

  const changeMenuState = (state) => {
    setMenuState(state);
  };

  useEffect(() => {
    if (menuState) handleMenu();
    if (!menuState) handelHiddenMenu();
  }, [menuState]);

  const setupMenuGsap = () => {
    const menuBackBars = document.querySelectorAll(".menuBackBar");
    const menuHiddenButton = document.querySelector(".menuHiddenButton");
    menuBackBars.forEach((el) => {
      gsap.set(el, {
        x: "-100%",
      });
    });
    gsap.set(menuRef.current, {
      autoAlpha: 0,
    });
    const menuButtons = document.querySelectorAll(".menuButton p");
    menuButtons.forEach((el) => {
      gsap.set(el, {
        x: "-100%",
      });
    });
    gsap.set(menuHiddenButton, {
      opacity: 0,
      y: 10,
    });
  };

  const handleMenu = () => {
    const menuBackBars = document.querySelectorAll(".menuBackBar");
    const menuButtons = document.querySelectorAll(".menuButton p");
    const menuHiddenButton = document.querySelector(".menuHiddenButton");

    gsap.to(titleRef.current, {
      autoAlpha: 0,
      y: "100%",
      duration: 0.5,
    });
    gsap.to(titleWrapRef.current, {
      autoAlpha: 0,
      duration: 0.5,
    });
    gsap.to(menuRef.current, {
      autoAlpha: 1,
      duration: 0,
    });
    menuBackBars.forEach((el) => {
      gsap.to(el, {
        x: 0,
        duration: 1.3,
      });
    });
    menuButtons.forEach((el) => {
      gsap.to(el, {
        x: 0,
        duration: 0.6,
        delay: 1.4,
        ease: "power3.in",
      });
    });
    gsap.to(menuHiddenButton, {
      opacity: 1,
      y: 0,
      delay: 2,
      duration: 1.3,
    });
  };

  const handelHiddenMenu = () => {
    const menuBackBars = document.querySelectorAll(".menuBackBar");
    const menuHiddenButton = document.querySelector(".menuHiddenButton");
    const menuButtons = document.querySelectorAll(".menuButton p");

    menuButtons.forEach((el) => {
      gsap.to(el, {
        x: "-100%",
        duration: 0.3,
        ease: "power3.out",
      });
    });
    gsap.to(menuHiddenButton, {
      opacity: 0,
      y: 10,
    });
    menuBackBars.forEach((el) => {
      gsap.to(el, {
        x: "-100%",
        duration: 0.8,
        delay: 0.3,
      });
    });
    gsap.to(titleRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      delay: 0.9,
    });
    gsap.to(titleWrapRef.current, {
      autoAlpha: 1,
      duration: 0.5,
      delay: 0.9,
    });

    setTimeout(function () {
      setupMenuGsap();
    }, 1100);
  };

  return (
    <div className={styles.wrapper}>
      <div ref={menuRef}>
        <Menu changeMenuState={changeMenuState} />
      </div>
      <Header changeMenuState={changeMenuState} />
      <Back />
      <Front state={"section"} />
      <div className={`${styles.container} main`}>
        <div className={styles.title} ref={titleWrapRef}>
          <div className={styles.titleWrapper} ref={titleRef}></div>
        </div>
        <div className={`${styles.imageWrapper}`} ref={topImageRef}>
          <img src={`/images/${props.name}.jpg`} className={`image`} />
        </div>
      </div>
    </div>
  );
};

export default Section;
