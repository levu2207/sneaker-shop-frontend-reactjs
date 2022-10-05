import React, { useState } from "react";
import { removeFromCart, setQuantityItem } from "../../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import convertToVnd from "../../helpers/convertToVnd";

const OrderDetails = ({ item }) => {
  console.log(item);
  // const [quantity, setQuantity] = useState(item.quantity);
  let quantity = item.quantity;
  const dispatch = useDispatch();

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const action = removeFromCart({
      idNeedToRemove: item.id,
      sizeNeedToRemove: item.sizeSelect,
    });

    dispatch(action);
  };

  const handleIncreaseQuantity = (e) => {
    // setQuantity((preQuantity) => preQuantity + 1);
    quantity = quantity + 1;

    const action = setQuantityItem({
      id: item.id,
      sizeSelect: item.sizeSelect,
      quantity: quantity,
    });

    dispatch(action);
  };

  const handleDecreaseQuantity = (e) => {
    // setQuantity((preQuantity) => preQuantity - 1);
    quantity = quantity - 1;

    const action = setQuantityItem({
      id: item.id,
      sizeSelect: item.sizeSelect,
      quantity: quantity,
    });

    dispatch(action);
  };

  return (
    <div className="cart-details mt-2 p-3">
      <div className="cart-info row h-100">
        <div className="col-lg-3 col-md-3 col-12 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12 col-10 display-option">
              <img className="img-cart1" src={item.product.imageArr[1]} alt="Fail" />
            </div>
            <div className="col-lg-7 col-md-7 col-12 display-option justify-content-center">
              <p className="text-list-product m-0">{item.name}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-12 display-option">
          <p className="text-header-cart1">Giá :</p>
          <p className="cart-money m-0">{convertToVnd(item.salePrice || item.product.price)}</p>
        </div>
        <div className="col-lg-2 col-md-2 col-12 display-option">
          <p className="text-header-cart1">Size :</p>
          <p className="cart-size m-0">{item.sizeSelect}</p>
        </div>
        <div className="col-lg-2 col-md-2 col-12 display-option">
          <p className="text-header-cart1">Số lượng :</p>
          {/* Cart quantity */}
          <div className="quantity-input-group my-3">
            <button
              type="button"
              onClick={(e) => handleDecreaseQuantity(e)}
              disabled={quantity === 1}
            >
              <i className="bi bi-dash"></i>
            </button>
            <input
              onChange={(e) => console.log(quantity)}
              value={quantity}
              className="product-quantity-value"
              type="text"
            ></input>
            <button type="button" onClick={(e) => handleIncreaseQuantity(e)}>
              <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-12 display-option">
          <p className="text-header-cart1">Tạm tính :</p>
          <p className="cart-money result-money m-0" value="1.755.000">
            {convertToVnd(item.salePrice * item.quantity)}
          </p>
        </div>
        <div className="col-lg-1 col-md-1 d-flex justify-content-end align-items-center">
          <a href="/">
            <i onClick={(e) => handleRemoveItem(e)} className="bi bi-x close-cart" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
