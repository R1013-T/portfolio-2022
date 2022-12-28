import styles from "./Lp.module.scss"

const Lp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <img src="./images/works/lp01.png" alt="" />
          <div className={styles.front}></div>
          <div className={styles.textWrap}>
            <p className={styles.name}>LP制作</p>
            <p className={styles.use}>HTML/CSS/JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lp;