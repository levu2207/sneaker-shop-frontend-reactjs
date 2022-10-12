import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import convertToVnd from "../../helpers/convertToVnd";
import { removeFromCart } from "../../redux/reducers/cartSlice";

const MiniCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const showMiniCart = useSelector((state) => state.cart.showMiniCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (value, item) => {
    if (value === "confirm") {
      const action = removeFromCart({
        idRemove: item.id,
        sizeRemove: item.sizeSelect,
      });

      dispatch(action);
    }

    navigate(window.location.pathname);
  };

  return (
    <>
      <div className={`mini-cart ${showMiniCart ? "active-mini-cart" : ""}`}>
        {cartItems.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center">Giỏ hàng trống</div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={Math.random(16).toString()} className="mini-cart-item-content">
                <div className="mini-cart-item-info">
                  <p className="mini-cart-item-name">{item.product.name}</p>
                  <p className="mini-cart-item-price">{convertToVnd(item.salePrice)}</p>
                </div>
                <div className="mini-cart-item-image">
                  <img src={item.product.imageArr[1]} alt="flaied" />
                </div>
                <p className="mini-cart-item-quantity m-0">{`x${item.quantity}`}</p>

                <ConfirmModal
                  title="Bạn chắc chắn muốn hủy đơn hàng?"
                  onClick={(e) => handleRemoveItem(e, item)}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default MiniCart;
