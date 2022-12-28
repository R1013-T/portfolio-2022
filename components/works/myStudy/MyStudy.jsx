import styles from "./MyStudy.module.scss";

const MyStudy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <img src="./images/works/myStudy.png" alt="" />
          <div className={styles.front}></div>
          <div className={styles.textWrap}>
            <p className={styles.use}>ios/Swift</p>
            <p className={styles.name}>MyStudy</p>
            <p className={styles.desc}>
              高校生のとき独学でSwiftを勉強。勉強補助アプリを作成し、令和３年度全商プログラミングコンテストに応募。奨励賞を頂きました。
              <br />
              ネイティブアプリの勉強を再開したいと思っています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStudy;
