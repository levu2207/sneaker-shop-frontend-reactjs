import React from "react";
import OrderDetails from "./OrderDetails";

const Order = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={Math.random().toString(16)}>
          <OrderDetails item={item} />
        </div>
      ))}
    </div>
  );
};

export default Order;
