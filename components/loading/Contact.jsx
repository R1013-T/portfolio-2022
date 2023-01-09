import styles from "./Contact.module.scss";

const Contact = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={props.loading ? styles.loading : ""}
          src="./logo-white.svg"
          alt=""
        />
        <p>{props.message}</p>
        {props.message !== "Sending..." ? (
          <div className={styles.thxWrap}>
            <div className={styles.thxIn}>Thank you for your message !</div>
          </div>
        ) : (
          ""
        )}
        {props.message !== "Sending..." ? (
          <div className={styles.backWrap}>
            <div className={styles.backIn}>
              Return to top page after
              <div className={styles.second}>
                <div>{props.second}</div>
              </div>
              second
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Contact;
