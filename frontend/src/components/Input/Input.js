import React from "react";
import "./input.css";

const Input = (props) => {
  const { type, id } = props;
  return (
    <div className="form my-3">
      <input type={type} id={id} className="form-input " autoComplete="off" placeholder=" " />
      <label htmlFor={id} className="form-label">
        {props.children}
      </label>
    </div>
  );
};

export default Input;
