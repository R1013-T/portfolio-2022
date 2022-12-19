import styles from "../styles/Top.module.scss";
import Back from "../components/back/Back";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import Menu from "../components/menu/Menu";
import Nav from "../components/nav/Nav";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const loadingRef = useRef(null);
  const topImageRef = useRef(null);
  const topUpperRef = useRef(null);
  const topSpanRef = useRef(null);
  const topFirstRef = useRef(null);
  const topLastRef = useRef(null);
  const topStuRef = useRef(null);
  const topFutRef = useRef(null);
  const menuRef = useRef(null);

  const [gsapState, setGsapState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [pageRatio, setPageRatio] = useState("");
  const [currentSection, setCurrentSection] = useState("top");

  const router = useRouter();

  useEffect(() => {
    if (gsapState) return
    console.log(gsapState)
    gsap.registerPlugin(ScrollTrigger);

    setupTopGsap();
    setupSectionGsap();
    setupGsap();

    setGsapState(true)
  }, []);

  const setupTopGsap = () => {
    const backUps = document.querySelectorAll(".backUp");
    const backDowns = document.querySelectorAll(".backDown");

    const TL = gsap.timeline();
    TL.to(
      loadingRef.current,
      {
        autoAlpha: 0,
        duration: 1,
      },
      "start+=3"
    );
    backUps.forEach((el) => {
      gsap.set(el, {
        y: "100%",
      });
    });
    backDowns.forEach((el) => {
      gsap.set(el, {
        y: "-100%",
      });
    });
    gsap.set(topImageRef.current, {
      opacity: 0,
    });
    gsap.set(topUpperRef.current, {
      y: "100%",
    });
    gsap.set(topSpanRef.current, {
      y: "100%",
    });
    gsap.set(topFirstRef.current, {
      y: "100%",
    });
    gsap.set(topLastRef.current, {
      y: "100%",
    });
    gsap.set(topStuRef.current, {
      y: "100%",
    });
    gsap.set(topFutRef.current, {
      y: "100%",
    });
    setTimeout(function () {
      scrollTo(0, 0);
    }, 3500);
    setTimeout(function () {
      backUps.forEach((el) => {
        gsap.to(el, {
          y: 0,
          duration: 1.3,
          ease: "power4.out",
        });
      });
      backDowns.forEach((el) => {
        gsap.to(el, {
          y: 0,
          duration: 1.3,
          ease: "power4.out",
        });
      });
      gsap.to(topUpperRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.to(topFirstRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.to(topSpanRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.to(topImageRef.current, {
        opacity: 1,
        duration: 0.6,
        delay: 0.4,
      });
      setTimeout(function () {
        setupTopUnderTextGsap();
      }, 1500);
    }, 4000);
  };

  const setupTopUnderTextGsap = () => {
    const TL = gsap.timeline();
    TL.to(
      topFirstRef.current,
      {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
      },
      "start"
    )
      .to(
        topLastRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "start+=0.5"
      )
      .to(
        topFirstRef.current,
        {
          y: "100%",
          opacity: 0,
          duration: 0,
        },
        "start+=0.5"
      )
      .to(
        topLastRef.current,
        {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
        },
        "start+=2.5"
      )
      .to(
        topStuRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "start+=3"
      )
      .to(
        topLastRef.current,
        {
          y: "100%",
          opacity: 0,
          duration: 0,
        },
        "start+=3"
      )
      .to(
        topStuRef.current,
        {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
        },
        "start+=4.5"
      )
      .to(
        topFutRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "start+=5"
      )
      .to(
        topStuRef.current,
        {
          y: "100%",
          opacity: 0,
        },
        "start+=5"
      )
      .to(
        topFutRef.current,
        {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
        },
        "start+=6.2"
      )
      .to(
        topFirstRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "start+=6.5"
      )
      .to(
        topFutRef.current,
        {
          y: "100%",
          opacity: 0,
        },
        "start+=6.8"
      );

    setTimeout(function () {
      setupTopUnderTextGsap();
    }, 8500);
  };

  const setupSectionGsap = () => {
    const sections = document.querySelectorAll("main section");
    sections.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          scrub: true,
          pin: true,
          start: "center center",
          end: "bottom -10%",
          onRefresh: () => changePagesize(),
        },
      });

      gsap.to(el.querySelectorAll(".heroImage"), {
        scrollTrigger: {
          trigger: el,
          scrub: 0.2,
          start: "top bottom",
          end: "bottom -300%",
        },
        y: "-30%",
      });

      gsap.set(el.querySelector(".sectionText p"), {
        x: "-100%",
      });
      gsap.set(el.querySelector(".sectionTextSpan p"), {
        x: "-100%",
      });
      gsap.set(el.querySelector(".sectionUpperBar"), {
        x: "-100%",
      });
      gsap.set(el.querySelector(".sectionUnderBar"), {
        x: "-100%",
      });

      gsap.to(el.querySelector(".sectionText p"), {
        x: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=40%",
          end: "center center+=15%",
          duration: 0.3,
          scrub: true,
        },
      });
      gsap.to(el.querySelector(".sectionTextSpan p"), {
        x: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=30%",
          end: "center center+=10%",
          duration: 0.5,
          scrub: true,
        },
      });
      gsap.to(el.querySelector(".sectionUpperBar"), {
        x: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=60%",
          end: "center center+=5%",
          duration: 0.5,
          scrub: true,
        },
      });
      gsap.to(el.querySelector(".sectionUnderBar"), {
        x: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=65%",
          end: "center center",
          duration: 0.5,
          scrub: true,
        },
      });
    });
  };

  const setupGsap = () => {
    gsap.set(menuRef.current, {
      autoAlpha: 0,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 30%",
          end: "bottom 70%",
          onEnter: () => changeSection("down", el.id),
          onLeaveBack: () => changeSection("up", el.id),
        },
      });
    });
  };

  const changeSection = (directions, section) => {
    if (directions === "down") {
      setCurrentSection(section);
    } else {
      switch (section) {
        case "about":
          setCurrentSection("top");
          break;
        case "works":
          setCurrentSection("about");
          break;
        case "contact":
          setCurrentSection("works");
          break;
      }
    }
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

    gsap.to(menuRef.current, {
      autoAlpha: 1,
      duration: 0,
    });
    menuBackBars.forEach((el) => {
      gsap.to(el, {
        x: 0,
        duration: 0.8,
      });
    });
    menuButtons.forEach((el) => {
      gsap.to(el, {
        x: 0,
        duration: 0.6,
        delay: 0.9,
        ease: "power3.in",
      });
    });
    gsap.to(menuHiddenButton, {
      opacity: 1,
      y: 0,
      delay: 0.5,
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

    setTimeout(function () {
      setupMenuGsap();
    }, 1100);
  };

  const handleChangeSection = (section) => {
    const target = document.querySelector("#" + section);
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const changePagesize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width <= height) {
      setPageRatio("height");
    } else {
      setPageRatio("width");
    }
  };

  const handleSection = (section) => {
    console.log(section);
  };

  return (
    <article className={styles.wrapper}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/wgn3fgb.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div ref={loadingRef}>
        <Loading />
      </div>
      <div ref={menuRef}>
        <Menu changeMenuState={changeMenuState} />
      </div>
      <Header changeMenuState={changeMenuState} />
      <Back />
      <Nav
        handleChangeSection={handleChangeSection}
        currentSection={currentSection}
      />
      <section id="top" className={styles.top}>
        <div className={styles.front}></div>
        <img
          className={styles.topImage}
          src="/images/topImage.svg"
          ref={topImageRef}
        />
        <div className={styles.topText}>
          <div className={`${styles.topTextWrapper}`}>
            <p ref={topUpperRef}>Hi, I'm</p>
          </div>
          <div className={`${styles.topTextWrapper} ${styles.under}`}>
            <p ref={topFirstRef}>Ryunosuke</p>
            <p ref={topLastRef}>Takahashi</p>
            <p ref={topStuRef}>Student</p>
            <p ref={topFutRef}>Future Engineer</p>
          </div>
          <span>
            <p ref={topSpanRef}>Gunma / Japan</p>
          </span>
        </div>
      </section>
      <main>
        <section id="about" className={styles.container}>
          <div className={styles.inner}>
            <div
              className={styles.front}
              onClick={() => handleSection("about")}
            ></div>

            <div
              className={`${styles.imageWrapper} ${
                pageRatio === "height" ? styles.height : styles.width
              } imageWrapper`}
            >
              <img
                className={`${styles.sectionImage} heroImage`}
                src="/images/about.jpg"
              />
            </div>

            <div className={styles.sectionTextWrapper}>
              <div className={`${styles.sectionText} sectionText`}>
                <p>About Me</p>
              </div>
              <span className={`sectionTextSpan`}>
                <p>
                  I love Programming, Design,
                  <br />
                  and Creation.
                </p>
              </span>
              <div className={styles.sectionBarWrapper}>
                <div className={styles.upperWrap}>
                  <div className={`${styles.bar} sectionUpperBar`}></div>
                </div>
                <div className={styles.underWrap}>
                  <div className={`${styles.bar} sectionUnderBar`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="works" className={styles.container}>
          <div className={styles.inner}>
            <div
              className={styles.front}
              onClick={() => handleSection("works")}
            ></div>

            <div
              className={`${styles.imageWrapper} ${
                pageRatio === "height" ? styles.height : styles.width
              } imageWrapper`}
            >
              <img
                className={`${styles.sectionImage} heroImage`}
                src="/images/works.jpg"
              />
            </div>
            <div className={styles.sectionTextWrapper}>
              <div className={`${styles.sectionText} sectionText`}>
                <p>Works</p>
              </div>
              <span className={`sectionTextSpan`}>
                <p>
                  I'm mainly learning web skills.
                  <br />I can also use design tools.
                </p>
              </span>
              <div className={styles.sectionBarWrapper}>
                <div className={styles.upperWrap}>
                  <div className={`${styles.bar} sectionUpperBar`}></div>
                </div>
                <div className={styles.underWrap}>
                  <div className={`${styles.bar} sectionUnderBar`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.container}>
          <div className={styles.inner}>
            <div
              className={styles.front}
              onClick={() => handleSection("contact")}
            ></div>

            <div
              className={`${styles.imageWrapper} ${
                pageRatio === "height" ? styles.height : styles.width
              } imageWrapper`}
            >
              <img
                className={`${styles.sectionImage} heroImage`}
                src="/images/contact.jpg"
              />
            </div>
            <div className={styles.sectionTextWrapper}>
              <div className={`${styles.sectionText} sectionText`}>
                <p>Get In Touch</p>
              </div>
              <span className={`sectionTextSpan`}>
                <p>
                  Thanks for coming !
                  <br />I would love to hear your feedback !
                </p>
              </span>
              <div className={styles.sectionBarWrapper}>
                <div className={styles.upperWrap}>
                  <div className={`${styles.bar} sectionUpperBar`}></div>
                </div>
                <div className={styles.underWrap}>
                  <div className={`${styles.bar} sectionUnderBar`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}
