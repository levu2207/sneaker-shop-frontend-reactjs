import React from "react";
import { useOutletContext } from "react-router-dom";
import OrderList from "./OrderList";

const PendingOrder = () => {
  const orderList = useOutletContext().filter((order) => order.status === "pending");

  return (
    <>
      <OrderList orderList={orderList} />
    </>
  );
};

export default PendingOrder;
