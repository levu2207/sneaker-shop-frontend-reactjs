import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import nikeImage from "../../Assets/image/products/id-1/air-max-4.png";
import CustomizeButton from "../../components/Buttons/CustomizeButton";

import "./cardModal.css";

const CardModal = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <button onClick={() => setLgShow(true)} className="product-quick-view">
        Xem nhanh
      </button>

      <Modal
        centered
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className="product-modal-container d-flex justify-content-center align-items-center">
          <div className="product-modal-img">
            <img src={nikeImage} alt="nike" />
          </div>
          <div className="product-modal-info p-4">
            <div className="product-modal-header">
              <div className="product-brand text-center fs-3">NIKE</div>

              <h3 className="product-name text-center mb-4">AIR MAX 270</h3>

              <p className="product-modal-desc py-3 border-top ">
                Ensure a comfortable running session by wearing this pair of cool running shoes from
                Nike.
              </p>
            </div>

            <div className="size-container py-3 border-top border-bottom">
              <h3 className="title mb-2">SIZE</h3>

              <div className="size-list p-2 d-flex align-items-center">
                <span className="size-item">6</span>
                <span className="size-item">7</span>
                <span className="size-item">8</span>
                <span className="size-item">9</span>
                <span className="size-item">10</span>
                <span className="size-item">11</span>
              </div>
            </div>

            <div className="product-modal-footer my-4 d-flex justify-content-between align-items-center">
              <CustomizeButton className="primary-btn">Thêm vào giỏ hàng</CustomizeButton>

              <div className="modal-footer-price ">
                <div className="product-price text-center">1.950.000đ</div>
                <div className="product-price-sale fs-3">1.700.000đ</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
