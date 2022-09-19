import React from "react";
import "./products.css";
import Title from "../../components/Title/Titile";
import Hero from "../../components/Hero/Hero";
import heroSneaker from "../../Assets/image/hero-product.jpg";

const Products = () => {
  return (
    <>
      <Hero
        title="Sneaker"
        subTitle="Những sản phẩm mới nhất trong cửa hàng"
        heroImg={heroSneaker}
      />

      <div className="container">
        <div className="row">
          <Title page="Sneaker" />
          <div className="list-sneaker">
            <div className="container">
              <div className="row">
                <div className="sub-shop-header ">
                  <div className="sort d-flex justify-content-center align-items-center">
                    <p className="text-sort me-4 m-0">Hiển thị 0 - 15 trong 30 sản phẩm</p>
                    <select>
                      <option value>Thứ tự mặc định</option>
                      <option value>Thứ tự theo mức độ phổ biến</option>
                      <option value>Thứ tự theo điểm đánh giá</option>
                      <option value>Thứ tự theo sản phẩm mới</option>
                      <option value>Thứ tự giá từ thấp đến cao</option>
                      <option value>Thứ tự giá từ cao xuống thấp</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-3 item-list">
              <div className="row">
                <div className="col-lg-12">
                  <div className="list-product">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading-list d-flex justify-content-center align-items-center">
                          <div className="list-style w-100">
                            <p className="text-list m-0 text-start">DANH MỤC SẢN PHẨM</p>
                            <div className="empty-list mt-2" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="list-pr border p-3 pt-4 d-flex justify-content-between align-items-start flex-column">
                          <a className="list-pr-item" href="/">
                            Giày dành cho nam
                          </a>
                          <a className="list-pr-item" href="/">
                            Giày dành cho nữ
                          </a>
                          <a className="list-pr-item" href="/">
                            Giày dành cho trẻ em
                          </a>
                          <a className="list-pr-item" href="/">
                            Giày chạy bộ
                          </a>
                          <a className="list-pr-item" href="/">
                            Giày bóng rổ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mt-5">
                <div className="filter">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-list d-flex justify-content-center align-items-center">
                        <div className="list-style w-100">
                          <p className="text-list m-0 text-start">THƯƠNG HIỆU</p>
                          <div className="empty-list mt-2" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="list-pr border p-3 d-flex justify-content-between align-items-start flex-column">
                        <a className="list-pr-item" href="/">
                          NIKE
                        </a>
                        <a className="list-pr-item" href="/">
                          ADIDAS
                        </a>
                        <a className="list-pr-item" href="/">
                          PUMA
                        </a>
                        <a className="list-pr-item" href="/">
                          ASICS
                        </a>
                        <a className="list-pr-item" href="/">
                          CONVERSE
                        </a>
                        <a className="list-pr-item" href="/">
                          BITIS'S
                        </a>
                        <a className="list-pr-item" href="/">
                          SKECHER
                        </a>
                        <a className="list-pr-item" href="/">
                          ASICS
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-5">
                      <div className="search-size">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="heading-list d-flex justify-content-center align-items-center">
                              <div className="list-style w-100">
                                <p className="text-list m-0 text-start">SIZE</p>
                                <div className="empty-list mt-2" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="list-size border">
                            <div className="row p-3">
                              <div className="col-lg-12 d-flex justify-content-between align-items-center">
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  38.5
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  39
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  39.5
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  40
                                </a>
                              </div>
                            </div>
                            <div className="row pe-3 ps-3">
                              <div className="col-lg-12 d-flex justify-content-between align-items-center">
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  41
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  41.5
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  42
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  42.5
                                </a>
                              </div>
                            </div>
                            <div className="row p-3">
                              <div className="col-lg-12 d-flex justify-content-between align-items-center">
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  43.5
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  44
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  44.5
                                </a>
                                <a
                                  href="/"
                                  className="item-size d-flex justify-content-center align-items-center"
                                >
                                  45
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mt-5">
                          <div className="most-product">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="heading-list d-flex justify-content-center align-items-center">
                                  <div className="list-style w-100">
                                    <p className="text-list m-0 text-start">SẢN PHẨM BÁN CHẠY</p>
                                    <div className="empty-list mt-2" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="list-most border">
                                  <div className="row">
                                    <div className="col-lg-12 item-most">
                                      <a href="/" className="list-most d-block p-3">
                                        <div className="row hight">
                                          <div className="col-lg-5">
                                            <div className="img-most">
                                              <img
                                                src="https://sneaker97.herokuapp.com/image/img/fi1.jpg"
                                                alt="Fail"
                                                className="link-img"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-7 p-0">
                                            <div className="header-most d-flex justify-content-between align-items-start flex-column">
                                              <p className="most-name mb-2">OG CHICAGO PE</p>
                                              <p className="price-most m-0">2.900.000đ</p>
                                              <p className="rating m-0">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      <a href="/" className="list-most d-block p-3">
                                        <div className="row hight">
                                          <div className="col-lg-5">
                                            <div className="img-most">
                                              <img
                                                src="https://sneaker97.herokuapp.com/image/img/pat1.jpg"
                                                alt="Fail"
                                                className="link-img"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-7 p-0">
                                            <div className="header-most d-flex justify-content-between align-items-start flex-column">
                                              <p className="most-name mb-2">AIR MAX SEERSUCKER</p>
                                              <p className="price-most m-0">2.300.000đ</p>
                                              <p className="rating m-0">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      <a href="/" className="list-most d-block p-3">
                                        <div className="row hight">
                                          <div className="col-lg-5">
                                            <div className="img-most">
                                              <img
                                                src="https://sneaker97.herokuapp.com/image/img/forum2.jpg"
                                                alt="Fail"
                                                className="link-img"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-7 p-0">
                                            <div className="header-most d-flex justify-content-between align-items-start flex-column">
                                              <p className="most-name mb-2">FORUM</p>
                                              <p className="price-most m-0">1.700.000đ</p>
                                              <p className="rating m-0">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-lg-12 mt-3 pb-3">
                                      <a className="text-center d-block see-more" href="/">
                                        Xem thêm <i className="bi bi-caret-down-fill" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="render-sneaker">
                <div className="row renderOut">
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
                    <div
                      className="product"
                      style={{
                        animation: "0.5s ease 0.1s 1 normal forwards running product",
                      }}
                    >
                      <img
                        className="img-product"
                        src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                        alt="Fail"
                      />
                      <div className="content-cart h-25">
                        <div className="row h-100">
                          <div className="col-lg-12 h-100">
                            <div className="  star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                              <p className="brand-sneaker m-0">NIKE</p>
                              <div className="rate">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                              </div>
                            </div>
                            <div className="price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                              <div className=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                                <p className="text-name m-0">AIR MAX 270</p>
                                <p className="text-price m-0">
                                  1.755.000
                                  <span className="old-price">1.950.000đ</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
                    <div
                      className="product"
                      style={{
                        animation: "0.5s ease 0.1s 1 normal forwards running product",
                      }}
                    >
                      <img
                        className="img-product"
                        src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                        alt="Fail"
                      />
                      <div className="content-cart h-25">
                        <div className="row h-100">
                          <div className="col-lg-12 h-100">
                            <div className="  star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                              <p className="brand-sneaker m-0">ADIDAS</p>
                              <div className="rate">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                              </div>
                            </div>
                            <div className="price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                              <div className=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                                <p className="text-name m-0">ULTRABOOST SOLAR 19</p>
                                <p className="text-price m-0">
                                  1.402.500
                                  <span className="old-price">1.650.000đ</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
                    <div
                      className="product"
                      style={{
                        animation: "0.5s ease 0.1s 1 normal forwards running product",
                      }}
                    >
                      <img
                        className="img-product"
                        src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                        alt="Fail"
                      />
                      <div className="content-cart h-25">
                        <div className="row h-100">
                          <div className="col-lg-12 h-100">
                            <div className="  star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                              <p className="brand-sneaker m-0">VANS</p>
                              <div className="rate">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                              </div>
                            </div>
                            <div className="price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                              <div className=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                                <p className="text-name m-0">FACTORY OLD SKOOL</p>
                                <p className="text-price m-0">
                                  1.400.000
                                  <span className="old-price">1.750.000đ</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
                    <div
                      className="product"
                      style={{
                        animation: "0.5s ease 0.1s 1 normal forwards running product",
                      }}
                    >
                      <img
                        className="img-product"
                        src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                        alt="Fail"
                      />
                      <div className="content-cart h-25">
                        <div className="row h-100">
                          <div className="col-lg-12 h-100">
                            <div className="  star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                              <p className="brand-sneaker m-0">ASICS</p>
                              <div className="rate">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                              </div>
                            </div>
                            <div className="price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                              <div className=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                                <p className="text-name m-0">GEL LYTE BALTIC</p>
                                <p className="text-price m-0">
                                  1.350.000
                                  <span className="old-price">1.500.000đ</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
                    <div
                      className="product"
                      style={{
                        animation: "0.5s ease 0.1s 1 normal forwards running product",
                      }}
                    >
                      <img
                        className="img-product"
                        src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                        alt="Fail"
                      />
                      <div className="content-cart h-25">
                        <div className="row h-100">
                          <div className="col-lg-12 h-100">
                            <div className="  star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                              <p className="brand-sneaker m-0">NEW BALENCE</p>
                              <div className="rate">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                              </div>
                            </div>
                            <div className="price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                              <div className=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                                <p className="text-name m-0">574 CLASSIC</p>
                                <p className="text-price m-0">
                                  1.530.000
                                  <span className="old-price">1.700.000đ</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
                    <div
                      className="product"
                      style={{
                        animation: "0.5s ease 0.1s 1 normal forwards running product",
                      }}
                    >
                      <img
                        className="img-product"
                        src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                        alt="Fail"
                      />
                      <div className="content-cart h-25">
                        <div className="row h-100">
                          <div className="col-lg-12 h-100">
                            <div className="  star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                              <p className="brand-sneaker m-0">JORDAN</p>
                              <div className="rate">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                              </div>
                            </div>
                            <div className="price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                              <div className=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                                <p className="text-name m-0">ONE MID</p>
                                <p className="text-price m-0">
                                  1.710.000
                                  <span className="old-price">1.900.000đ</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
