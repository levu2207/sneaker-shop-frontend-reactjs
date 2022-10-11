import React from "react";

const InputFormik = (props) => {
  const { id, name, label, inputRef, className, type, frmField, errMessage, ...other } = props;

  const inputClass = `form-control ${className} ${errMessage ? "is-invalid" : "mb-4"}`;
  return (
    <>
      {label ? <label htmlFor="">{label}</label> : ""}
      <div>
        <input
          name={name}
          ref={inputRef}
          type={type}
          id={id}
          {...other}
          {...frmField}
          className={inputClass}
        />
        {errMessage ? <div className="invalid-feedback">{errMessage}</div> : ""}
      </div>
    </>
  );
};

export default InputFormik;
