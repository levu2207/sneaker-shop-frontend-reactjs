import React, { useState } from "react";
import CustomizeButton from "../Buttons/CustomizeButton";

const AddToCartForm = ({ onClick }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = () => {
    onClick(quantity);
  };

  const handleChange = (e) => {
    const temp = Number(e.target.value).valueOf();
    setQuantity(temp);
  };

  const handleIncrease = (e) => {
    const temp = quantity + 1;
    setQuantity(temp);
  };

  const handleDecrease = (e) => {
    const temp = quantity - 1;
    setQuantity(temp);
  };

  return (
    <div className="product-quantity-form py-3">
      <label htmlFor="">Số lượng:</label>
      <div className="quantity-input-group my-3">
        <button type="button" onClick={(e) => handleDecrease(e)} disabled={quantity === 1}>
          <i className="bi bi-dash"></i>
        </button>
        <input
          onChange={(e) => handleChange(e)}
          value={quantity}
          className="product-quantity-value"
          type="text"
        ></input>
        <button type="button" onClick={(e) => handleIncrease(e)}>
          <i className="bi bi-plus"></i>
        </button>
      </div>

      <CustomizeButton onClick={handleQuantity} className="quantity-submit-btn primary-btn big">
        Chọn mua
      </CustomizeButton>
    </div>
  );
};

export default AddToCartForm;
