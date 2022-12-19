import styles from "./Header.module.scss"

import { VscMenu } from "react-icons/vsc";
import { useRouter } from "next/router";

const Header = (props) => {

  const router = useRouter()

  const handleTop = () => {
    router.push('/')
  }

  const handleMenu = () => {
    props.changeMenuState(true)
  }

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <p onClick={handleTop}>
          Ryunosuke<span>Takahashi</span>
        </p>
      </div>
      <div className={styles.right} onClick={handleMenu}>
        <VscMenu />
      </div>
    </div>
  );
};

export default Header;
