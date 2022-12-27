import styles from "../styles/Works.module.scss";
import Front from "../components/front/Front";
import Section from "../components/section/Section";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap/dist/gsap";
import { VscArrowLeft } from "react-icons/vsc";

const works = () => {
  const router = useRouter()

  const [isFront, setIsFront] = useState(false)

  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {};

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
    </div>
  );
};

export default works;
