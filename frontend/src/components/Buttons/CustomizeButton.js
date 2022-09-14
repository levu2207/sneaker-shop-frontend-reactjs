import React from "react";
import "./button.css";

const PrimaryButton = (props) => {
  const { className, type, onClick } = props;

  return (
    <div>
      <button type={type} className={className} onClick={onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryButton;
