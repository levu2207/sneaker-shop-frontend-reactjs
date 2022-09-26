import React from "react";
import Hero from "../../components/Hero/Hero";
import HeroDetail from "../../Assets/image/hero-product.jpg";
import "./ProductDetail.css"
import CustomizeButton from './../../components/Buttons/CustomizeButton';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero
        title="Chi tiết sản phẩm"
        subTitle="Những sản phẩm mới nhất trong cửa hàng"
        heroImg={HeroDetail}
      />

      <div className="link-go mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="link-select w-100">
                <a className="text-link" href="/home">
                  Trang chủ
                </a>
                <span className="me-2 ms-2">/</span>
                <a href="/" className="text-link m-0">
                  Chi tiết sản phẩm
                </a>
                <span className="me-2 ms-2">/</span>
                <a href="/" className="text-link heading-render m-0">
                  NIKE
                </a>
                <span className="me-2 ms-2">/</span>
                <p className="text-link1 detail-render m-0">AIR MAX 270</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-detail mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-start align-items-center flex-column">
              <img
                src="https://sneaker97.herokuapp.com/image/img/nike-air-max-deatail2.jpg"
                alt="Fail"
              />
            </div>

            <div className="col-lg-6 info-detail mt-2">
              <div className="sale d-flex justify-content-center align align-items-center ">
                <p className="text-sale text-sale-detail m-0">10%</p>
              </div>
              <p className="text-name-detail mt-3">AIR MAX 270</p>
              <div className="price-detail d-flex justify-content-start align-items-center">
                <p className="text-price-detail m-0">1.755.000đ</p>
                <p className="sub-price-detail m-0 ms-2">1.950.000đ</p>
              </div>
              <p className="code-product mt-3">MÃ SẢN PHẨM: DJ9880-400</p>
              <div className="item-size-detail mt-4 mb-2 d-flex justify-content-between align-items-center">
                <p className="select-size-detail m-0">Chọn size</p>
                <a
                  title="Bảng Size"
                  href="https://www.vascara.com/uploads/web/900/noi-dung/HUONG-DAN-CHON-SIZE-GIAY_DESK_915X600.png"
                  className="sub-size"
                > 
                  Hướng dẫn chọn size
                </a>
              </div>
              <div className="item-size-detail d-flex justify-content-between align-items-center">
                <div className="link-size-detail d-flex justify-content-center align-items-center">
                  <p className="text-size-detail m-0">41</p>
                </div>
                <div className="link-size-detail d-flex justify-content-center align-items-center">
                  <p className="text-size-detail m-0">42</p>
                </div>
                <div className="link-size-detail d-flex justify-content-center align-items-center">
                  <p className="text-size-detail m-0">42.5</p>
                </div>
                <div className="link-size-detail d-flex justify-content-center align-items-center">
                  <p className="text-size-detail m-0">43</p>
                </div>
                <div className="link-size-detail d-flex justify-content-center align-items-center">
                  <p className="text-size-detail m-0">43.5</p>
                </div>
                <div className="link-size-detail d-flex justify-content-center align-items-center">
                  <p className="text-size-detail m-0">44</p>
                </div>
              </div>
              <div className="add-detail d-flex justify-content-start align-items-center">
              <CustomizeButton
                  onClick={() => navigate("/products")}
                  className="sub-out-product2 primary-btn big rounded-btn-3 mt-4 "
                >
                  Thêm vào giỏ hàng
                </CustomizeButton>
                <a
                  className="sub-heart mt-4 ms-2 d-flex justify-content-center align-items-center"
                  href="/"
                >
                  <i className="bi bi-heart-fill" />
                </a>
              </div>
              <div className="rating w-100 mt-4 d-flex justify-content-start align-items-center">
                <div className="rate d-flex justify-content-center align-items-center">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill ms-2" />
                  <i className="bi bi-star-fill ms-2" />
                  <i className="bi bi-star-fill ms-2" />
                  <i className="bi bi-star-fill ms-2" />
                  <p className="text-report m-0 ms-3">/ 4 Đánh giá</p>
                </div>
              </div>
              <div
                className="accordion accordion-flush mt-4"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Chính sách giao hàng
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-baoquan m-0 mb-2">
                        1. SNEAKER. CÓ GIAO HÀNG TẬN NƠI CHO TÔI KHÔNG?
                      </p>
                      <p className="text-baohanh">
                        Sneaker. giao hàng trên toàn quốc và nhận thanh toán
                        ngày tại nhà cho khách hàng dễ dàng mua sắm.
                      </p>
                      <p className="text-baoquan pt-4 mb-2">
                        2. TÔI Ở TỈNH LẺ THÌ NHẬN HÀNG TRONG BAO LÂU?
                      </p>
                      <p className="text-baohanh">
                        Đối với tỉnh lẻ SNEAKER. sẽ giao hàng trong từ 2 – 4
                        ngày làm việc tùy vị trí gần trung tâm tỉnh hay xa trung
                        tâm.
                      </p>
                      <p className="text-baoquan pt-4 mb-2">
                        3. TÔI MUỐN HỦY ĐƠN HÀNG THÌ LÀM SAO?
                      </p>
                      <p className="text-baohanh">
                        Khách hàng có thể hủy đơn khi đơn hàng chưa được giao
                        đi. Liên hệ: 098.8888.888 để hủy hàng.
                      </p>
                      <p className="text-baoquan pt-4 mb-2">
                        4. TÔI THANH TOÁN THẾ NÀO KHI ĐẶT HÀNG XONG?
                      </p>
                      <p className="text-baohanh">
                        Khách hàng có thể chọn chuyển khoản trước hoặc thanh
                        toán khi nhận hàng đều được.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed  ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Hướng dẫn bảo quản
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-baoquan">
                        1. Dùng baking soda để vệ sinh giày sneaker
                      </p>
                      <p className="text-baohanh">
                        Bạn có thể dùng baking soda kết hợp với giấm ăn theo tỉ
                        lệ 2:3 để khử mùi hôi, vết bẩn và trả lại màu nguyên
                        thủy cho những đôi giày sneaker nhất là sneaker màu
                        trắng. Tẩy sạch những vết bẩn dính trên đế giày bằng kem
                        đánh răng{" "}
                      </p>
                      <img
                        src="./image/img-banner/ve-sinh-giay-sneaker-3.jpg"
                        alt="Fail"
                      />
                      <p className="text-baoquan mt-5">
                        {" "}
                        2. Khi không đi hãy mang giày vào trong hộp
                      </p>
                      <p className="text-baohanh">
                        Đặt sneaker vào hộp sẽ loại bỏ được bụi bám đồng thời
                        bảo vệ giày khỏi sự tấn công của ẩm mốc làm cho giày cũ
                        hơn.
                      </p>
                      <img
                        src="./image/img-banner/ve-sinh-giay-sneaker12.jpg"
                        alt="Fail"
                      />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header " id="flush-headingThree">
                    <button
                      className="accordion-button collapsed ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Chính sách đổi trả
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="text-baoquan m-0 mb-2">
                        1. QUY ĐỊNH ĐỔI HÀNG CỦA XSHOP NHƯ THẾ NÀO?
                      </p>
                      <p className="text-baohanh">
                        Khách hàng có thể tham khảo chi tiết và đầy đủ quy định
                        đổi hàng <a href="/">tại đây</a>.
                      </p>
                      <p className="text-baoquan pt-4 mb-2">
                        2. TÔI BỊ MẤT HÓA ĐƠN CÓ ĐỔI ĐƯỢC HÀNG KHÔNG?
                      </p>
                      <p className="text-baohanh">
                        Khách hàng sẽ không được đổi hàng nếu bị mất hóa đơn mua
                        hàng từ SNEAKER.
                      </p>
                      <p className="text-baoquan pt-4 mb-2">
                        3. TÔI CÓ THỂ ĐỔI HÀNG TRONG BAO LÂU?
                      </p>
                      <p className="text-baohanh">
                        Khách hàng được đổi hàng trong 30 ngày kể từ ngày mua
                        hàng. Vui lòng mang theo hóa đơn để được đổi hàng.
                      </p>
                      <p className="text-baoquan pt-4 mb-2">
                        4. TÔI SẼ NHẬN LẠI SẢN PHẨM ĐỔI TRONG BAO LÂU?
                      </p>
                      <p className="text-baohanh">
                        Khách hàng sẽ nhận được phản hồi chi tiết về thời gian
                        nhận lại từ bộ phận CSKH.
                      </p>
                      <p className="text-baoquan pt-4 mb-2">
                        4. TÔI CÓ THỂ ĐỔI HÀNG TRONG THỜI GIAN NÀO?
                      </p>
                      <p className="text-baohanh">
                        Khách hàng có thể đổi hàng trong thời gian từ 12h-21h
                        tất cả các ngày trong tuần.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
