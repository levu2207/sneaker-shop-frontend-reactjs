import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";

const Title = (props) => {
const {page} = props

  return (
    <>
          <div className="col-lg-12">
            <div className="link-select w-100">
              <Link className="text-link" to="/home">
                Trang chủ
              </Link>
              <span className="me-2 ms-2">/</span>
              <p className="text-link1 m-0">{page}</p>
            </div>
        </div>
    </>
  );
};

export default Title;