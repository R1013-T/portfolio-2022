import styles from "./Hitokan.module.scss";

const Hitokan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <img src="./images/works/hitokanIcon.png" alt="" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <p className={styles.jp}>
              <span>ヒ</span>
              <span>ト</span>
              <span>カ</span>
              <span>ン</span>
            </p>
            <p className={styles.en}>
              <span>H</span>
              <span>I</span>
              <span>T</span>
              <span>O</span>
              <span>K</span>
              <span>A</span>
              <span>N</span>
            </p>
          </div>
          <div className={styles.descWrap}>
            <p className={styles.desc}>
              複雑化した人間関係を管理します。
              <br />
              もう相手を忘れる事はありません。
            </p>
            <p className={styles.use}>NEXT.js/TypeScript//Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hitokan;
