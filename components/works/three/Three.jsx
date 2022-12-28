import styles from "./Three.module.scss";
import Common from "../common";
import Link from "next/link";

const Three = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.inner}>
          <div className={styles.image01}></div>
          <div className={styles.image02}></div>
          <div className={styles.image03}></div>
          <div className={styles.image04}></div>
          <div className={styles.image05}></div>
          <div className={styles.image06}></div>
          <div className={styles.image07}></div>
          <div className={styles.image08}></div>
          <div className={styles.image09}></div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.inner}>
          <h2 className={styles.name}>THREE</h2>
          <p className={styles.use}>NEXT.js/TypeScript/ReactAR/EnchantAR/Firebase</p>
          <p className={styles.desc}>WebARを使用した体験型脱出ゲーム。</p>
        </div>
      </div>
    </div>
  );
};

export default Three;
