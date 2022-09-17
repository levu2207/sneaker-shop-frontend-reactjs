import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import nikeSlider1 from "../../Assets/image/nike-slider/nike-slider1.png";
import nikeSlider2 from "../../Assets/image/nike-slider/nike-slider2.jpg";
import nikeSlider3 from "../../Assets/image/nike-slider/nike-slider3.jpg";
import "./slider.css";

const SliderNike = () => {
  const [slider, setSlider] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setSlider(selectedIndex);
  };

  return (
    <div className="nike-slider py-4">
      <Carousel indicators={false} variant="dark" activeIndex={slider} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="nike-slider-item d-flex flex-column align-items-center text-center">
            <p className="nike-name">AIR MAX 270</p>
            <p className="nike-content my-4">
              Sự đổi mới mang tính đột phá của chúng tôi trong bảy năm thực hiện trải qua quá trình
              tiến hóa mới.
            </p>
            <img className="nike-image overflow-hidden" src={nikeSlider1} alt="AIR MAX 270" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="nike-slider-item d-flex flex-column align-items-center text-center">
            <p className="nike-name">AIR MAX 270</p>
            <p className="nike-content my-4">
              Sự đổi mới mang tính đột phá của chúng tôi trong bảy năm thực hiện trải qua quá trình
              tiến hóa mới.
            </p>
            <img className="nike-image h-100" src={nikeSlider2} alt="AIR MAX 270" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="nike-slider-item d-flex flex-column align-items-center text-center">
            <p className="nike-name">AIR MAX 270</p>
            <p className="nike-content my-4">
              Sự đổi mới mang tính đột phá của chúng tôi trong bảy năm thực hiện trải qua quá trình
              tiến hóa mới.
            </p>
            <img className="nike-image h-100" src={nikeSlider3} alt="AIR MAX 270" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderNike;
