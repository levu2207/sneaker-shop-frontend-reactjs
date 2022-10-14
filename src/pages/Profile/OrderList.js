import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import convertToVnd from "../../helpers/convertToVnd";
import { cancelOrder } from "../../redux/reducers/orderSlice";
import OrderItems from "./OrderItems";
import { useDispatch } from "react-redux";
import orderService from "../../services/orderService";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

const OrderList = ({ orderList }) => {
  const dispatch = useDispatch();

  const convertTime = (time) => {
    const date = new Date(time);
    return `${date.toLocaleTimeString("vi-VN")} ngày ${date.toLocaleDateString("vi-VN")}`;
  };

  const handleCancelOrder = (value, data) => {
    if (value === "confirm") {
      orderService
        .update(data.id, {
          userId: data.userId,
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          address: data.address,
          note: data.note,
          totalPrice: data.totalPrice,
          status: "cancel",
          isPaid: data.isPaid,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  const OrderStatus = (status) => {
    let text;
    switch (status) {
      case "pending":
        text = "Chờ xác nhận";
        break;

      case "success":
        text = "Hoàn thành";
        break;

      case "cancel":
        text = "Đã hủy";
        break;

      default:
        text = "";
    }

    return text;
  };

  return (
    <>
      {orderList.map((order) => (
        <div key={Math.random(16).toString()} className="order-list">
          <div className="order-list-header">
            <p className="order-time">{`Thời gian đặt hàng: ${convertTime(order.createdAt)}`}</p>
            <p className="order-status">{OrderStatus(order.status)}</p>
          </div>
          <div className="order-list-content">
            <OrderItems order={order} />
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <ConfirmModal
              text="Hủy"
              className="primary-btn ms-4"
              disabled={order.status !== "pending"}
              type="button"
              title="Bạn chắc chắn muốn hủy đơn hàng?"
              onClick={(e) => handleCancelOrder(e, order)}
            />

            <p>{order.isPaid === 0 ? "Thanh toán khi nhận hàng" : "Đã thanh toán"}</p>

            <div className="order-total">
              <span>Tổng số tiền: </span>
              <p>{convertToVnd(order.totalPrice)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderList;
