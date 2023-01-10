import styles from "./Header.module.scss";

import { VscMenu, VscGithub } from "react-icons/vsc";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();

  const handleTop = () => {
    router.push("/");
  };

  const handleMenu = () => {
    props.changeMenuState(true);
  };

  return (
    <div className={styles.header}>
      <div className={styles.left} onClick={handleMenu}>
        <VscMenu />
      </div>
      <div className={styles.right}>
        <a href="https://github.com/R1013-T" target="_blank">
          <VscGithub className={styles.img} />
        </a>

        <p onClick={handleTop}>
          Ryunosuke<span>Takahashi</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
