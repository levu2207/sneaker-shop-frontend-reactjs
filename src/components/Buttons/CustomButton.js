import React from "react";

const CustomButton = (props) => {
  const {
    color,
    className = "",
    onClick,
    icon,
    iconColor = "white",
    isLoading = false,
    ...others
  } = props;
  const spinnerClass = `spinner-border spinner-border-sm text-${iconColor} me-1`;
  const iconClass = `${icon} text-${iconColor} me-1`;
  return (
    <button onClick={onClick} type="button" className={className} {...others}>
      {isLoading ? (
        <div className={spinnerClass}></div>
      ) : icon ? (
        <span className={iconClass}></span>
      ) : (
        ""
      )}
      {props.children}
    </button>
  );
};

export default CustomButton;
