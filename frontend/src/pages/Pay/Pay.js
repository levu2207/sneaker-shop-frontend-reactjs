import './Pay.css'
import React from 'react';
import Hero from './../../components/Hero/Hero';
import heroPay from '../../Assets/image/hero-product.jpg';
import Title from './../../components/Title/Titile';
import CustomizeButton from './../../components/Buttons/CustomizeButton';

const Pay = () => {
    return (
      <>
        <Hero
          title="Thanh Toán"
          subTitle="Còn rất nhiều Voucher dành cho bạn"
          heroImg={heroPay}
        />
        <div className="container">
          <div className="row">
            <Title page="Thanh Toán" />
          </div>

          <div className="content-checkout mt-5">
            <div className="container">
              <div className="body-checkout">
                <div className="row">
                  <div className="col-lg-7 col-md-7 pb-5 border border-end-0 border-start-0 border-top-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <p className="heading-checkout">Thông tin giao hàng</p>
                      </div>
                      <div className="col-lg-8 mb-4">
                        <input
                          className="input-address w-100 p-3"
                          type="text"
                          placeholder="Họ và tên"
                        />
                      </div>
                      <div className="col-lg-4 mr-4">
                        <input
                          className="input-address w-100 p-3"
                          type="text"
                          placeholder="Số điện thoại"
                        />
                      </div>
                      <div className="col-lg-12 mt-4">
                        <input
                          className="input-address w-100 p-3"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-lg-4 mt-4">
                        <select className="input-address w-100 ps-3">
                          <option value>Chọn thành phố</option>
                          <option value>Hà Nội</option>
                          <option value>TP. Hồ Chí Minh</option>
                          <option value>Đà Nẵng</option>
                        </select>
                      </div>
                      <div className="col-lg-4 mt-4">
                        <select className="input-address w-100 ps-3">
                          <option value>Chọn Quận</option>
                          <option value>Chưa có thông tin</option>
                        </select>
                      </div>
                      <div className="col-lg-4 mt-4">
                        <select className="input-address w-100 ps-3">
                          <option value>Chọn xã / Phố</option>
                          <option value>Chưa có thông tin</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <input
                          className="input-address w-100 ps-3"
                          type="text"
                          placeholder="Địa chỉ"
                        />
                      </div>
                      <div className="col-lg-12 mt-4">
                        <textarea
                          className="textarria w-100 ps-3 pt-2"
                          cols={30}
                          rows={10}
                          placeholder="Ghi chú ..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="row">
                      <div className="col-lg-12">
                        <p className="heading-checkout">Hoàn tất</p>
                      </div>
                      <div className="con-lg-12">
                        <div className="card-cart">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="list-check">
                                  <div className="product-checkout pt-4 pb-4">
                                    <div className="row">
                                      <div className="col-lg-12 d-flex justify-content-between align-items-center">
                                        <div className="combor-card">
                                          <p className="text-list-product text-start">
                                            AIR MAX 270
                                          </p>
                                          <p className="cart-money checkout-money">
                                            1.755.000đ
                                          </p>
                                        </div>
                                        <p className="text-list-product m-0">
                                          <span>x</span> 1
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 mt-4">
                            </div>
                            <div className="col-lg-12">
                                <div className="col-lg-12 col-md-6 pe-0">
                                  <p className="text-card-cart">
                                    Mã khuyến mãi :
                                  <span className="text-card-price text-end">0đ</span>
                                  </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="col-lg-12 col-md-6">
                                  <p className="text-card-cart m-0">
                                    Tổng cộng :
                                  <span className="cart-money card-money-end m-0 text-end">
                                    1.755.000đ
                                  </span>
                                  </p>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-5 d-flex justify-content-center align-items-center">
                              <CustomizeButton
                                href="/"
                                className="secondary-btn sub-out-product5 d-flex justify-content-center align-items-center text-center "
                              >
                                Đặt hàng
                              </CustomizeButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 mt-5">
                    <div className="row">
                      <div className="col-lg-12 heading-pay">
                        <p className="heading-checkout">
                          Phương thức thanh toán
                        </p>
                      </div>
                      <div className="col-lg-12 mt-2">
                        <div className="select-method active-checked">
                          <img
                            className="ms-5 me-3 pay-method"
                            src="https://sneaker97.herokuapp.com/image/img-banner/image%20103.png"
                            alt="Fail"
                          />
                          <p className="text-method m-0">
                            THANH TOÁN TRỰC TIẾP KHI NHẬN HÀNG
                          </p>
                        </div>
                        <div className="select-method mt-4">
                          <img
                            className="ms-5 me-3 pay-method"
                            src="https://sneaker97.herokuapp.com/image/img-banner/image%20104.png"
                            alt="Fail"
                          />
                          <p className="text-method m-0">
                            THANH TOÁN TRỰC TUYẾN
                          </p>
                        </div>
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
}
 
export default Pay;