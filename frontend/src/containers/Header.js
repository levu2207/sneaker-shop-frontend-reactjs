import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/image/logo.png";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="container position-relative p-0">
        <div className="h-100 d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="menu">
            <ul className="d-flex">
              <li>
                <NavLink className="menu-item" to="/home">
                  Trang chủ
                </NavLink>
              </li>

              <li>
                <NavLink className="menu-item" to="/product">
                  Sneaker
                </NavLink>
              </li>

              <li>
                <NavLink className="menu-item" to="/news">
                  Tin tức
                </NavLink>
              </li>

              <li>
                <NavLink className="menu-item" to="/contact">
                  Liên hệ
                </NavLink>
              </li>

              <li>
                <NavLink className="menu-item" to="/about">
                  Chúng tôi
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="user d-flex align-items-center">
            <div onClick={() => navigate("/cart")} className="user-cart">
              <i className="cart bi bi-bag-check-fill" title="Giỏ hàng của bạn"></i>
              <span className="cart-amount">0</span>
            </div>

            <div className="user-search mx-3" title="Tìm kiếm sản phẩm">
              <i className="bi bi-search"></i>
            </div>

            <div className="user-wishlist mx-3">
              <i className="bi bi-heart" title="Danh sách yêu thích"></i>
            </div>

            <div className="user-login mx-3">
              <i className="bi bi-person-circle" title="Đăng nhập/Đăng ký"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
