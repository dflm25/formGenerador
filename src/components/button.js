import React from "react";

function Button({ label, action }) {
  return (
    <>
      <button className="nextBtn" type={action}>
        {label}
      </button>
    </>
  );
}

export default Button;
