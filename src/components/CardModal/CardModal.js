import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ProductSize from "../Product/ProductSize";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import convertToVnd from "../../helpers/convertToVnd";
import { addToCart } from "../../redux/reducers/cartSlice";
import AddToCartForm from "../Product/AddToCartForm";
import "./cardModal.css";

const CardModal = ({ product }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const sizeList = [6, 7, 8, 9, 10, 11];
  let sizeSelect;

  const salePercent = Number(product.sale);
  const salePrice = product.price - (product.price * salePercent) / 100;

  const handleSelectSize = (value) => {
    sizeSelect = value;
  };

  const handleAddToCart = (value) => {
    if (sizeSelect) {
      const quantity = value;

      const action = addToCart({
        id: product.id,
        product,
        salePrice,
        sizeSelect,
        quantity,
      });

      dispatch(action);
      setShow(false);
      toast.success("Thêm sản phẩm thành công!");
    } else {
      toast.error("Xin chọn kích cỡ!");
    }
  };

  return (
    <div>
      <button onClick={() => setShow(true)} className="product-quick-view">
        Xem nhanh
      </button>

      <Modal
        className="p-0"
        centered
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className="product-modal-container">
          <div className="product-modal-img">
            <img src={product.imageArr[0]} alt="nike" />
          </div>
          <div className="product-modal-info p-4">
            <div className="product-modal-header">
              <Modal.Header closeButton className="p-0 border-0">
                <div className="product-brand text-center fs-3">{product.brand}</div>
              </Modal.Header>
              <h3 className="product-name mb-4">{product.name}</h3>

              <p className="product-modal-desc py-3 border-top ">{product.description}</p>
            </div>

            <div className="size-container py-3 border-top border-bottom">
              <h5 className="title mb-2">Kích cỡ:</h5>

              {/* Product size */}
              <ProductSize sizeList={sizeList} onClick={handleSelectSize} />
            </div>

            <div className="product-modal-footer d-flex justify-content-between align-items-start">
              {/* Add to cart */}
              <AddToCartForm onClick={handleAddToCart} />

              <div className="modal-footer-price py-3">
                <div className="d-flex align-items-end">
                  <div className="product-price text-center">
                    {product.sale !== 0 ? convertToVnd(product.price) : ""}
                  </div>
                  {product.sale !== 0 ? (
                    <p className="product-modal-sale text-danger">{`-${product.sale}%`}</p>
                  ) : (
                    ""
                  )}
                </div>
                <h2 className="product-price-sale">
                  {product.sale !== 0 ? convertToVnd(salePrice) : convertToVnd(product.price)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
