import React from "react";
import useClickOutSide from "../Hooks/useClickOutSide";
import "./mobileMenu.css";

const MobileMenu = (props) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <div ref={nodeRef}>
      <div onClick={() => setShow(true)} className="menu-button">
        <i className="bi bi-list" />
      </div>
      <div className={`mobile-menu-list ${show ? "show-mobile-menu-list" : ""}`}>
        {props.children}
      </div>
    </div>
  );
};

export default MobileMenu;
