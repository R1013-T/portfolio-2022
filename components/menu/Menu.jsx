import styles from "./Menu.module.scss";

import { useRouter } from "next/router";

import { VscChromeClose } from "react-icons/vsc";
import { useEffect } from "react";

import { gsap } from "gsap/dist/gsap";

const Menu = (props) => {
  const router = useRouter()

  useEffect(() => {
    setupMenuGsap();
  }, []);

  const handelHiddenMenu = () => {
    props.changeMenuState(false);
  };

  const handleChangeSection = (section) => {
    const target = document.querySelector("#" + section);
    target.scrollIntoView({
      block: "center",
    });
    setTimeout(function () {
      const menuButtons = document.querySelectorAll(".menuButton p");
      const menuHiddenButton = document.querySelector(".menuHiddenButton");

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

      setTimeout(function () {
        router.push(`/${section}`);
      }, 900);
    }, 500);
  };

  const setupMenuGsap = () => {
    const menuBackBars = document.querySelectorAll(".menuBackBar");
    const menuHiddenButton = document.querySelector(".menuHiddenButton");
    menuBackBars.forEach((el) => {
      gsap.set(el, {
        x: "-100%",
      });
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

  return (
    <div className={styles.menu}>
      <div className={styles.menuBack}>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
        <div className={styles.menuBackBarWrapper}>
          <div className={`${styles.menuBackBar} menuBackBar`}></div>
        </div>
      </div>

      <VscChromeClose
        className={`${styles.menuHiddenButton} menuHiddenButton`}
        onClick={handelHiddenMenu}
      />

      <div className={styles.menuInner}>
        <div className={`${styles.buttonWrapper} menuButton`}>
          <p onClick={() => handleChangeSection("about")}>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </p>
        </div>
        <div className={`${styles.buttonWrapper} menuButton`}>
          <p onClick={() => handleChangeSection("works")}>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
            <span>S</span>
          </p>
        </div>
        <div className={`${styles.buttonWrapper} menuButton`}>
          <p onClick={() => handleChangeSection("contact")}>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
