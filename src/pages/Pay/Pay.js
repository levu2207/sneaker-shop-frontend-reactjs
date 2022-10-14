import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import heroPay from "../../Assets/image/hero-product.jpg";
import InputFormik from "../../components/Input/InputFormik";
import TextAreaFormik from "../../components/Input/TextAreaFormik";
import convertToVnd from "../../helpers/convertToVnd";
import { removeCartItems } from "../../redux/reducers/cartSlice";
import { createOrder } from "../../redux/reducers/orderSlice";
import detailService from "../../services/detailService";
import orderService from "../../services/orderService";
import { cartTotalSelector } from "../Cart/selectors";
import CustomizeButton from "./../../components/Buttons/CustomizeButton";
import Hero from "./../../components/Hero/Hero";
import Title from "./../../components/Title/Titile";
import "./Pay.css";
import PayMethod from "./PayMethod";

const Pay = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);

  const initialValues = {
    userId: userInfo.id,
    fullName: userInfo.fullName,
    phoneNumber: userInfo.phoneNumber || "",
    email: userInfo.email,
    address: userInfo.address,
    note: "",
    totalPrice: cartTotal,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Vui lòng nhập tên của bạn").min(2, "Tên phải ít nhất 2 ký tự"),
    phoneNumber: Yup.number()
      .typeError("SĐT phải là số")
      .min(10)
      .required("Vui lòng nhập SĐT của bạn"),
    email: Yup.string().required("Vui lòng nhập email của bạn"),
    address: Yup.string().required("Vui lòng nhập địa chỉ nhận hàng"),
    note: Yup.string(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handlePayment = (isPaid) => {
    setIsPaid(isPaid);
  };

  const handleFormSubmit = async (values) => {
    if (isLoggedIn) {
      // save order to database
      const newOrder = await orderService.createOrder({
        userId: values.userId,
        fullName: values.fullName,
        phoneNumber: values.phoneNumber,
        address: values.address,
        note: values.note,
        totalPrice: values.totalPrice,
        status: "pending",
        isPaid: Number(isPaid).valueOf(),
      });

      // save detail order to database
      let dataOrderItem = [];
      cartItems.forEach(async (item) => {
        const detail = await detailService.add({
          productId: item.id,
          orderId: newOrder.data.id,
          price: item.salePrice,
          quantity: item.quantity,
        });
        dataOrderItem.push(detail.data);
      });

      dispatch(removeCartItems());
      navigate("/profile/orders/all");
      toast.success("Đặt hàng thành công!");
    } else {
      toast.warn("Vui lòng đăng nhập để đặt hàng");
    }
  };

  return (
    <>
      <Helmet>
        <title>Trang thanh toán</title>
        <meta name="description" content="Trang thanh toán" />
      </Helmet>
      <Hero title="Thanh Toán" subTitle="Còn rất nhiều Voucher dành cho bạn" heroImg={heroPay} />
      <div className="container">
        <div className="row">
          <Title page="Thanh Toán" />
        </div>

        <div className="content-checkout mt-5">
          <div className="container">
            <div className="body-checkout">
              <div className="row">
                {/* ship info */}
                <div className="col-lg-6 col-md-6 pb-5 border border-end-0 border-start-0 border-top-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="heading-checkout">Thông tin giao hàng</p>
                    </div>
                    {/* full name */}
                    <div className="col-lg-7">
                      <InputFormik
                        name="fullName"
                        type="text"
                        className="input-address "
                        placeholder="Tên của bạn"
                        frmField={formik.getFieldProps("fullName")}
                        errMessage={formik.touched.fullName && formik.errors.fullName}
                      />
                    </div>
                    {/* phone number */}
                    <div className="col-lg-5 mr-4">
                      <InputFormik
                        name="phoneNumber"
                        type="text"
                        className="input-address "
                        placeholder="SĐT của bạn"
                        frmField={formik.getFieldProps("phoneNumber")}
                        errMessage={formik.touched.phoneNumber && formik.errors.phoneNumber}
                      />
                    </div>
                    {/* email */}
                    <div className="col-lg-12">
                      <InputFormik
                        name="email"
                        type="text"
                        className="input-address"
                        placeholder="Email của bạn"
                        frmField={formik.getFieldProps("email")}
                        errMessage={formik.touched.email && formik.errors.email}
                      />
                    </div>
                    {/* address */}
                    <div className="col-lg-12">
                      <InputFormik
                        name="address"
                        type="text"
                        className="input-address"
                        placeholder="Email của bạn"
                        frmField={formik.getFieldProps("address")}
                        errMessage={formik.touched.address && formik.errors.address}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextAreaFormik
                        name="note"
                        rows={5}
                        placeholder="Ghi chú..."
                        frmField={formik.getFieldProps("note")}
                        errMessage={formik.touched.note && formik.errors.note}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 mt-5">
                    <PayMethod onClick={handlePayment} />
                  </div>
                </div>
                {/* order details */}
                <div className="col-lg-6 col-md-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="heading-checkout">Hoàn tất</p>
                    </div>
                    <div className="con-lg-12">
                      <div className="card-cart">
                        <div className="row">
                          <div className="product-checkout pt-4 pb-4">
                            {cartItems.map((item) => (
                              <div
                                key={Math.random(16).toString()}
                                className="col-lg-12 cart-item-order"
                              >
                                <div className="cart-item-info">
                                  <p className="text-list-product">{item.product.name}</p>
                                  <p className="cart-money checkout-money">
                                    {convertToVnd(item.salePrice)}
                                  </p>
                                </div>
                                <div className="order-item-image">
                                  <img src={item.product.imageArr[1]} alt="flaied" />
                                </div>
                                <p className="order-item-quantity m-0">{`x${item.quantity}`}</p>
                              </div>
                            ))}
                          </div>

                          <div className="col-lg-12">
                            <div className="col-lg-12 col-md-12 pe-0">
                              <p className="text-card-cart">
                                Mã khuyến mãi :<span className="text-card-price text-end">0đ</span>
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="col-lg-12 col-md-12">
                              <p className="text-card-cart m-0">
                                Tổng cộng :
                                <span className="cart-money card-money-end m-0 text-end">
                                  {convertToVnd(cartTotal)}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12 mt-5 d-flex justify-content-center align-items-center">
                            <CustomizeButton
                              type="button"
                              onClick={formik.handleSubmit}
                              className="secondary-btn sub-out-product5 d-flex justify-content-center align-items-center text-center "
                            >
                              Đặt hàng
                            </CustomizeButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pay;
