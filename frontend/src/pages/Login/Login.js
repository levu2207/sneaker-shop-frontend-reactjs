import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomizeButton from "../../components/Buttons/CustomizeButton";
import Input from "../../components/Input/Input";
import "./login.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(false);

  const handleModeLogin = () => {
    setMode(true);
  };

  const handleModeRegister = () => {
    setMode(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <>
      <i className="bi bi-person-circle" title="Đăng nhập/Đăng ký" onClick={handleShow}></i>

      {mode && (
        <Modal
          animation={false}
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <div className="modal-login-container bg-white rounded-4">
            <div className="mx-5 my-2">
              <form action="" className="mb-3" onSubmit={(e) => handleLogin(e)}>
                <div className="p-2 w-100 d-flex justify-content-around align-items-center">
                  <h4 className="mode-login">Đăng nhập</h4>
                  <h5 className="mode-tranfer" onClick={handleModeRegister}>
                    Đăng ký
                  </h5>
                </div>

                <div className="">
                  <Input type="email" id="email">
                    Your Email
                  </Input>

                  <Input type="email" id="email">
                    Your Password
                  </Input>
                </div>

                <div className="d-flex justify-content-center">
                  <CustomizeButton
                    type="button"
                    className="secondary-btn me-3"
                    onClick={handleClose}
                  >
                    Cancel
                  </CustomizeButton>
                  <CustomizeButton
                    type="submit"
                    className="primary-btn"
                    onClick={(e) => handleLogin(e)}
                  >
                    Đăng nhập
                  </CustomizeButton>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}

      {!mode && (
        <Modal
          animation={false}
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <div className="modal-login-container bg-white rounded-4">
            <div className=" mx-5 my-2">
              <form action="" className="mb-3" onSubmit={(e) => handleLogin(e)}>
                <div className="p-2 w-100 d-flex justify-content-around align-items-center">
                  <h5 className="mode-tranfer" onClick={handleModeLogin}>
                    Đăng nhập
                  </h5>
                  <h4 className="mode-register">Đăng ký</h4>
                </div>

                <div className="">
                  <Input type="email" id="email">
                    Your Email
                  </Input>

                  <Input type="password" id="password">
                    Your Password
                  </Input>

                  <Input type="retypePassword" id="retypePassword">
                    Retype Your Password
                  </Input>
                </div>

                <div className="d-flex justify-content-center">
                  <CustomizeButton
                    type="button"
                    className="secondary-btn me-3"
                    onClick={handleClose}
                  >
                    Cancel
                  </CustomizeButton>
                  <CustomizeButton
                    type="submit"
                    className="primary-btn"
                    onClick={(e) => handleLogin(e)}
                  >
                    Đăng ký
                  </CustomizeButton>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Login;
