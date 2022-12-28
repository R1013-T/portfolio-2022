import styles from './Typing.module.scss'

const Typing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <img src="./images/works/typing.png" alt="" />
          <div className={styles.front}></div>
          <div className={styles.textWrap}>
            <p className={styles.name}>TypingContest</p>
            <p className={styles.desc}>2022 TECH.C. クリエイターフェス 学園祭に出展。<br />Vue.jsとRailsを独学で学び、タイピング大会を開催しました。<br />参加者のアンケートでは学校で３位に入選！<br />現在はHerokuのサービス変更等により使用できない状態に...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typing;