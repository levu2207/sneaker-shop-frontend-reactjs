import React from "react";

const TextAreaFormik = (props) => {
  const { id, name, inputRef, className = "", type, frmField, errMessage, ...other } = props;

  const inputClass = `form-control ${className} ${errMessage ? "is-invalid" : "mb-4"}`;
  return (
    <>
      <textarea
        name={name}
        ref={inputRef}
        type={type}
        id={id}
        {...other}
        {...frmField}
        className={inputClass}
      />
      {errMessage ? <div className="invalid-feedback">{errMessage}</div> : ""}
    </>
  );
};

export default TextAreaFormik;
