import React from "react";
import Banner from "../../components/Banner/Banner";
import Product from "../../components/Product/Product";
import SliderNike from "../../components/Slider/SliderNike";
import CustomizeButton from "../../components/Buttons/CustomizeButton";
import "./home.css";

const Home = () => {
  return (
    <>
      <Banner />

      <div className="support my-5">
        <div className="row">
          <div className="support-item col-lg-3 col-md-6 col-12">
            <div className="w-100 d-flex justify-content-center align-items-center flex-column">
              <i className="support-icon bi bi-truck"></i>
              <p className="support-title">Miễn phí giao hàng</p>
              <p className="support-desc">Áp dụng đối với tất cả sản phẩm</p>
            </div>
          </div>

          <div className="support-item col-lg-3 col-md-6 col-12">
            <div className="w-100 d-flex justify-content-center align-items-center flex-column">
              <i className="support-icon bi bi-arrow-repeat"></i>
              <p className="support-title">Đổi trả hoàn tiền</p>
              <p className="support-desc">30 ngày đổi trả miễn phí</p>
            </div>
          </div>

          <div className="support-item col-lg-3 col-md-6 col-12">
            <div className="w-100 d-flex justify-content-center align-items-center flex-column">
              <i className="support-icon bi bi-headset"></i>
              <p className="support-title">Hỗ trợ trực tuyến</p>
              <p className="support-desc">Luôn hỗ trợ về mọi câu hỏi</p>
            </div>
          </div>

          <div className="support-item col-lg-3 col-md-6 col-12">
            <div className="w-100 d-flex justify-content-center align-items-center flex-column">
              <i className="support-icon bi bi-receipt-cutoff"></i>
              <p className="support-title">Ưu đãi và khuyến mãi</p>
              <p className="support-desc">Nhiều mã giảm giá dành cho bạn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="category my-4">
          <div className="row h-100">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="category-item category-women d-flex align-items-center justify-content-center">
                <div className="category-content d-flex flex-column justify-content-center align-items-center">
                  <p className="category-title ">Women's</p>
                  <p className="category-desc pt-2 pb-4">Collections Sneaker</p>
                  <p className="category-link">Discover Now</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="category-item category-men d-flex align-items-center justify-content-center">
                <div className="category-content d-flex flex-column justify-content-center align-items-center">
                  <p className="category-title ">Men's</p>
                  <p className="category-desc pt-2 pb-4">Collections Sneaker</p>
                  <p className="category-link">Discover Now</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="category-item category-kid d-flex align-items-center justify-content-center">
                <div className="category-content d-flex flex-column justify-content-center align-items-center">
                  <p className="category-title ">Kid's</p>
                  <p className="category-desc pt-2 pb-4">Collections Sneaker</p>
                  <p className="category-link">Discover Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SliderNike />

      <div className="container">
        <div className="out-products">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-black fs-2 lh-1 d-flex justify-content-center align-items-center">
                <span className="emty mx-2"></span>
                Khám phá
                <span className="emty mx-2"></span>
              </h1>
              <p className="fs-5 mt-3">Các sản phẩm hiện có tại cửa hàng</p>
            </div>

            <div className="col-lg-12 mt-3">
              <div className="row justify-content-center">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>

              <div className="d-flex justify-content-center mt-3">
                <CustomizeButton className="secondary-btn big">Xem thêm</CustomizeButton>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4"></div>
      </div>
    </>
  );
};

export default Home;
