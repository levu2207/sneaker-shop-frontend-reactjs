import React from "react";
import "./product.css";
import products from "../../Api/fakeProduct";
import CustomizeButton from "../../components/Buttons/CustomizeButton";
import nikeImage from "../../Assets/image/products/id-1/air-max-4.png";
import CardModal from "../CardModal/CardModal";

const Product = (props) => {
  // const { brand, name, price, sale } = props;
  const salePercent = Number(products[0].sale.slice(0, 2));

  return (
    <div className="product-main col-lg-3 col-md-6 col-sm-6 col-9 mt-2 py-2">
      <div className="product-wrap m-3">
        <div className="product-card p-3">
          {/* Ribbon sale */}
          <div className="product-ribbon-wrap">
            <span className="product-ribbon-sale">{`Sale ${salePercent}%`}</span>
          </div>

          <div className="product-content mt-4 d-flex flex-column align-items-center">
            <div className="product-brand">{products[0].brand}</div>
            <div className="product-name">{products[0].name}</div>
          </div>

          <div className="product-img">
            <img src={nikeImage} alt={products[0].name}></img>
            {/* <button className="product-quick-view">Xem nhanh</button> */}
            <CardModal />
          </div>

          <div className="mb-2 d-flex justify-content-between">
            <div className="product-price-sale">1.700.000đ</div>
            <div className="product-price ">{products[0].price}</div>
          </div>

          <div className="product-footer">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="product-like d-flex justify-content-center align-items-center">
                <i className="product-like-icon fs-5 bi bi-heart-fill px-3"></i>
              </div>

              <div className="product-buy flex-grow-1 ms-3">
                <CustomizeButton className="w-100 third-btn big">Mua</CustomizeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
