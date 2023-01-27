import Image from "next/image";
import styles from "./Lp.module.scss";

const Lp = () => {
  const handleClick = (page) => {
    alert(page);
  };

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <p className={styles.title}>LP制作</p>
        <p className={styles.desc}>様々な形式のLPを制作。</p>
      </div>
      <div className={styles.imageWrap}>
        <img
          src="./images/works/lp/aqua.png"
          className={styles.image}
          onClick={() => handleClick("aqua")}
        />
        <img
          src="./images/works/lp/book.png"
          className={styles.image}
          onClick={() => handleClick("book")}
        />
        <img
          src="./images/works/lp/green.png"
          className={styles.image}
          onClick={() => handleClick("green")}
        />
        <img
          src="./images/works/lp/bread.png"
          className={styles.image}
          onClick={() => handleClick("bread")}
        />
        <img
          src="./images/works/lp/corporate.png"
          className={styles.image}
          onClick={() => handleClick("corporate")}
        />
        <img
          src="./images/works/lp/fixed.png"
          className={styles.image}
          onClick={() => handleClick("fixed")}
        />
        <img
          src="./images/works/lp/tea.png"
          className={styles.image}
          onClick={() => handleClick("tea")}
        />
        <img
          src="./images/works/lp/blue.png"
          className={styles.image}
          onClick={() => handleClick("blue")}
        />
        <img
          src="./images/works/lp/train.png"
          className={styles.image}
          onClick={() => handleClick("train")}
        />
      </div>
    </div>
  );
};

export default Lp;
