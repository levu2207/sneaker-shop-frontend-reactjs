import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomizeButton from "../../components/Buttons/CustomizeButton";
import convertToVnd from "../../helpers/convertToVnd";
import { addFavoriteItem, removeFavoriteItem } from "../../redux/reducers/favoriteSlice";
import stringUtil from "../../utils/stringUtil";
import CardModal from "../CardModal/CardModal";
import "./product.css";

const Product = ({ product }) => {
  const salePercent = Number(product.sale);
  const salePrice = product.price - (product.price * salePercent) / 100;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const handleProductDetail = (e) => {
    navigate(`/products/${product.id}/${stringUtil.GenUrlFriendly(product.name)}`);
  };

  const handleAddOrRemoveFavorites = (e, data) => {
    const isActive = e.target.classList.contains("active-favorite");
    if (isActive) {
      e.target.classList.remove("active-favorite");
      dispatch(
        removeFavoriteItem({
          productId: data.id,
        })
      );
      toast.warn("Đã xóa sản phẩm khỏi yêu thích");
    } else {
      e.target.classList.add("active-favorite");
      dispatch(addFavoriteItem(data));
      toast.success("Đã thêm sản phẩm vào yêu thích");
    }
  };

  const checkProductIsActive = (list) => {
    for (const item of list) {
      if (item.id === product.id) {
        return (
          <div
            id="productFavorite"
            className="product-like active-favorite"
            onClick={(e) => handleAddOrRemoveFavorites(e, product)}
          >
            <i className="product-like-icon bi bi-heart-fill"></i>
          </div>
        );
      }
    }
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
          {product.sale > 0 ? (
            <div className="product-price-sale">{convertToVnd(salePrice)}</div>
          ) : (
            <div className="product-price-sale">{convertToVnd(product.price)}</div>
          )}

          {product.sale > 0 ? (
            <div className="product-price">{convertToVnd(product.price)}</div>
          ) : (
            ""
          )}
        </div>

        <div className="product-footer ">
          {favoriteList.length > 0 ? (
            checkProductIsActive(favoriteList) ? (
              checkProductIsActive(favoriteList)
            ) : (
              <div
                id="productFavorite"
                className="product-like"
                onClick={(e) => handleAddOrRemoveFavorites(e, product)}
              >
                <i className="product-like-icon bi bi-heart-fill"></i>
              </div>
            )
          ) : (
            <div
              id="productFavorite"
              className="product-like"
              onClick={(e) => handleAddOrRemoveFavorites(e, product)}
            >
              <i className="product-like-icon bi bi-heart-fill"></i>
            </div>
          )}

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
