import styles from "./Scroll.module.scss"

const Scroll = () => {
  return (
    <div className={styles.container} >
      <div className={styles.obliqueBar}></div>
      <div className={styles.straightBar}></div>
      <div className={styles.text}>scrolldown</div>
    </div>
  );
} 

export default Scroll;