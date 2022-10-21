import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomButton from "../../components/Buttons/CustomButton";
import Input from "../../components/Input/Input";
import { registerFailed, registerStart, registerSuccess } from "../../redux/reducers/authSlice";
import userService from "../../services/userService";

const Register = () => {
  const [user, setUser] = useState({});
  const [isWaiting, setIsWaiting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus()
  },[])

  const handleRegister = (e) => {
    e.preventDefault();
    setIsWaiting(true)

    dispatch(registerStart());

    userService.register(user).then((res) => {
    setIsWaiting(false)

      if (res.errorCode === 0) {
        console.log(res.data);
        dispatch(registerSuccess());
        navigate("/login");
        toast.success(res.message);
      } else {
        dispatch(registerFailed());
        toast.error(res.message);
      }
    });
  };

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className="wrapper-login row justify-content-center align-items-center m-0">
      <Helmet>
        <title>Đăng ký tài khoản</title>
        <meta
          name="description"
          content="Đăng ký tài khoản để nhận nhiều thông tin và ưu đãi mua hàng ở Sneaker"
        />
      </Helmet>
      <div className="container-login col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-12">
        <div className="bg-white rounded-4 my-5 px-5 py-5">
          <form className="mb-3" onSubmit={(e) => handleRegister(e)}>
            <div className="p-2 w-100 d-flex justify-content-around align-items-center">
              <h2 className="mode-register mb-4 fw-bold">Đăng ký</h2>
            </div>

            <div className="w-100">
              <Input
                inputRef={nameRef}
                onChange={(e) => handleChange(e)}
                name="fullName"
                type="text"
                id="fullName"
              >
                Nhập tên đầy đủ
              </Input>

              <Input onChange={(e) => handleChange(e)} name="email" type="email" id="email">
                Nhập email của bạn
              </Input>

              <Input
                onChange={(e) => handleChange(e)}
                name="password"
                type="password"
                id="password"
              >
                Nhập mật khẩu
              </Input>

              <Input onChange={(e) => handleChange(e)} name="phone" type="phone" id="phone">
                Nhập số điện thoại
              </Input>

              <Input onChange={(e) => handleChange(e)} name="address" type="text" id="address">
                Nhập địa chỉ
              </Input>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center my-4">
              <CustomButton
                type="submit"
                className="w-100 primary-btn rounded-btn-1 mb-3 big-100"
                onClick={(e) => handleRegister(e)}
                isLoading={isWaiting}
                disabled={isWaiting}
              >
                Đăng ký
              </CustomButton>

              <button
                type="button"
                className="w-100 secondary-btn rounded-btn-1 big-100"
                onClick={(e) => navigate("/home")}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
