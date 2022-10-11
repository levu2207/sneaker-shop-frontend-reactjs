import React from "react";
import "./about.css";
import Title from './../../components/Title/Titile';
import Hero from './../../components/Hero/Hero';
import heroAbout from "../../Assets/image/hero-about.jpg"
const About = () => {
  return (
    <>
      <Hero
        title="Chúng Tôi"
        subTitle="Tìm hiểu nhiều hơn về chúng tôi"
        heroImg={heroAbout}
      />
      <div className="container">
        <div className="row">
          <Title page="Chúng Tôi" />
          <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
            <p className="text-brand-about">
              Snea<span>ker. Brand</span>
            </p>
            <p className="text-content-about">
              " Bắt đầu từ năm 2015 khi cơn sốt giày sneaker bắt đầu len lỏi vào
              giới trẻ.Sneaker đã ra đời như một địa điểm lý tưởng để mua sắm
              những mẫu giày tuyệt đẹp. Với phương châm hoạt động NHANH NHẤT và
              MỚI NHẤT. Chúng tôi tự tin là thương hiệu luôn kịp thời cập nhật
              xu hướng trong cộng đồng yêu thích “nền văn hóa mặt đất” – giày
              sneaker. Gần 2 năm hoạt động, hơn 40 000 khách hàng ghé cửa hàng
              mỗi năm. Hơn 500 đơn hàng online mỗi tháng và tiếp đón hàng trăm
              lượt khách mỗi ngày. Sneaker tự tin mang đến trải nghiệm tốt đẹp
              nhất cho khách hàng khi ghé thăm chúng tôi."
            </p>
          </div>

          <div className="col-lg-6">
            <img
              className="img-about"
              src="https://sneaker97.herokuapp.com/image/img-banner/about5.jpg"
              alt="Fail"
            />
          </div>

          <div className="col-lg-6 mt-3">
            <img
              className="img-about"
              src="https://sneaker97.herokuapp.com/image/img-banner/about1.jpg"
              alt="Fail"
            />
          </div>

          <div className="col-lg-6 mt-3">
            <img
              className="img-about"
              src="https://sneaker97.herokuapp.com/image/img-banner/abot2.jpg"
              alt="Fail"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
