import React from "react";
import "./News.css";
import Title from "./../../components/Title/Titile";
import Hero from "../../components/Hero/Hero";
import heroNews from "../../Assets/image/hero-news.jpeg";
import CustomizeButton from "./../../components/Buttons/CustomizeButton";
import { Helmet } from "react-helmet";

const News = () => {
  return (
    <>
      <Helmet>
        <title>Tin tức mới nhất về những sản phẩm của Sneaker</title>
        <meta name="description" content="Tin tức mới nhất về những sản phẩm của Sneaker" />
      </Helmet>
      <Hero title="Tin Tức" subTitle="Thông tin mới nhất về giày Sneaker" heroImg={heroNews} />

      <div className="container">
        <div className="row">
          <Title page="Tin tức" />
          <div className="content-news">
            <div className="news-deatail">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-news text-center">Tin mới</div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <a href="/">
                      <img
                        src="https://sneaker97.herokuapp.com/image/img-banner/new1.jpg"
                        alt="Fail"
                        className="img-news"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 mr-5 mt-4">
                    <a href="/" className="item-news">
                      <p className="highlight-news mb-1">Tin tức Sneaker</p>
                      <p className="text-content">
                        Skechers X One Piece Trở Lại Đầy Phong Cách “Đặt Trước – Rước Ưu Đãi” Ngay
                        Hôm Nay.
                      </p>
                      <p className="text-hide">
                        Với thành công từ lần đầu ra mắt vào năm 2019, bộ sưu tập Skechers X One
                        Piece đã quay trở lại với 5 mẫu thiết kế mới nhất mang hình ảnh đặc trưng
                        của các nhân vật đươc yêu thích là: Monkey D. Luffy,...
                      </p>
                      <div className="item-info d-flex justify-content-start align-items-center">
                        <div className="row w-100">
                          <div className="col-lg-6 col-12">
                            <p className="author m-0 ">
                              Tác giả: <span className="author-name">Đinh Xuân Hòa</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-12 pt-icon">
                            <p className="text-lock m-0">
                              <i className="bi bi-clock me-1" /> 10:01:01 - Hôm nay
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <a href="/">
                      <img
                        src="https://sneaker97.herokuapp.com/image/img-banner/news2.jpg"
                        alt="Fail"
                        className="img-news"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 mr-5 mt-4">
                    <a href="/" className="item-news">
                      <p className="highlight-news mb-1">Tin tức Sneaker</p>
                      <p className="text-content">
                        Biti’s Hunter Street Bloomin’ Central x Vietmax 2021
                      </p>
                      <p className="text-hide">
                        Nối tiếp sự thành công của 2 sản phẩm trước là Sai Gon &amp; Hà Nội, năm nay
                        Biti’s Hunter và nhà thiết kế Việt Max đã chọn cảm hứng từ miền Trung để đưa
                        vào sản phẩm. Miền Trung đó – khô cằn bên ngoài lại dung chứa tinh hoa di
                        sản; khắc nghiệt cơ cực chỉ càng làm sáng tỏ cái đẹp con người.
                      </p>
                      <div className="item-info d-flex justify-content-start align-items-center">
                        <div className="row w-100">
                          <div className="col-lg-6 col-12">
                            <p className="author m-0 ">
                              Tác giả: <span className="author-name">Đinh Xuân Hòa</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-12 pt-icon">
                            <p className="text-lock m-0">
                              <i className="bi bi-clock me-1" /> 09:02:07 - 07/11/2021
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 mr-5 mt-4">
                    <a href="/">
                      <img
                        src="https://sneaker97.herokuapp.com/image/img-banner/news3.jpg"
                        alt="Fail"
                        className="img-news"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 mr-5 mt-4">
                    <a href="/" className="item-news">
                      <p className="highlight-news mb-1">Tin tức Sneaker</p>
                      <p className="text-content">
                        Sneaker - Thiên đường chính hãng dành cho các tín đồ thời trang thể thao.
                      </p>
                      <p className="text-hide">
                        Là địa chỉ mua sắm các sản phẩm thời trang thể thao và đường phố uy tín tại
                        Việt Nam, mỗi ngày có tới 10.000 khách hàng truy cập và mua sắm trên website
                        sneakerdaily.vn. Hiện tại, Sneaker Daily chuyên cung cấp các sản phẩm thể
                        thao chính hãng chủ yếu như giày Air, Jordan, ...
                      </p>
                      <div className="item-info w-100 d-flex justify-content-start align-items-center">
                        <div className="row w-100">
                          <div className="col-lg-6 col-12">
                            <p className="author m-0 ">
                              Tác giả: <span className="author-name">Đinh Xuân Hòa</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-12 pt-icon">
                            <p className="text-lock m-0">
                              <i className="bi bi-clock me-1" /> 11:01:01 - 01/11/2021
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="
                              col-lg-12
                              mr-btn
                              mt-5
                              d-flex
                              justify-content-center
                              align-items-center
                          "
                  >
                    <CustomizeButton
                      href="/"
                      className=" secondary-btn
                              sub-out-product
                              d-flex
                              justify-content-center
                              align-items-center
                              text-center
                              "
                    >
                      Xem thêm
                    </CustomizeButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-sneaker  mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mt-3">
                    <div className="heading-news text-center">Đánh giá Sneaker</div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-4">
                    <a href="/" className="info-new">
                      <div className="img-news">
                        <img
                          className="img-story"
                          src="https://sneaker97.herokuapp.com/image/img-banner/news1.jpg"
                          alt="Fail"
                        />
                      </div>
                      <div className="content-news">
                        <p className="highlight-news mb-1 mb-1">Đánh giá Sneaker</p>
                        <p className="text-content mb-3">
                          PEAK TACHI 2.0 - PRO Nâng cấp để trở nên hoàn hảo hơn.
                        </p>
                        <p className="text-lock m-0">
                          <i className="bi bi-clock me-1" /> 01/11/2021
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-4">
                    <a href="/" className="info-new">
                      <div className="img-news">
                        <img
                          className="img-story"
                          src="https://sneaker97.herokuapp.com/image/img-banner/new2.jpg"
                          alt="Fail"
                        />
                      </div>
                      <div className="content-news">
                        <p className="highlight-news mb-1 mb-1">Đánh giá Sneaker</p>
                        <p className="text-content mb-3">
                          18KM trải nghiệm đôi giày NEW BALANCE FRESHFOAM 880.
                        </p>
                        <p className="text-lock m-0">
                          <i className="bi bi-clock me-1" /> 21/10/2021
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-4">
                    <a href="/" className="info-new">
                      <div className="img-news">
                        <img
                          className="img-story"
                          src="https://sneaker97.herokuapp.com/image/img-banner/news3.jpg"
                          alt="Fail"
                        />
                      </div>
                      <div className="content-news">
                        <p className="highlight-news mb-1 mb-1">Đánh giá Sneaker</p>
                        <p className="text-content mb-3">
                          ADIDAS ADIZERO ADIOS PRO – Kỳ phùng địch thủ của Nike.
                        </p>
                        <p className="text-lock m-0">
                          <i className="bi bi-clock me-1" /> 18/10/2021
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-4">
                    <a href="/" className="info-new">
                      <div className="img-news">
                        <img
                          className="img-story"
                          src="https://sneaker97.herokuapp.com/image/img-banner/news4.jpg"
                          alt="Fail"
                        />
                      </div>
                      <div className="content-news">
                        <p className="highlight-news mb-1 mb-1">Đánh giá Sneaker</p>
                        <p className="text-content mb-3">
                          Đánh giá BITI’S HUNTER STREET x VIỆT MAX – Hà Nội.
                        </p>
                        <p className="text-lock m-0">
                          <i className="bi bi-clock me-1" /> 17/10/2021
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-4">
                    <a href="/" className="info-new">
                      <div className="img-news">
                        <img
                          className="img-story"
                          src="https://sneaker97.herokuapp.com/image/img-banner/review1.jpg"
                          alt="Fail"
                        />
                      </div>
                      <div className="content-news">
                        <p className="highlight-news mb-1 mb-1">Đánh giá Sneaker</p>
                        <p className="text-content mb-3">
                          Chi tiết siêu phẩm Nike Air Jordan 1 x Dior tại Việt Nam.
                        </p>
                        <p className="text-lock m-0">
                          <i className="bi bi-clock me-1" /> 17/10/2021
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 mt-4">
                    <a href="/" className="info-new">
                      <div className="img-news">
                        <img
                          className="img-story"
                          src="https://sneaker97.herokuapp.com/image/img-banner/review2.jpg"
                          alt="Fail"
                        />
                      </div>
                      <div className="content-news">
                        <p className="highlight-news mb-1 mb-1">Đánh giá Sneaker</p>
                        <p className="text-content mb-3">RieNevan Training – AGI | Việt Nam</p>
                        <p className="text-lock m-0">
                          <i className="bi bi-clock me-1" /> 17/10/2021
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="
                          col-lg-12
                          mr-btn
                          mt-5
                          d-flex
                          justify-content-center
                          align-items-center
                      "
                  >
                    <CustomizeButton
                      href="/"
                      className=" secondary-btn
                          sub-out-product
                          d-flex
                          justify-content-center
                          align-items-center
                          text-center
                          "
                    >
                      Xem thêm
                    </CustomizeButton>
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

export default News;
