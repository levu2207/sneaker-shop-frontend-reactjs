import React from "react";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import convertToVnd from "../../helpers/convertToVnd";
import orderService from "../../services/orderService";
import OrderItems from "./OrderItems";

const OrderList = ({ orderList }) => {
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

          <div className="d-flex align-items-center justify-content-around flex-wrap">
            {order.status !== "pending" ? (
              ""
            ) : (
              <ConfirmModal
                text="Hủy"
                className="primary-btn ms-4 small order-1"
                type="button"
                title="Bạn chắc chắn muốn hủy đơn hàng?"
                onClick={(e) => handleCancelOrder(e, order)}
              />
            )}

            <p className="order-3 mb-2">{order.isPaid === 0 ? "Thanh toán khi nhận hàng" : "Đã thanh toán"}</p>

            <div className="order-total order-2">
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
