import React from "react";

const PayMethod = ({ onClick }) => {
  let isPaid;

  const handleShipCod = (e) => {
    e.stopPropagation();
    document.querySelector(".select-method.active-payment")?.classList.remove("active-payment");
    document.getElementById("shipCod")?.classList.add("active-payment");
    isPaid = e.target.value;
    onClick(isPaid);
  };

  const handleOnlPayment = (e) => {
    e.stopPropagation();
    document.querySelector(".select-method.active-payment")?.classList.remove("active-payment");
    document.getElementById("onlPayment")?.classList.add("active-payment");
    isPaid = e.target.value;
    onClick(isPaid);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 heading-pay">
          <p className="heading-checkout">Phương thức thanh toán</p>
        </div>
        <div className="col-lg-12 mt-2">
          <button
            type="button"
            value={0}
            onClick={(e) => handleShipCod(e)}
            id="shipCod"
            className="select-method"
          >
            <i className="bi bi-truck mx-3 fs-1"></i>
            <p className="text-method m-0">THANH TOÁN TRỰC TIẾP KHI NHẬN HÀNG</p>
          </button>
          <button
            type="button"
            value={1}
            onClick={(e) => handleOnlPayment(e)}
            id="onlPayment"
            className="select-method mt-4"
          >
            <i className="bi bi-credit-card mx-3 fs-1"></i>
            <p className="text-method m-0">THANH TOÁN TRỰC TUYẾN</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayMethod;
