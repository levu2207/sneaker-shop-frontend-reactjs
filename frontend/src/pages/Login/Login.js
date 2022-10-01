import React, { useState } from "react";
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
        toast.success("Login Successfull");
        navigate("/home");
      } else {
        toast.error("Login failed");
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
      <div className="container-login col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-10">
        <div className=" bg-white rounded-4 my-5 px-5 py-5">
          <form className="mb-3" onSubmit={(e) => handleLogin(e)}>
            <div className="p-2 w-100 d-flex justify-content-around align-items-center">
              <h2 className="mode-login mb-4 fw-bold">Login</h2>
            </div>

            <div className="w-100">
              <Input name="email" type="email" id="email" onChange={(e) => handleChange(e)}>
                Your Email
              </Input>

              <Input
                name="password"
                type="password"
                id="password"
                onChange={(e) => handleChange(e)}
              >
                Your Password
              </Input>
            </div>

            <Link to="/reset-password" className="d-flex justify-content-end">
              Forgot password?
            </Link>

            <div className="d-flex flex-column justify-content-center align-items-center my-4">
              <button
                type="submit"
                className="w-100 primary-btn rounded-btn-1 mb-3"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>

              <button
                type="button"
                className="w-100 secondary-btn rounded-btn-1"
                onClick={(e) => navigate("/home")}
              >
                Cancel
              </button>
            </div>
          </form>

          {/* login link google */}
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <p>Or Login Using</p>
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

            <p className="fs-6">Or Register Using</p>
            <p className="mode-tranfer mt-3 fs-5" onClick={(e) => navigate("/register")}>
              Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
