import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import CustomButton from "../../components/Buttons/CustomButton";
import InputFormik from "../../components/Input/InputFormik";
import { updateUserInfo } from "../../redux/reducers/authSlice";
import userService from "../../services/userService";

const Account = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  const [imageReview, setImageReview] = useState(userInfo.avatar);
  const [isWaiting, setIsWaiting] = useState(false);
  const inputFileRef = useRef();

  const initialValues = {
    fullName: userInfo.fullName,
    phoneNumber: userInfo.phoneNumber,
    email: userInfo.email,
    address: userInfo.address,
    avatar: userInfo.avatar,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Vui lòng nhập tên của bạn").min(2, "Tên phải ít nhất 2 ký tự"),
    phoneNumber: Yup.number()
      .typeError("SĐT phải là số")
      .min(10)
      .required("Vui lòng nhập SĐT của bạn"),
    email: Yup.string().required("Vui lòng nhập email của bạn"),
    address: Yup.string().required("Vui lòng nhập địa chỉ nhận hàng"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleChangeAvatar = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageReview(URL.createObjectURL(e.target.files[0]));
      formik.setFieldValue("avatar", e.target.files[0]);
    }
  };

  const handleFormSubmit = async (data) => {
    setIsWaiting(true);
    const account = await userService.update(userInfo.id, data);
    const action = updateUserInfo(account.data);
    dispatch(action);
    setIsWaiting(false);
  };

  return (
    <div className="account-content">
      <Helmet>
        <title>Cập nhật tài khoản</title>
        <meta name="description" content="Cập nhật tài khoản và quản lý đơn hàng" />
      </Helmet>
      <h4 className="pb-4 account-content-heading">Hồ sơ của tôi</h4>

      <div className="account-form-info py-3">
        <div className="form-info">
          {/* full name */}
          <div className="form-info-input">
            <InputFormik
              label="Tên đầy đủ: "
              name="fullName"
              type="text"
              className="input-address "
              placeholder="Tên của bạn"
              frmField={formik.getFieldProps("fullName")}
              errMessage={formik.touched.fullName && formik.errors.fullName}
            />
          </div>
          {/* phone number */}
          <div className="form-info-input">
            <InputFormik
              label="Số điện thoại:"
              name="phoneNumber"
              type="text"
              className="input-address "
              placeholder="SĐT của bạn"
              frmField={formik.getFieldProps("phoneNumber")}
              errMessage={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
          </div>
          {/* email */}
          <div className="form-info-input">
            <InputFormik
              label="Email:"
              name="email"
              type="text"
              className="input-address"
              placeholder="Email của bạn"
              frmField={formik.getFieldProps("email")}
              errMessage={formik.touched.email && formik.errors.email}
            />
          </div>
          {/* address */}
          <div className="form-info-input">
            <InputFormik
              label="Địa chỉ:"
              name="address"
              type="text"
              className="input-address"
              placeholder="Email của bạn"
              frmField={formik.getFieldProps("address")}
              errMessage={formik.touched.address && formik.errors.address}
            />
          </div>
          <div className="d-flex justify-content-center">
            <CustomButton
              type="submit"
              onClick={formik.handleSubmit}
              className="primary-btn big"
              disabled={!formik.isValid || !formik.dirty || isWaiting}
              isLoading={isWaiting}
            >
              Lưu
            </CustomButton>
          </div>
        </div>

        <div className="form-avatar">
          <img src={imageReview} alt="failed" />
          <button className="min-150 big" type="button" onClick={() => inputFileRef.current.click()}>
            Chọn avatar
            <input
              name="avatar"
              onChange={handleChangeAvatar}
              ref={inputFileRef}
              type="file"
              accept=".jpg, .png"
              className="d-none"
            />
          </button>
          <p>Định dạng: .JPG, .PNG</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
