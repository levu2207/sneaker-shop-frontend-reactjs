import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/image/logo.png";
import Login from "../pages/Login/Login";
import "./header.css";
import FavoriteList from "./../components/FavoriteList/FavoriteList";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="container position-relative p-0">
        <div className="h-100 d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/home">
              <img className="logo-home" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Menu */}
          <div className="menu">
            <ul className="d-flex">
              <li>
                <NavLink className="menu-item" to="/home">
                  Trang chủ
                </NavLink>
              </li>

              <li>
                <NavLink className="menu-item" to="/products">
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
            {/* Cart */}
            <div onClick={() => navigate("/cart")} className="user-cart">
              <i className="cart bi bi-bag-check-fill" title="Giỏ hàng của bạn"></i>
              <span className="cart-amount">0</span>
            </div>

            {/* Search */}
            <div className="fs-3 user-search mx-3" title="Tìm kiếm sản phẩm">
              <i className="bi bi-search"></i>
            </div>

            {/* Favorite */}

            <FavoriteList>
              <i className="bi bi-heart" title="Danh sách yêu thích"></i>
            </FavoriteList>

            {/* Login */}
            <div className="fs-3 user-login mx-3">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
