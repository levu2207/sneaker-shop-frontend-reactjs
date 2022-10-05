import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomizeButton from "../../components/Buttons/CustomizeButton";
import ProductSize from "../Product/ProductSize";

import "./cardModal.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import AddToCartForm from "../Product/AddToCartForm";

const CardModal = ({ product }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const sizeList = [6, 7, 8, 9, 10, 11];
  let sizeSelect;
  let quantity;

  const salePercent = Number(product.sale);
  const salePrice = product.price - (product.price * salePercent) / 100;

  const handleSelectSize = (value) => {
    sizeSelect = value;
    console.log(sizeSelect);
  };

  const handleAddToCart = (value) => {
    quantity = value;
    console.log(quantity);

    const action = addToCart({
      id: product.id,
      product,
      salePrice,
      sizeSelect,
      quantity,
    });

    dispatch(action);
    setShow(false);
  };

  return (
    <div>
      <button onClick={() => setShow(true)} className="product-quick-view">
        Xem nhanh
      </button>

      <Modal
        centered
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className="product-modal-container d-flex justify-content-center align-items-center">
          <div className="product-modal-img">
            <img src={product.imageArr[0]} alt="nike" />
          </div>
          <div className="product-modal-info p-4">
            <div className="product-modal-header">
              <div className="product-brand text-center fs-3">{product.brand}</div>

              <h3 className="product-name text-center mb-4">{product.name}</h3>

              <p className="product-modal-desc py-3 border-top ">
                Ensure a comfortable running session by wearing this pair of cool running shoes from
                Nike.
              </p>
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
                    {product.sale !== 0
                      ? Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                          product.price
                        )
                      : ""}
                  </div>
                  {product.sale !== 0 ? (
                    <p className="product-modal-sale text-danger">{`-${product.sale}%`}</p>
                  ) : (
                    ""
                  )}
                </div>
                <h2 className="product-price-sale ">
                  {product.sale !== 0
                    ? Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                        salePrice
                      )
                    : Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                        product.price
                      )}
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
