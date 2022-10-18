import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input/Input";
import { login } from "../../redux/reducers/authSlice";
import userService from "../../services/userService";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    userService.login(user).then((res) => {
      if (res.errorCode === 0) {
        // save user info
        dispatch(
          login({
            token: res.data.accessToken,
            userInfo: res.data,
          })
        );
        toast.success("Đăng nhập thành công");
        navigate("/home");
      } else {
        toast.error("Đăng nhập thất bại");
      }
    });
  };

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className="wrapper-login row justify-content-center align-items-center">
      <Helmet>
        <title>Đăng nhập tài khoản</title>
        <meta
          name="description"
          content="SALE off lên tới 70%. Uy Tín nhiều năm trên thị trường. Bounty Sneakers chuyên cung cấp Giày Sneaker Thể Thao Adidas, 
          Nike nam nữ Chính Hãng 100%. Đổi trả miễn phí."
        />
      </Helmet>
      <div className="container-login col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-12">
        <div className=" bg-white rounded-4 my-5 px-5 py-5">
          <form className="mb-3" onSubmit={(e) => handleLogin(e)}>
            <div className="p-2 w-100 d-flex justify-content-around align-items-center">
              <h2 className="mode-login mb-4 fw-bold">Đăng nhập</h2>
            </div>

            <div className="w-100">
              <Input name="email" type="email" id="email" onChange={(e) => handleChange(e)}>
                Nhập mail của bạn
              </Input>

              <Input
                name="password"
                type="password"
                id="password"
                onChange={(e) => handleChange(e)}
              >
                Nhập password
              </Input>
            </div>

            <Link to="/reset-password" className="d-flex justify-content-end">
              Quên mật khẩu
            </Link>

            <div className="d-flex flex-column justify-content-center align-items-center my-4">
              <button
                type="submit"
                className="w-100 primary-btn rounded-btn-1 mb-3 big-100"
                onClick={(e) => handleLogin(e)}
              >
                Đăng nhập
              </button>

              <button
                type="button"
                className="w-100 secondary-btn rounded-btn-1 big-100"
                onClick={(e) => navigate("/home")}
              >
                Hủy
              </button>
            </div>
          </form>

          {/* login link google */}
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <p>hoặc đăng nhập với</p>
            <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
              <Link to="/" className="login-social-item social-facebook">
                <i className="bi bi-facebook"></i>
              </Link>

              <Link to="/" className="login-social-item mx-3 social-google">
                <i className="bi bi-google"></i>
              </Link>

              <Link to="/" className="login-social-item social-twitter">
                <i className="bi bi-twitter"></i>
              </Link>
            </div>

            <p className="fs-6">Nếu bạn chưa có tài khoản</p>
            <p className="mode-tranfer mt-3 fs-5" onClick={(e) => navigate("/register")}>
              Đăng ký
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
