import React, { useEffect } from "react";
import "./Cart.css";
import Hero from "./../../components/Hero/Hero";
import heroCart from "../../Assets/image/hero-product.jpg";
import Title from "./../../components/Title/Titile";
import CustomizeButton from "./../../components/Buttons/CustomizeButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Order from "./Order";
import { cartTotalSelector } from "./selectors";
import convertToVnd from "../../helpers/convertToVnd";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(cartTotalSelector);
  console.log(cartItems);

  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <>
      <Hero title="Giỏ Hàng" subTitle="Các sản phẩm đã được thêm vào giỏ hàng" heroImg={heroCart} />

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
            {/* Order */}
            <Order cartItems={cartItems} />
          </div>

          <div className="col-lg-12 mt-3">
            <div className="total-section row">
              <div className="col-lg-7 col-md-6 col-12 p-5 note-total">
                <CustomizeButton
                  onClick={() => navigate("/products")}
                  className="secondary-btn sub-out-product1 d-flex justify-content-center align-items-center text-center "
                >
                  Tiếp tục mua sắm
                </CustomizeButton>
              </div>
              <div className="col-lg-4 col-md-6 d-flex justify-content-between align-items-center">
                <p className="text-total m-0">Tổng cộng :</p>
                <p className="cart-money total-money m-0">{convertToVnd(cartTotal)}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mt-5">
            <div className="cart-sale">
              <div className="row">
                <div className="col-lg-6">
                  <p className="text-info-sale">
                    ** Khuyến mãi 30 % với đơn hàng đầu tiên, nhập mã “snekaer4u” để được áp dụng
                    ngay trước khi thanh toán.
                  </p>
                  <p className="text-info-sale">
                    ** Với khách hàng mua tại của hàng với tổng hóa đơn từ trước tới nay lớn hơn
                    1.500.000đ sẽ nhận được voucher trị giá 500.000đ, để biết thông tin vui lòng
                    kiểm tra tin nhắn hoặc Email để nhận mã voucher.
                  </p>
                </div>
                <div className="col-lg-6 pt-5">
                  <form className="form-sale">
                    <p className="text-header-sale pb-3">Khuyễn mãi</p>
                    <div className="tamtinh d-flex justify-content-between align-items-center">
                      <p className="money-tam">Tạm tính :</p>
                      <p className="money-info">{convertToVnd(cartTotal)}</p>
                    </div>
                    <div className="tamtinh mt-5 position-relative d-flex justify-content-between align-items-center">
                      <p className="money-tam m-0">Voucher :</p>
                      <input type="text" placeholder="Mã giảm giá" />
                      <CustomizeButton className="primary-btn btn-sale position-absolute">
                        Xác nhận
                      </CustomizeButton>
                    </div>
                    <div className="tamtinh mt-5 pt-3 d-flex justify-content-between align-items-center border border-end-0 border-start-0 border-bottom-0">
                      <p className="money-tam m-0">Tổng cộng :</p>
                      <p className="money-info m-0">{convertToVnd(cartTotal)}</p>
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
