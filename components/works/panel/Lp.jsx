import Image from "next/image";
import styles from "./Lp.module.scss";

const Lp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <p className={styles.title}>LP制作</p>
        <p className={styles.desc}>様々な形式のLPを制作。</p>
      </div>
      <div className={styles.imageWrap}>
        <img src="./images/works/lp/aqua.png" className={styles.image} />
        <img src="./images/works/lp/book.png" className={styles.image} />
        <img src="./images/works/lp/green.png" className={styles.image} />
        <img src="./images/works/lp/bread.png" className={styles.image} />
        <img src="./images/works/lp/corporate.png" className={styles.image} />
        <img src="./images/works/lp/fixed.png" className={styles.image} />
        <img src="./images/works/lp/tea.png" className={styles.image} />
        <img src="./images/works/lp/blue.png" className={styles.image} />
        <img src="./images/works/lp/train.png" className={styles.image} />
      </div>
    </div>
  );
};

export default Lp;
