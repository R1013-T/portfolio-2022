import { useEffect, useState } from "react";
import styles from "./Panel.module.scss";
import Lp from "./panel/Lp";
import Other from "./panel/Other";

const Panel = (props) => {
  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    console.log(props.name);
  }, []);

  const handleClose = () => {
    setIsClose(true);
    setTimeout(() => {
      props.changePanelState(false, "");
    }, 500);
  };

  return (
    <div className={`${styles.container} ${isClose ? styles.close : ""} `}>
      <div className={styles.topSpace} onClick={handleClose}></div>
      <div className={styles.leftSpace} onClick={handleClose}></div>
      <div className={styles.inner}>
        {props.name !== "lp" ? <Other /> : <Lp />}
      </div>
      <div className={styles.rightSpace} onClick={handleClose}></div>
      <div className={styles.bottomSpace} onClick={handleClose}></div>
    </div>
  );
};

export default Panel;
