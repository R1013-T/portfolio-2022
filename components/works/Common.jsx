import Link from "next/link";
import styles from "./Common.module.scss";

const Common = (props) => {
  return (
    <div
      className={`${styles.commonContainer}`}
    >
      <div className={styles.inner}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.desc}>{props.desc}</div>
        <div className={styles.mainUse}>{props.mainUse}</div>
        <div className={styles.use}>{props.use}</div>
      </div>
    </div>
  );
};

export default Common;
