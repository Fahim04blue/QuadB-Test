import React, { useContext } from "react";
import { TableData } from "./TableData";
import "./Table.css";
import "../../App.css";
import { ThemeContext } from "../../context/ThemeContextProvider";
const Table = () => {
  const [isDark, setIsDark] = useContext(ThemeContext);
  return (
    <div className="price-table table-responsive" style={{ margin: "0 auto" }}>
      <table className="table  table-borderless text-center">
        <thead>
          <tr>
            <th>
              <h4>
                <span className="table-head">#</span>{" "}
              </h4>
            </th>
            <th>
              <h4>
                <span className="table-head">Platform</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="table-head">Last Traded Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="table-head">Buy / Sell Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="table-head">Difference</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="table-head">Savings</span>
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((td, idx) => (
            <tr className={`row-bg ${isDark ? "theme-dark" : ""}`}>
              <td
                className={`align-middle dark-txt ${
                  isDark ? "theme-dark" : ""
                } `}
              >
                <h4 className="table-txt">{idx + 1}</h4>
              </td>
              <td
                className={`align-middle dark-txt ${
                  isDark ? "theme-dark" : ""
                } `}
              >
                <h4 className="table-txt">
                  {" "}
                  <img
                    src={td.image}
                    style={{
                      height: "24px",
                      width: "24px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <span className="platform-txt"></span>
                  {td.platform}{" "}
                </h4>
              </td>
              <td
                className={`align-middle dark-txt ${
                  isDark ? "theme-dark" : ""
                } `}
              >
                <h4 className="table-txt">{td.lastTradedPrice}</h4>
              </td>
              <td
                className={`align-middle dark-txt ${
                  isDark ? "theme-dark" : ""
                } `}
              >
                <h4 className="table-txt">{td.buySellPrice}</h4>
              </td>
              <td className="align-middle">
                <h4 className="table-txt txt-color">{td.difference}</h4>
              </td>
              <td className="align-middle">
                <h4 className="table-txt txt-color">▲ ₹ {td.savings}</h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
