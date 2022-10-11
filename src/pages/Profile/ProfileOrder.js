import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import orderService from "../../services/orderService";
import { clearOrder, loadOrderList } from "../../redux/reducers/orderSlice";

const ProfileOrder = () => {
  const orderList = useSelector((state) => state.order.orders);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    orderService.getList(userInfo.id).then((res) => {
      console.log(res.data);
      dispatch(clearOrder());
      dispatch(loadOrderList(res.data));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="profile-order">
      <div className="profile-order-header">
        <NavLink to="all">Tất cả</NavLink>
        <NavLink to="pending">Chờ xác nhận</NavLink>
        <NavLink to="success">Hoàn thành</NavLink>
        <NavLink to="cancel">Đã hủy</NavLink>
      </div>
      <div className="profile-order-content">
        <Outlet context={orderList} />
      </div>
    </div>
  );
};

export default ProfileOrder;
