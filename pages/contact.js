import styles from "../styles/Contact.module.scss";
import Section from "../components/section/Section";
import Front from "../components/front/Front";
import Loading from "../components/loading/Contact";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { gsap } from "gsap/dist/gsap";
import { VscArrowLeft } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";

const contact = () => {
  const router = useRouter();

  const moreInfoWrapRef = useRef();
  const moreButtonRef = useRef();

  const [isFront, setIsFront] = useState(false);
  const [isNg, setIsNg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messagePlaceholder, setMessagePlaceholder] = useState("Message");

  const [loadingMove, setLoadingMove] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Sending...");
  const [loadingSecond, setLoadingSecond] = useState(7);

  useEffect(() => {
    setupGsap();
  }, []);

  const setupGsap = () => {
    gsap.set(moreInfoWrapRef.current, {
      height: 0,
    });
  };

  const handleBack = () => {
    const query = {
      section: "contact",
    };
    setIsFront(true);
    setTimeout(() => {
      router.push({ pathname: "/", query: query }, "/");
    }, 1000);
  };

  const handleMoreInfoClick = () => {
    gsap.to(moreInfoWrapRef.current, {
      height: "auto",
      duration: 0.7,
    });
    gsap.to(moreButtonRef.current, {
      opacity: 0,
      duration: 0.4,
    });
    setMessagePlaceholder("Message");
  };

  const handleSend = (e) => {
    e.preventDefault();
    // console.log(
    //   "first: ",
    //   first,
    //   "\nlast: ",
    //   last,
    //   "\norganization: ",
    //   organization,
    //   "\nemail: ",
    //   email,
    //   "\nphone: ",
    //   phone,
    //   "\nmessage: ",
    //   message
    // );

    if (message) {
      setIsLoading(true);

      setTimeout(() => {
        setLoadingMessage("Compleat!");
        setTimeout(() => {
          setLoadingTimer();
        }, 1000);
      }, 1700);
    } else {
      setIsNg(true);
      setMessagePlaceholder("Please enter your message");
      setTimeout(() => {
        setIsNg(false);
      }, 900);
    }
  };

  const setLoadingTimer = () => {
    setLoadingSecond((prevCount) => prevCount - 1);
    setTimeout(() => {
      setLoadingTimer();
    }, 1100);
  };

  useEffect(() => {
    if (loadingSecond >= 1) return;
    router.push("/");
  }, [loadingSecond]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>RYUNOSUKE PORTFOLIO - CONTACT</title>
        <meta name="description" content="2023 Ryunosuke Takahashi Portfolio" />

        <link rel="stylesheet" href="https://use.typekit.net/wgn3fgb.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Section name={"contact"} />
      {isFront ? <Front state="top" /> : ""}
      {isLoading ? (
        <Loading
          loading={loadingMove}
          message={loadingMessage}
          second={loadingSecond}
        />
      ) : (
        ""
      )}
      <div className={styles.backButton} onClick={handleBack}>
        <VscArrowLeft />
      </div>
      <div className={styles.container}>
        <p className={styles.head}>Get In Touch</p>
        <p className={styles.desc}>
          Thanks for coming !
          <br />I would love to hear your feedback !
        </p>
        <form className={styles.form} onSubmit={(e) => handleSend(e)}>
          <div className={styles.moreInfoWrap} ref={moreInfoWrapRef}>
            <input
              type="text"
              className={`${styles.firstName} ${first ? styles.active : ""}`}
              placeholder="First Name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
            <input
              type="text"
              className={`${styles.lastName} ${last ? styles.active : ""}`}
              placeholder="Last Name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
            <br />
            <input
              type="text"
              className={`${styles.company} ${
                organization ? styles.active : ""
              }`}
              placeholder="Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
            <br />
            <input
              type="text"
              className={`${styles.email} ${email ? styles.active : ""}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className={`${styles.phone} ${phone ? styles.active : ""}`}
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
          </div>

          <textarea
            className={`${styles.textarea} ${message ? styles.active : ""} ${
              messagePlaceholder !== "Message" ? styles.ng : ""
            }`}
            placeholder={messagePlaceholder}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessagePlaceholder("Message");
            }}
            value={message}
          ></textarea>
          <div className={styles.buttons}>
            <div
              className={styles.moreInfo}
              onClick={handleMoreInfoClick}
              ref={moreButtonRef}
            >
              <AiOutlinePlus />
              more info
            </div>
            <button
              type="submit"
              className={`${styles.send} ${isNg ? styles.ng : ""}`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
