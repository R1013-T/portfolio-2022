import { useEffect, useState } from "react";
import styles from "./Other.module.scss";

const Other = (props) => {
  const [panelData, setPanelData] = useState({
    title: "",
    use: "",
    state: "",
    desc: "",
  });

  useEffect(() => {
    switch (props.name) {
      case "hitokan":
        setPanelData({
          title: "ヒトカン",
          use: "Next.js/TypeScript",
          state: "Done",
          desc: "社会に出て拡大した人間関係を管理するWebアプリ。\nもう知り合いのことを忘れることはありません。\n人間 関係 を\n       簡単 に\n       管理 します。\n\n不具合の修正、追加機能の作成を実施中。",
        });
        break;
      case "three":
        setPanelData({
          title: "THREE",
          use: "Next.js/TypeScript/Ar.js",
          state: "In progress",
          desc: "collaborator: Kanai Yukiha(AR)\n\nスマホで参加できるWebARを使用した脱出ゲーム。\nまだ作成中。\n完成したら、学園祭等で皆さんに参加して頂きたいと考えていますが、\nARの表示がNext.jsでうまく動作せず、苦戦中、、",
        });
        break;
      case "typing":
        setPanelData({
          title: "Typing Contest",
          use: "Rudy on Rails/Vue.js",
          state: "Done",
          desc: "2022学園際でタイピング大会を開催。\nたくさんの方に参加していただきました。\n参加者アンケートでは学校で３位に入選！\n独学でRailsとVue.jsを勉強し、期間も短かったので大変だった、、\n現在はHerokuの仕様変更等により、アクセス出来ない状態になってしまった。",
        });
        break;
      case "mystudy":
        setPanelData({
          title: "My Study",
          use: "Swift/Firebase",
          state: "Done",
          desc: "勉強補佐アプリ。高校３年生の頃 作成。\n勉強時間を計るタイマー機能や、カレンダー機能、単語帳機能 を作成。\n全商プログラミングコンテストに出展し奨励賞を頂く。",
        });
        break;
    }
  }, []);
  
  const handleClick = () => {
    switch (props.name) {
      case "hitokan":
        window.open ('hitokan-app.tokyo/', '_ blank'); 
        break;
        case "three":
        window.open ('https://three-bice.vercel.app', '_ blank'); 
        break;
      default:
        props.handleClose();
    }
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.backImageWrap}>
        <img src={`./images/works/panel/${props.name}-back.jpg`} className={styles.backImage} />
      </div>
      <div className={styles.frontImageWrap}>
        <img src={`./images/works/panel/${props.name}-front.jpg`} className={styles.frontImage} />
      </div>
      <div className={styles.texts}>
        <p className={styles.title}>{panelData.title}</p>
        <p className={styles.use}>{panelData.use}</p>
        <p className={styles.state}>
          <span
            className={`${panelData.state === "Done" ? styles.done : ""} ${
              panelData.state === "In progress" ? styles.inprogress : ""
            }`}
          ></span>
          {panelData.state}
        </p>
        <p className={styles.desc}>{panelData.desc}</p>
      </div>
    </div>
  );
};

export default Other;
