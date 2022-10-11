import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/image/logo.png";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { SearchContext } from "../components/Product/SearchContext";
import MiniCart from "../pages/Cart/MiniCart";
import { cartItemsCountSelector } from "../pages/Cart/selectors";
import { logout } from "../redux/reducers/authSlice";
import { clearOrder } from "../redux/reducers/orderSlice";
import FavoriteList from "./../components/FavoriteList/FavoriteList";
import "./header.css";

const Header = () => {
  const contextSearch = useContext(SearchContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearOrder());
  };

  return (
    <>
      <header className="header d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="header-wrapper row ">
            <div className="logo col-sm-10 col-md-2 col-4">
              <Link to="/home">
                <img className="header-logo" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-main col-8 col-md-6 col-lg-7 d-flex justify-content-center align-items-center">
              <div className="header-navbar d-flex flex-column justify-content-center align-items-center">
                {/* Menu */}

                <div className="menu my-2">
                  <NavLink className="menu-item" to="/home">
                    Trang chủ
                  </NavLink>

                  <NavLink className="menu-item" to="/products">
                    Sneaker
                  </NavLink>

                  <NavLink className="menu-item" to="/news">
                    Tin tức
                  </NavLink>

                  <NavLink className="menu-item" to="/contact">
                    Liên hệ
                  </NavLink>

                  <NavLink className="menu-item-last" to="/about">
                    Chúng tôi
                  </NavLink>
                </div>

                {/* Search */}
                <div className="menu-search ">
                  <input
                    onChange={(e) => contextSearch.handleChangeSearch(e)}
                    className="search-input"
                    type="search"
                    placeholder="Tên sản phẩm"
                  />
                  <button
                    onClick={contextSearch.handleSearch}
                    type="button"
                    className="search-button "
                  >
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>

            <div className="user-info col-2 col-md-4 col-lg-3">
              {/* Login */}
              {isLoggedIn ? (
                <div className="d-flex justify-content-center my-2">
                  <p className="user-login me-1" onClick={(e) => navigate("/profile/account")}>
                    {userInfo.fullName}
                  </p>
                  <span> / </span>
                  <p className="user-register ms-1" onClick={() => handleLogout()}>
                    Đăng xuất
                  </p>
                </div>
              ) : (
                <div className="d-flex justify-content-center my-2">
                  <p className="user-login me-1" onClick={(e) => navigate("/login")}>
                    Đăng nhập
                  </p>
                  <span> / </span>
                  <p className="user-register ms-1" onClick={(e) => navigate("/register")}>
                    Đăng ký
                  </p>
                </div>
              )}

              <div className=" d-flex justify-content-between align-items-center mb-3">
                {/* Favorite */}
                <FavoriteList
                  title={
                    <i className="bi bi-heart " title="Danh sách yêu thích">
                      {" "}
                      Yêu thích
                    </i>
                  }
                >
                  FavoriteList
                </FavoriteList>

                {/* Cart */}
                <div onClick={() => navigate("/cart")} className="user-cart">
                  <i className="cart bi bi-bag-check-fill ms-2" title="Giỏ hàng của bạn"></i>
                  {cartItemsCount ? <span className="cart-amount">{cartItemsCount}</span> : ""}
                  {/* hover show */}
                  <div className="user-mini-cart"></div>
                  {/* mini cart */}
                  <MiniCart />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile  menu */}
        <MobileMenu>
          <div className="mobile-menu-main">
            <div className="mobile-menu-header">
              <h1>Sneaker Shop</h1>
            </div>

            <ul className="mobile-menu-content">
              <Link to="/home" className="mobile-menu-item">
                Trang chủ
              </Link>
              <Link to="/products" className="mobile-menu-item">
                Sneaker
              </Link>
              <Link to="/news" className="mobile-menu-item">
                Tin Tức
              </Link>
              <Link to="/contact" className="mobile-menu-item">
                Liên hệ
              </Link>
              <Link to="/about" className="mobile-menu-item">
                Chúng tôi
              </Link>
            </ul>

            <div className="mobile-menu-search">
              <input type="text" onChange={(e) => contextSearch.handleChangeSearch(e)} />
              <button type="button" onClick={contextSearch.handleSearch}>
                Tìm
              </button>
            </div>

            {isLoggedIn ? (
              <div className="mobile-menu-signin">
                <p className="me-1" onClick={() => navigate("/profile/account")}>
                  {userInfo.fullName}
                </p>
                <span>/</span>
                <p className="ms-1" onClick={() => dispatch(logout())}>
                  Đăng xuất
                </p>
              </div>
            ) : (
              <div className="mobile-menu-signin">
                <Link to="/login" className="me-1">
                  Đăng nhập
                </Link>
                <span>/</span>
                <Link to="/register" className="ms-1">
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </MobileMenu>
      </header>
    </>
  );
};

export default Header;
