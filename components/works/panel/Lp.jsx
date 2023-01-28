import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Lp.module.scss";

const Lp = () => {
  const router = useRouter();

  const handleClick = (page) => {
    window.open("https://portfolio-r1013-t.vercel.app/works", "_ blank");
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
          onClick={() => window.open(
            "https://portfolio-r1013-t.vercel.app/works/lp/001",
            "_ blank"
          )}
        />
        <img
          src="./images/works/lp/book.png"
          className={styles.image}
          onClick={() => handleClick("002")}
        />
        <img
          src="./images/works/lp/green.png"
          className={styles.image}
          onClick={() => handleClick("003")}
        />
        <img
          src="./images/works/lp/bread.png"
          className={styles.image}
          onClick={() => handleClick("004")}
        />
        <img
          src="./images/works/lp/corporate.png"
          className={styles.image}
          onClick={() => handleClick("005")}
        />
        <img
          src="./images/works/lp/fixed.png"
          className={styles.image}
          onClick={() => handleClick("006")}
        />
        <img
          src="./images/works/lp/tea.png"
          className={styles.image}
          onClick={() => handleClick("007")}
        />
        <img
          src="./images/works/lp/blue.png"
          className={styles.image}
          onClick={() => handleClick("008")}
        />
        <img
          src="./images/works/lp/train.png"
          className={styles.image}
          onClick={() => handleClick("009")}
        />
      </div>
    </div>
  );
};

export default Lp;
