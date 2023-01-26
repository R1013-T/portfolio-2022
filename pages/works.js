import styles from "../styles/Works.module.scss";
import Front from "../components/front/Front";
import Section from "../components/section/Section";
import Scroll from "../components/scroll/Scroll";

import Work from "../components/works/Work";
import Panel from "../components/works/Panel";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { VscArrowLeft } from "react-icons/vsc";

const works = () => {
  const router = useRouter();

  const scrollBarRef = useRef(null);

  const [isFront, setIsFront] = useState(false);
  const [isPanel, setIsPanel] = useState(false);
  const [panelName, setPanelName] = useState("");

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

  const changePanelState = (state, name) => {
    setIsPanel(state);
    setPanelName(name);
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Section name={"works"} /> {isFront ? <Front state="top" /> : ""}
      <div className={styles.backButton} onClick={handleBack}>
        <VscArrowLeft />
      </div>
      <div className={styles.scrollbar} ref={scrollBarRef}>
        <Scroll />
      </div>
      {isPanel ? (
        <Panel name={panelName} changePanelState={changePanelState} />
      ) : (
        ""
      )}
      <main>
        <div className={styles.container}>
          <Work
            name={"hitokan"}
            title={"ヒトカン"}
            use={"Next.js/TypeScript"}
            state={"Done"}
            desc={"社会に出て拡大した人間関係を管理するWebアプリ。"}
            changePanelState={changePanelState}
          />
          <Work
            name={"three"}
            title={"THREE"}
            use={"Next.js/TypeScript/AR.js"}
            state={"In progress"}
            desc={"スマホで参加できるWebARを使用した脱出ゲーム。"}
            changePanelState={changePanelState}
          />
          <Work
            name={"lp"}
            title={"LP制作"}
            use={"HTML/CSS"}
            state={"Done"}
            desc={"様々な形式のLPを制作。"}
            changePanelState={changePanelState}
          />
          <Work
            name={"typing"}
            title={"Typing Contest"}
            use={"Rudy on Rails/Vue.js"}
            state={"Done"}
            desc={"2022学園際でタイピング大会を開催。"}
            changePanelState={changePanelState}
          />
          <Work
            name={"mystudy"}
            title={"My Study"}
            use={"Swift/Firebase"}
            state={"Done"}
            desc={"勉強補佐アプリ。"}
            changePanelState={changePanelState}
          />
          <Work
            name={"comingsoon"}
            title={"Coming Soon"}
            use={"Next.js/TypeScript/Flutter"}
            state={"Not started"}
            desc={"Next.js, TypeScript, Flutter を勉強していきたい。"}
            changePanelState={changePanelState}
          />
        </div>
      </main>
    </div>
  );
};

export default works;
