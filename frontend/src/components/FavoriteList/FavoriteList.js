import React from "react";
import useClickOutSide from "../../components/Hooks/useClickOutSide";

const FavoriteList = (props) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <div ref={nodeRef}>
      <div onClick={() => setShow(true)} className="user-favorite fs-3">
        {props.children}
      </div>

      <div className={`favorite-list ${show ? "show-favorite-list" : ""}`}></div>
    </div>
  );
};

export default FavoriteList;
