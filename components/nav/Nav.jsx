import styles from './Nav.module.scss'

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <div
        className={`${styles.navBar} ${
          props.currentSection === "top" ? styles.active : ""
        }`}
        onClick={() => props.handleChangeSection("top")}
      ></div>
      <div
        className={`${styles.navBar} ${
          props.currentSection === "about" ? styles.active : ""
        }`}
        onClick={() => props.handleChangeSection("about")}
      ></div>
      <div
        className={`${styles.navBar} ${
          props.currentSection === "works" ? styles.active : ""
        }`}
        onClick={() => props.handleChangeSection("works")}
      ></div>
      <div
        className={`${styles.navBar} ${
          props.currentSection === "contact" ? styles.active : ""
        }`}
        onClick={() => props.handleChangeSection("contact")}
      ></div>
    </div>
  );
};

export default Nav;
