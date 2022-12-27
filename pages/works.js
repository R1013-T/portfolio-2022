import styles from "../styles/Works.module.scss";
import Front from "../components/front/Front";
import Section from "../components/section/Section";
import Scroll from "../components/scroll/Scroll";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { VscArrowLeft } from "react-icons/vsc";

const works = () => {
  const router = useRouter()

  const scrollBarRef = useRef(null)

  const [isFront, setIsFront] = useState(false)

  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(scrollBarRef.current, {
      y: "130%",
      opacity: 0,
      scrollTrigger: {
        trigger: document.querySelector("main"),
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
      },
    });
  };

  const handleBack = () => {
    const query = {
      section: "works",
    };
    setIsFront(true);
    setTimeout(() => {
      router.push({ pathname: "/", query: query }, "/");
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>RYUNOSUKE PORTFOLIO - WORKS</title>
        <meta name="description" content="2023 Ryunosuke Takahashi Portfolio" />

        <link rel="stylesheet" href="https://use.typekit.net/wgn3fgb.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Section name={"works"} />
      {isFront ? <Front state="top" /> : ""}
      <div className={styles.backButton} onClick={handleBack}>
        <VscArrowLeft />
      </div>
      <div className={styles.scrollbar} ref={scrollBarRef}>
        <Scroll />
      </div>
      <main>

      </main>
    </div>
  );
};

export default works;
