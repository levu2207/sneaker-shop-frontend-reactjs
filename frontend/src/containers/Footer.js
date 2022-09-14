import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/image/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container pt-5">
        <div className="row d-flex justify-content-between align-items-start">
          <div className="col-lg-3 col-md-3 col-sm-6 p-0 d-flex justify-content-start align-items-center">
            <div className="item-logo">
              <a className="text-decoration-none text-logo h-100" href="/home">
                <img className="logo-footer" src={logo} alt="logo" />
              </a>
              <p className="mt-3 fs-4">Ở đây có giày!</p>
              <div className="content-end mt-3 mb-3">
                <a href="/#" className="info-shop">
                  <i className="bi bi-geo-alt-fill me-3" />
                  TP. Hồ Chí Minh
                </a>
              </div>
              <div className="content-end mb-3">
                <a href="/#" className="info-shop mb-3">
                  <i className="bi bi-telephone-fill me-3" />
                  Hotline: 098.8888.888
                </a>
              </div>
              <div className="content-end">
                <a href="/#" className="info-shop">
                  <i className="bi bi-envelope me-3" />
                  Email: sneaker@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 p-0 d-flex justify-content-start align-items-center">
            <div className="container d-flex flex-column">
              <p className="header-end mb-4 fs-4 text-white lh-1">Thông tin</p>
              <Link to="/home" className="detail-header mb-3">
                Trang chủ
              </Link>
              <Link to="/product" className="detail-header mb-3">
                Sneaker
              </Link>
              <Link to="/news" className="detail-header mb-3">
                Tin tức
              </Link>
              <Link to="/contact" className="detail-header mb-3">
                Liên hệ
              </Link>
              <Link to="/about" className="detail-header">
                Về chúng tôi
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 p-0 d-flex justify-content-start align-items-center">
            <div className="container d-flex flex-column">
              <p className="header-end mb-4 fs-4 text-white lh-1">Hỗ trợ</p>
              <Link to="/" className="detail-header mb-3">
                Đổi trả
              </Link>
              <Link to="/" className="detail-header mb-3">
                Chính sách bảo hành
              </Link>
              <Link to="/" className="detail-header mb-3">
                Chính sách vận chuyển
              </Link>
              <Link to="/" className="detail-header mb-3">
                Phương thức thanh toán
              </Link>
              <Link to="/" className="detail-header mb-3">
                Điều khoản dịch vụ
              </Link>
              <Link to="/" className="detail-header">
                Chính sách quyền riêng tư
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 p-0 d-flex justify-content-start align-items-center">
            <div className="container d-flex flex-column">
              <p className="header-end mb-4 fs-4 text-white lh-1">Theo dõi chúng tôi</p>
              <p className="detail-header1 mb-3">
                Nhận thông ưu đãi qua mạng xã hội với thông tin mới nhất của chúng tôi về mua sắm và
                các ưu đãi đặc biệt.
              </p>
              <div className="d-flex fs-4 col-md-2">
                <i className="bi bi-twitter me-5" />
                <i className="bi bi-facebook me-5" />
                <i className="bi bi-google me-5" />
                <i className="bi bi-instagram me-5" />
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-12 p-0 mt-5">
            <div className="container border-top">
              <div className="content-license d-flex justify-content-center align-items-center">
                <p className="text-license text-center my-3">Sneaker © 2021 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
