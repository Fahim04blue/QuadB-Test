import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import "./Footer.css";
import banner2 from "../../images/BannerFTXNews.d0cd974b.png";

const Footer = () => {
  const [isDark, setIsDark] = useContext(ThemeContext);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <img src={banner2} style={{ width: "100%" }} alt="" />
      </div>

      <div className={`footer ${isDark ? "theme-dark" : ""}`}>
        <div className="d-flex align-items-center text-center">
          <div className="footer-text">
            Copyright © {new Date().getFullYear()}
          </div>
          <div className="footer-text">HodlInfo.com</div>
          <div className="footer-text">
            Developed By{" "}
            <span style={{ color: "rgb(61, 198, 193)" }}>QuadBTech</span>
          </div>
          <div className="footer-text" style={{ marginLeft: "auto" }}>
            Support
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
