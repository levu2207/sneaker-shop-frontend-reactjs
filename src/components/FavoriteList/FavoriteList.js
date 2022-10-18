import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useClickOutSide from "../../components/Hooks/useClickOutSide";
import convertToVnd from "../../helpers/convertToVnd";
import { removeFavoriteItem } from "../../redux/reducers/favoriteSlice";
import priceSale from "../../utils/priceSale";
import stringUtil from "../../utils/stringUtil";
import "./favoriteList.css";

const FavoriteList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, favoriteList } = props;
  const { show, setShow, nodeRef } = useClickOutSide();

  const handleCancelLike = (e, id) => {
    e.stopPropagation();
    dispatch(
      removeFavoriteItem({
        productId: id,
      })
    );
  };

  return (
    <div ref={nodeRef}>
      <div onClick={() => setShow(true)} className="user-favorite">
        {title}
      </div>

      <div className={`favorite-list ${show ? "show-favorite-list" : ""}`}>
        <div className="p-3">
          <h5 className="text-secondary-color text-center">Sản phẩm yêu thích</h5>
          {favoriteList.map((favorite) => (
            <div key={favorite.id} className="mt-3 bg-white rounded-3 p-3">
              <div className="d-flex justify-content-around align-items-center">
                <img src={favorite.imageArr[1]} alt="failed" />
                <div>
                  <p className="text-secondary-color">{favorite.name}</p>
                  <p>{convertToVnd(priceSale(favorite.price, favorite.sale))}</p>
                </div>
              </div>

              <div className="d-flex justify-content-around align-items-center">
                <button
                  onClick={(e) => {
                    navigate(
                      `/products/${favorite.id}/${stringUtil.GenUrlFriendly(favorite.name)}`
                    );
                    setShow(false);
                  }}
                  className="primary-btn small"
                >
                  Mua
                </button>
                <button
                  onClick={(e) => handleCancelLike(e, favorite.id)}
                  className="secondary-btn small"
                >
                  Bỏ thích
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
