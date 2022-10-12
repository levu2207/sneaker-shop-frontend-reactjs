import React from "react";
import { useOutletContext } from "react-router-dom";
import OrderList from "./OrderList";

const AllOrder = () => {
  const orderList = useOutletContext();

  return (
    <>
      <OrderList orderList={orderList} />
    </>
  );
};

export default AllOrder;
