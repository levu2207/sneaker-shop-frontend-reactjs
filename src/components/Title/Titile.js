import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";

const Title = (props) => {
  const { page } = props;

  return (
    <div className="col-lg-12 d-flex py-3">
      <Link className="breadcrumb-text" to="/home">
        Trang chủ
      </Link>
      <span className="me-2 ms-2">/</span>
      <p className="breadcrumb-text-current m-0">{page}</p>
    </div>
  );
};

export default Title;
