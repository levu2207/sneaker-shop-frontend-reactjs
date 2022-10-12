import React from "react";
import { useOutletContext } from "react-router-dom";
import OrderList from "./OrderList";

const CancelOrder = () => {
  const orderList = useOutletContext().filter((order) => order.status === "cancel");

  return (
    <>
      <OrderList orderList={orderList} />
    </>
  );
};

export default CancelOrder;
