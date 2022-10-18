import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./profile.css";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.warn("Vui lòng đăng nhập!");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Thông tin tài khoản của bạn</title>
        <meta name="description" content="Cập nhật tài khoản và quản lý đơn hàng" />
      </Helmet>
      <div className="user-profile">
        <Row className="pt-5">
          <Col xl={2} className="wrapper-user-info py-3 ">
            <div className="bg-white">
              <div className="user-profile-name pt-3">
                <img src={userInfo.avatar} alt="failed" />
                <div>
                  <p className="pe-4">{userInfo.fullName}</p>
                </div>
              </div>

              <div className="d-flex py-3">
                <i className="bi bi-person-circle ps-3"></i>
                <NavLink to="account" className="ps-3">
                  Tài khoản của tôi
                </NavLink>
              </div>

              <div className="d-flex pb-3">
                <i className="bi bi-receipt ps-3"></i>
                <NavLink to="orders/all" className="ps-3">
                  Đơn hàng của tôi
                </NavLink>
              </div>
            </div>
          </Col>
          <Col xl={10} className="">
            <Outlet />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
