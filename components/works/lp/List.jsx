import styles from "./List.module.scss";

import Aqua from "./list/Aqua";
import Bakery from "./list/Bakery";
import Green from "./list/Green";
import Corporate from "./list/Corporate";
import Fixed from "./list/Fixed";
import Blue from "./list/Blue";
import Book from "./list/Book";
import Tea from "./list/Tea";
import Train from "./list/Train";

import { VscClose } from "react-icons/vsc";
import { useState } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import { useRouter } from "next/router";

const List = (props) => {
  const router = useRouter()

  const [backState, setBackState] = useState(false);

  const [aquaState, setAquaState] = useState(false);
  const [breadState, setBreadState] = useState(false);
  const [greenState, setGreenState] = useState(false);
  const [corporateState, setCorporateState] = useState(false);
  const [fixedState, setFixedState] = useState(false);
  const [blueState, setBlueState] = useState(false);
  const [bookState, setBookState] = useState(false);
  const [teaState, setTeaState] = useState(false);
  const [trainState, setTrainState] = useState(false);

  const handleClose = () => {
    props.changeIsLpList(false);
  };

  const handleBack = () => {
    setBackState(false);
    setAquaState(false);
    setBreadState(false);
    setGreenState(false);
    setCorporateState(false);
    setFixedState(false);
    setBlueState(false);
    setBookState(false);
    setTeaState(false);
    setTrainState(false);
  };

  const handleClick = (page) => {
    const query = {
      page: page,
    };
    router.push({ pathname: "works/lp", query: query }, "works/lp");
    // setBackState(true);
    // switch (page) {
    //   case "aqua":
    //     setAquaState(true);
    //     break;
    //   case "bread":
    //     setBreadState(true);
    //     break;
    //   case "green":
    //     setGreenState(true);
    //     break;
    //   case "corporate":
    //     setCorporateState(true);
    //     break;
    //   case "fixed":
    //     setFixedState(true);
    //     break;
    //   case "blue":
    //     setBlueState(true);
    //     break;
    //   case "book":
    //     setBookState(true);
    //     break;
    //   case "tea":
    //     setTeaState(true);
    //     break;
    //   case "train":
    //     setTrainState(true);
    //     break;
    // }
  };

  return (
    <div className={styles.article}>
      <div className={styles.closeButton}>
        <button>
          <VscClose onClick={handleClose} />
        </button>
      </div>
      {backState ? (
        <div className={styles.backButton} onClick={handleBack}>
          <VscArrowLeft />
        </div>
      ) : (
        ""
      )}
      {aquaState ? <Aqua /> : ""}
      {breadState ? <Bakery /> : ""}
      {greenState ? <Green /> : ""}
      {corporateState ? <Corporate /> : ""}
      {fixedState ? <Fixed /> : ""}
      {blueState ? <Blue /> : ""}
      {bookState ? <Book /> : ""}
      {teaState ? <Tea /> : ""}
      {trainState ? <Train /> : ""}
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.row}>
            <div className={styles.box} onClick={() => handleClick("aqua")}>
              <img src="./images/works/lp/aqua.png" alt="" />
            </div>
            <div className={styles.box} onClick={() => handleClick("bread")}>
              <img src="./images/works/lp/bread.png" alt="" />
            </div>
            <div className={styles.box} onClick={() => handleClick("green")}>
              <img src="./images/works/lp/green.png" alt="" />
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={styles.box}
              onClick={() => handleClick("corporate")}
            >
              <img src="./images/works/lp/corporate.png" alt="" />
            </div>
            <div className={styles.box} onClick={() => handleClick("fixed")}>
              <img src="./images/works/lp/fixed.png" alt="" />
            </div>
            <div className={styles.box} onClick={() => handleClick("blue")}>
              <img src="./images/works/lp/blue.png" alt="" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.box} onClick={() => handleClick("book")}>
              <img src="./images/works/lp/book.png" alt="" />
            </div>
            <div className={styles.box} onClick={() => handleClick("tea")}>
              <img src="./images/works/lp/tea.png" alt="" />
            </div>
            <div className={styles.box} onClick={() => handleClick("train")}>
              <img src="./images/works/lp/train.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
