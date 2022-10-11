import React from "react";
import { useSelector } from "react-redux";
import convertToVnd from "../../helpers/convertToVnd";

const OrderItems = ({ order }) => {
  const productList = useSelector((state) => state.product.products);

  const itemList = order.orderItems.map((item) => {
    const product = productList.find((product) => product.id === item.productId);
    return {
      ...item,
      product,
    };
  });

  return (
    <div>
      {itemList.map((item) => (
        <div key={Math.random(16).toString()} className="order-item">
          <div>
            <img src={item.product.imageArr[1]} alt="failed" />
            <div className="order-item-name">
              <p>{item.product.name}</p>
              <span>{`x${item.quantity}`}</span>
            </div>
          </div>
          <p>{convertToVnd(Number(item.price))}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderItems;
