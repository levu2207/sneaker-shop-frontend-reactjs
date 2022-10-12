import React from "react";
import { useOutletContext } from "react-router-dom";
import OrderList from "./OrderList";

const SuccessOrder = () => {
  const orderList = useOutletContext().filter((order) => order.status === "success");

  return (
    <>
      <OrderList orderList={orderList} />
    </>
  );
};

export default SuccessOrder;
