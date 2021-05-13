import React, { useContext, useEffect, useState } from "react";
import "./TopNav.css";
import logo from "../../images/HODLINFO_white.8f78fc06.png";
import { buttonData } from "./TopNavData";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../../context/ThemeContextProvider";

const minuteSeconds = 60;

const timerProps = {
  isPlaying: true,
  size: 40,
  strokeWidth: 3,
};
const renderTime = (dimension, time) => {
  return (
    <div className="timeWrapper">
      <div className="timer">{time}</div>
    </div>
  );
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;

const TopNav = () => {
  const startTime = Date.now() / 1000;
  const endTime = startTime + 243248;
  const remainingTime = endTime - startTime;
  const [isDark, setIsDark] = useContext(ThemeContext);
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor === "theme-dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      setIsDark(true);
    }
  };
  return (
    <header className="navContainer">
      <div className="align-items-center justify-content-center row">
        <div className="col-12 col-sm-7 col-md-5 col-lg-4">
          <img className="brandLogo" src={logo} alt="" />
          <p className="fontStyle ">
            Powered By{" "}
            <span style={{ color: "rgb(61,198,193)" }}>Finstreet</span>
          </p>
        </div>
        <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
          <div className="headerButton">
            <div className="btn-group">
              <button
                type="button"
                class="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                INR
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    INR
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-group">
              <button
                type="button"
                class="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                BTC
              </button>
              <ul class="dropdown-menu">
                {buttonData.map((btn) => (
                  <li>
                    <a class="dropdown-item" href="#">
                      {btn}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-group">
              <button type="button" class="btn btn-light">
                BUY BTC
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="rightHeader col-12 col-sm-12 col-md-5 col-lg-4">
          <div className=" d-inline-flex flex-wrap align-items-center justify-content-center">
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#6ccacb"]]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > 0,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("seconds", getTimeSeconds(elapsedTime))
              }
            </CountdownCircleTimer>
            <div className="telegramBtn">
              <button className="btn">
                {" "}
                <FontAwesomeIcon
                  icon={faTelegram}
                  size="lg"
                  color="white"
                />{" "}
                Connect Telegram
              </button>
            </div>
            <div className="theme-switcher-wrap">
              <label
                className={`theme-switcher-label ${isDark ? "active" : ""}`}
                onClick={handleLabelClick}
              >
                <div className="switch-path">
                  <div className="switch-handle"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
