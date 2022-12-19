import styles from "../styles/Works.module.scss";
import Section from "../components/section/Section";

import Head from "next/head";
import { useEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";

const works = () => {
  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {};

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
    </div>
  );
};

export default works;
