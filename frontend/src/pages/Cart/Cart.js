import React from "react";
import "./Cart.css";
import Hero from './../../components/Hero/Hero';
import heroCart from '../../Assets/image/hero-product.jpg'
import Title from './../../components/Title/Titile';
import CustomizeButton from './../../components/Buttons/CustomizeButton';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero
        title="Giỏ Hàng"
        subTitle="Các sản phẩm đã được thêm vào giỏ hàng"
        heroImg={heroCart}
      />

      <div className="container">
        <div className="row">
          <Title page="Giỏ Hàng" />
          <div className="col-lg-12 pt-4 tab-info text-center">
            {" "}
            <div className="header-cart">
              <div className="row h-100 align-items-center">
                <div className="col-lg-3 col-md-3">
                  <p className="text-header-cart">Sản phẩm</p>
                </div>
                <div className="col-lg-2 col-md-2">
                  <p className="text-header-cart">Giá</p>
                </div>
                <div className="col-lg-2 col-md-2">
                  <p className="text-header-cart">Size</p>
                </div>
                <div className="col-lg-2 col-md-2">
                  <p className="text-header-cart">Số lượng</p>
                </div>
                <div className="col-lg-2 col-md-2">
                  <p className="text-header-cart">Tạm tính</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="list-cart">
              <div className="display-close mt-4 p-3 cart-checkout">
                <div className="row h-100">
                  <div className="col-lg-3 col-md-3 col-3 d-flex justify-content-start align-items-center">
                    <div className="row d-center">
                      <div className="col-lg-5 col-md-6 col-6 col-10 display-option">
                        <img
                          className="img-cart1"
                          src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                          alt="Fail"
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-12 display-option">
                        <p className="text-list-product m-0">AIR MAX 270</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-12 display-option">
                    <p className="cart-money m-0">1.755.000</p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-12 display-option">
                    <p className="cart-size m-0">41</p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-12 display-option">
                    <div className="nice-number">
                      <button type="button" className="minus">-</button>
                      <span className="num">01</span>
                      <button type="button" className="plus">+</button>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-12 display-option">
                    <p
                      className="cart-money result-money m-0"
                      value="1.755.000"
                    >
                      1.755.000đ
                    </p>
                  </div>
                  <div className="col-lg-1 col-md-1 d-flex justify-content-end align-items-center">
                    <a href="/">
                      <i className="bi bi-x close-cart" id={1} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mt-3">
            <div className="row ">
              <div className="col-lg-7 col-md-6 col-5 p-3 note-total">
                <CustomizeButton
                  href="/Products"
                  className="secondary-btn sub-out-product1 d-flex justify-content-center align-items-center text-center "
                >
                  Tiếp tụp mua sắm
                </CustomizeButton>
              </div>
              <div className="col-lg-2 col-md-3 col-4 d-flex justify-content-center align-items-center">
                <p className="text-total m-0" style={{ display: "block" }}>
                  Tổng cộng :
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-3 d-flex justify-content-center align-items-center">
                <p
                  className="cart-money total-money m-0"
                  style={{ display: "block" }}
                >
                  1.755.000đ
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mt-5">
            <div className="cart-sale">
              <div className="row">
                <div className="col-lg-6">
                  <p className="text-info-sale">
                    ** Khuyến mãi 30 % với đơn hàng đầu tiên, nhập mã
                    “snekaer4u” để được áp dụng ngay trước khi thanh toán.
                  </p>
                  <p className="text-info-sale">
                    ** Với khách hàng mua tại của hàng với tổng hóa đơn từ trước
                    tới nay lớn hơn 1.500.000đ sẽ nhận được voucher trị giá
                    500.000đ, để biết thông tin vui lòng kiểm tra tin nhắn hoặc
                    Email để nhận mã voucher.
                  </p>
                </div>
                <div className="col-lg-6">
                  <form className="form-sale">
                    <p className="text-header-sale pb-3">Khuyễn mãi</p>
                    <div className="tamtinh d-flex justify-content-between align-items-center">
                      <p className="money-tam">Tạm tính :</p>
                      <p className="money-info">1.755.000đ</p>
                    </div>
                    <div className="tamtinh mt-3 position-relative d-flex justify-content-between align-items-center">
                      <p className="money-tam m-0">Voucher :</p>
                      <input type="text" placeholder="Mã giảm giá" />
                      <CustomizeButton className="primary-btn btn-sale position-absolute">
                        Xác nhận
                      </CustomizeButton>
                    </div>
                    <div className="tamtinh mt-5 pt-3 d-flex justify-content-between align-items-center border border-end-0 border-start-0 border-bottom-0">
                      <p className="money-tam m-0">Tổng cộng :</p>
                      <p className="money-info m-0">1.755.000đ</p>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-lg-12 mr-btn d-flex justify-content-center align-items-center">
                      <CustomizeButton
                        onClick={() => navigate("/pay")}
                        className="secondary-btn sub-out-product d-flex justify-content-center align-items-center text-center "
                      >
                        Thanh toán
                      </CustomizeButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
