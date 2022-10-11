import React, { useState } from "react";
import { Col } from "react-bootstrap";

const ImageDetails = ({ images }) => {
  const [image, setImage] = useState(images[1]);

  const handleSelectImage = (e) => {
    document.querySelector(".image-select img.active-select")?.classList.remove("active-select");
    e.target.classList.add("active-select");
    setImage(e.target.src);
  };
  return (
    <Col className="d-flex flex-column">
      <div className="image-display">
        <img src={image} alt="" />
      </div>
      <div className="image-select">
        {images.map((image) => (
          <img onClick={(e) => handleSelectImage(e)} key={image} src={image} alt="" />
        ))}
      </div>
    </Col>
  );
};

export default ImageDetails;
