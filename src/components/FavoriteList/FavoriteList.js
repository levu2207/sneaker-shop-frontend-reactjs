import React from "react";
import useClickOutSide from "../../components/Hooks/useClickOutSide";
import "./favoriteList.css";

const FavoriteList = (props) => {
  const { title } = props;
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <div ref={nodeRef}>
      <div onClick={() => setShow(true)} className="user-favorite">
        {title}
      </div>

      <div className={`favorite-list ${show ? "show-favorite-list" : ""}`}>{props.children}</div>
    </div>
  );
};

export default FavoriteList;
