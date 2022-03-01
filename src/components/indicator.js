import React from "react";

function Indicator({ formStep, data, setState, current }) {
  return (
    <ul className="numberConten">
      {data.map((item) => (
        <li
          key={`step-${item.step}`}
          className={`${current + 1 >= item.step ? "active" : ""}`}
        >
          <span>{item.step}</span>
        </li>
      ))}
    </ul>
  );
}

export default Indicator;
