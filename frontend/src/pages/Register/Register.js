import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import userService from "../../services/userService";
import { toast } from "react-toastify";
import { registerFailed, registerStart, registerSuccess } from "../../redux/reducers/authSlice";

const Register = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(registerStart());

    userService.register(user).then((res) => {
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
    <div className="wrapper-login row justify-content-center align-items-center">
      <div className="container-login col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-7 col-10">
        <div className="bg-white rounded-4 my-5 px-5 py-5">
          <form className="mb-3" onSubmit={(e) => handleRegister(e)}>
            <div className="p-2 w-100 d-flex justify-content-around align-items-center">
              <h2 className="mode-register mb-4 fw-bold">Register</h2>
            </div>

            <div className="w-100">
              <Input onChange={(e) => handleChange(e)} name="fullName" type="text" id="fullName">
                Your Full Name
              </Input>

              <Input onChange={(e) => handleChange(e)} name="email" type="email" id="email">
                Your Email
              </Input>

              <Input
                onChange={(e) => handleChange(e)}
                name="password"
                type="password"
                id="password"
              >
                Your Password
              </Input>

              <Input onChange={(e) => handleChange(e)} name="phone" type="phone" id="phone">
                Your Phone Number
              </Input>

              <Input onChange={(e) => handleChange(e)} name="address" type="text" id="address">
                Your Address
              </Input>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center my-4">
              <button
                type="submit"
                className="w-100 primary-btn rounded-btn-1 mb-3"
                onClick={(e) => handleRegister(e)}
              >
                Register
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
        </div>
      </div>
    </div>
  );
};

export default Register;
