import styles from "../styles/Contact.module.scss";
import Section from "../components/section/Section";

import Head from "next/head";
import { useEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";

const contact = () => {
  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {};

  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/wgn3fgb.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Section name={"contact"} />
    </div>
  );
};

export default contact;
