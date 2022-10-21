import React from "react";
import "./input.css";

const Input = (props) => {
  const { type, id, className, name, onChange, inputRef } = props;
  return (
    <div className={`form my-3 ${className}`}>
      <input
        onChange={onChange}
        name={name}
        type={type}
        id={id}
        className="form-input"
        autoComplete="off"
        placeholder=" "
        ref={inputRef}
      />
      <label htmlFor={id} className="form-label">
        {props.children}
      </label>
    </div>
  );
};

export default Input;
