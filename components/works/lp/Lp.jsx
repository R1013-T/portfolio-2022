import styles from "./Lp.module.scss"
import Common from "../common";
import Link from "next/link";

const Lp = () => {
  return (
    <div className={styles.wrapper}>
      <Common
        title="LP制作"
        mainUse="HTML/CSS/JavaScript"
      />
      <div className={styles.container}>
        <div className={styles.inner}>
        </div>
      </div>
    </div>
  );
}

export default Lp;