import React, { useContext } from "react";
import "./PriceToTrade.css";
import banner from "../../images/cryptonews.54869ee3.png";

const PriceToTrade = () => {
  return (
    <div className="container-fluid" style={{ padding: "0 30px" }}>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ padding: "10px 0" }}
      >
        <div className="text-center">
          <div className="header-mainText">0.59%</div>
          <div className="header-subHeading">5 Mins</div>
        </div>
        <div className="text-center">
          <div className="header-mainText">1.17%</div>
          <div className="header-subHeading">1 Hour</div>
        </div>
        <div className="header-middle">
          <div className="text-center font-32 middle">
            <div className="middle-subText">
              <span className="subText-heading">Best Price to Trade</span>
            </div>
            <div className="middle-heading">
              <p>₹ 38,95,790</p>{" "}
            </div>
            <div className="middle-subText">
              Average BTC/INR net price including commission
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="header-mainText">5.05%</div>
          <div className="header-subHeading">1 Day</div>
        </div>
        <div className="text-center">
          <div className="header-mainText">10.24%</div>
          <div className="header-subHeading">7 Days</div>
        </div>
      </div>
      <div>
        <img
          src={banner}
          style={{ width: "100%", padding: "0 0 20px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default PriceToTrade;
