import React from "react";
import "./button.css";

const CustomizeButton = (props) => {
  const { className, type, onClick } = props;

  return (
    <button type={type} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default CustomizeButton;
