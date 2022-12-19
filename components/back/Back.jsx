import styles from "./Back.module.scss"

const Back = () => {
  return (
    <div className={styles.backWrapper}>
        <div className={`${styles.backBar} backUp`}></div>
        <div className={`${styles.backBar} backDown`}></div>
        <div className={`${styles.backBar} backUp`}></div>
        <div className={`${styles.backBar} backDown`}></div>
        <div className={`${styles.backBar} backUp`}></div>
        <div className={`${styles.backBar} backDown`}></div>
        <div className={`${styles.backBar} backUp`}></div>
        <div className={`${styles.backBar} backDown`}></div>
      </div>
  );
}

export default Back;