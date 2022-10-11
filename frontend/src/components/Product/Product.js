import React from "react";
import { useNavigate } from "react-router-dom";
import CustomizeButton from "../../components/Buttons/CustomizeButton";
import convertToVnd from "../../helpers/convertToVnd";
import CardModal from "../CardModal/CardModal";
import "./product.css";

const Product = ({ product }) => {
  const salePercent = Number(product.sale);
  const salePrice = product.price - (product.price * salePercent) / 100;
  const navigate = useNavigate();

  const handleProductDetail = (e) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-main my-3">
      <div className="product-card p-3">
        {/* Ribbon sale */}
        {product.sale ? (
          <div className="product-ribbon-wrap">
            <span className="product-ribbon-sale">{`Sale ${salePercent}%`}</span>
          </div>
        ) : (
          ""
        )}

        <div className="product-main-heading mt-4 d-flex flex-column align-items-center">
          <div className="product-brand">{product.brand}</div>
          <div className="product-name">{product.name}</div>
        </div>

        <div className="product-img">
          <img src={product.imageArr[0]} alt={product.name}></img>

          {/* Product card modal */}
          <CardModal product={product} />
        </div>

        <div className="mb-2 d-flex justify-content-between align-items-center">
          <div className="product-price-sale">{convertToVnd(salePrice)}</div>
          <div className="product-price ">{convertToVnd(product.price)}</div>
        </div>

        <div className="product-footer ">
          <div className="product-like d-flex justify-content-center align-items-center">
            <i className="product-like-icon fs-5 bi bi-heart-fill"></i>
          </div>

          <div className="product-buy col-8 flex-grow-1">
            <CustomizeButton onClick={(e) => handleProductDetail(e)} className="product-card-btn">
              Mua
            </CustomizeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
