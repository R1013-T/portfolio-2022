import styles from "../styles/About.module.scss";
import Section from "../components/section/Section";
import Head from "next/head";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef, useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { VscArrowLeft } from "react-icons/vsc";
import { useRouter } from "next/router";

const about = () => {
  const router = useRouter();

  const chartRef = useRef(null);
  const timelineRef = useRef(null);
  const borderRef = useRef(null);

  let currentTime = 0;
  let labelCount = 0;
  let chartSize = 500;

  const [overChartLabels, setOverChartLabels] = useState([]);
  const [overChartData, setOverChartData] = useState([]);
  const [overChartDataSum, setOverChartDataSum] = useState();
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartDataSum, setChartDataSum] = useState();

  const [currentState, setCurrentState] = useState();

  useEffect(() => {
    setupGsap();
  }, []);

  ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

  useEffect(() => {
    let dataSum = 0;
    if (!chartData[0]) return;
    chartData.map((data) => {
      dataSum += data;
    });
    setChartDataSum(dataSum);
  }, [chartData]);

  useEffect(() => {
    let dataSum = 0;
    if (!overChartData[0]) return;
    overChartData.map((data) => {
      dataSum += data;
    });
    setChartDataSum(dataSum);
  }, [overChartData]);

  const data01 = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          "rgba(47, 136, 50, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(216, 73, 35, 0.2)",
          "rgba(30, 93, 167, 0.2)",
          "rgba(239, 205, 57, 0.2)",
          "rgba(93, 207, 238, 0.2)",
          "rgba(61, 175, 124, 0.2)",
          "rgba(194, 0, 1, 0.2)",
        ],
        borderColor: [
          "rgba(47, 136, 50, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(216, 73, 35, 1)",
          "rgba(30, 93, 167, 1)",
          "rgba(239, 205, 57, 1)",
          "rgba(93, 207, 238, 1)",
          "rgba(61, 175, 124, 1)",
          "rgba(194, 0, 1, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data02 = {
    labels: overChartLabels,
    datasets: [
      {
        data: overChartData,
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      datalabels: {
        align: "center",
        anchor: "center",
        color: "#e6e6e6",
        font: {
          size: 10,
        },
        formatter: (value, ctx) => {
          let label = ctx.chart.data.labels[ctx.dataIndex];
          return label + "\n" + value + "%";
        },
      },
    },
  };

  const setupGsap = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(chartRef.current, {
      position: "fixed",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top top",
        end: "top top",
        scrub: true,
      },
    });

    gsap.fromTo(
      borderRef.current,
      {
        height: 0,
        opacity: 0,
      },
      {
        height: "50vh",
        opacity: 1,
        scrollTrigger: {
          trigger: top.current,
          start: "bottom top+=60%",
          end: "bottom top+=10%",
          scrub: 0.5,
          onRefresh: () => changePageSize(),
        },
      }
    );

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      gsap.fromTo(
        box.querySelector(".left"),
        { width: 0 },
        {
          width: "calc(12.5vw * 1)",
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "bottom center",
            onEnter: () => handleEnter(),
            onLeaveBack: () => handleLeaveBack(),
          },
        }
      );
      gsap.fromTo(
        box.querySelector(".right"),
        { width: 0 },
        {
          width: "calc(12.5vw * 2)",
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "bottom center",
          },
        }
      );
      gsap.fromTo(
        box.querySelector(".text"),
        { y: "130%" },
        {
          y: 0,
          duration: 0.5,
          ease: "back.out",
          scrollTrigger: {
            trigger: box,
            start: "bottom center",
          },
        }
      );
      gsap.fromTo(
        box.querySelector(".point"),
        {
          scale: 0.5,
          opacity: 0.5,
        },
        {
          scale: 1.5,
          opacity: 1,
          duration: 0.5,
          ease: "back.out",
          scrollTrigger: {
            trigger: box,
            start: "bottom-=1px center",
          },
        }
      );
    });
  };

  const handleEnter = () => {
    currentTime++;
    setCurrentState(currentTime);
  };
  const handleLeaveBack = () => {
    currentTime--;
    setCurrentState(currentTime);
  };

  useEffect(() => {
    switch (currentState) {
      case 0:
        setOverChartLabels([]);
        setOverChartData([]);
        setChartLabels([]);
        setChartData([]);
        break;
      case 1:
        setOverChartLabels([]);
        setOverChartData([]);
        setChartLabels([]);
        setChartData([]);
        break;
      case 2:
        setOverChartLabels([]);
        setOverChartData([]);
        setChartLabels([]);
        setChartData([]);
        break;
      case 3:
        gsap.to(document.querySelector(".title"), {
          opacity: 1,
          y: 0,
          duration: 0.5,
        });
        setChartLabels(["ExcelVBA", "Swift"]);
        setChartData([45, 55]);
        setOverChartLabels(["Photoshop"]);
        setOverChartData([100]);
        break;
      case 4:
        setChartLabels(["ExcelVBA", "Swift"]);
        setChartData([50, 50]);
        setOverChartLabels(["Premiere Pro", "Photoshop"]);
        setOverChartData([25, 75]);
        break;
      case 5:
        setChartLabels(["ExcelVBA", "Swift"]);
        setChartData([30, 70]);
        setOverChartLabels(["Premiere Pro", "Photoshop"]);
        setOverChartData([15, 85]);
        break;
      case 6:
        setChartLabels(["ExcelVBA", "Swift", "HTML", "CSS", "JavaScript"]);
        setChartData([3, 7, 35, 35, 20]);
        setOverChartLabels(["Premiere Pro", "Photoshop", "Illustrator"]);
        setOverChartData([5, 50, 45]);
        break;
      case 7:
        setChartLabels([
          "ExcelVBA",
          "Swift",
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.js",
          "Rudy(Rails)",
        ]);
        setChartData([2, 3, 10, 10, 30, 10, 35]);
        setOverChartLabels(["Premiere Pro", "Photoshop", "Illustrator"]);
        setOverChartData([5, 50, 45]);
        break;
      case 8:
        setChartLabels([
          "ExcelVBA",
          "Swift",
          "HTML",
          "CSS",
          "JavaScript",
          "React(Next.js)",
          "Vue.js",
          "Rudy(Rails)",
        ]);
        setChartData([1, 1, 16, 16, 34, 26, 3, 3]);
        setOverChartLabels(["Premiere Pro", "Photoshop", "Illustrator"]);
        setOverChartData([5, 40, 55]);
        break;
    }
  }, [currentState]);

  const changePageSize = () => {
    if (typeof document !== "undefined") {
      // chartSize = window.innerWidth;
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <article className={styles.container}>
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
      <Section name={"about"} />
      <div className={styles.backButton} onClick={handleBack}>
        <VscArrowLeft />
      </div>
      <main>
        <div className={styles.chartWrap} ref={chartRef}>
          <div className={styles.chartInner}>
            <div className={`${styles.title} title`}>My Skill Set</div>
            <div>
              <Pie
                className={styles.pie}
                data={data01}
                options={options}
                width={380}
                height={380}
              />
              <Pie
                className={styles.pie}
                data={data02}
                options={options}
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className={styles.border} ref={borderRef}>
            <div className={`${styles.point} point`}></div>
          </div>
        </div>
        <div className={styles.timelineWrap} ref={timelineRef}>
          <div className={styles.inner}>
            <div className={styles.topSpace}></div>
            <div id="01" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    群馬県に生まれる
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="02" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    中学に入学。
                    <br />
                    プログラミングに出会う。
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="03" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    高校に入学。
                    <br />
                    授業でExcelVBAを学ぶ。独学でSwiftを学ぶ。
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="04" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    趣味で動画編集を始める
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="05" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    iosアプリを作成する。
                    <br />
                    全商プロコンに応募し、奨励書を頂く。
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="06" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    TECH.C.に入学。
                    <br />
                    授業でWeb系の技術を学ぶ。
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="07" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    学園祭にWebアプリケーションを出展する。
                    <br />
                    参加者アンケートでは３位！
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="08" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  <div className={`${styles.textInner} text`}>
                    独学でReact(Next.js)を学ぶ。
                  </div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="09" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  Future...
                  <div className={`${styles.textInner} text`}></div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
            <div id="10" className={`${styles.box} box`}>
              <div className={styles.boxInner}>
                <div className={`${styles.left} left`}></div>
                <div className={`${styles.right} right`}></div>
                <div className={styles.text}>
                  Future...
                  <div className={`${styles.textInner} text`}></div>
                </div>
                <div className={`${styles.point} point`}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
};

export default about;
