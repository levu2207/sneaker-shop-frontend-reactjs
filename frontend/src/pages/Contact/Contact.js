import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Contact.css"
import heroContact from "../../Assets/image/hero-contact.jpg" 
import Title from './../../components/Title/Titile';
import CustomizeButton from './../../components/Buttons/CustomizeButton';

const Contact = () => {
  return (
    <>
      <Hero
        title="Liên Hệ"
        subTitle="Liên hệ với chúng tôi"
        heroImg={heroContact}
      />
      <div className="container">
        <div className="row">
          <Title page="Liên Hệ" />
        </div>
        <div className="info-contact mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 mr-3">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="info-form m-0">Thông tin</p>
                  </div>
                  <div className="col-lg-12 pb-4 mt-4 border border-top-0 border-end-0 border-start-0">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
                        <a href="/">
                          <i className="bi bi-pin-map-fill" />
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-9 d-flex justify-content-center align-items-center">
                        <a className="text-location" href="/">
                          123 Bach Dang, Hai Ba Trung, Ha Noi, VN
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 pb-4 mt-4 border border-top-0 border-end-0 border-start-0">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
                        <a href="/">
                          <i className="bi bi-telephone-fill" />
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-9 j-center">
                        <a className="text-location" href="/">
                          Mobile: (+84) 034.557.50**
                        </a>
                        <a className="text-location" href="/">
                          Hotline: 1900.8668
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 pb-4 mt-4">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
                        <a href="/">
                          <i className="bi bi-envelope-fill" />
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-9 d-flex justify-content-center align-items-center">
                        <a className="text-location" href="/">
                          123 Bach Dang, Hai Ba Trung, Ha Noi, VN
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="info-form m-0">Nội dung liên hệ</p>
                    </div>
                    <div className="form-info">
                      <div className="row">
                        <div className="col-lg-12">
                          <form className="form-contact">
                            <div className="form-info-contact mt-4">
                              <label htmlFor="name-contact" className="mb-2">
                                Họ tên
                              </label>
                              <input
                                id="name-contact"
                                type="text"
                                className="value-contact d-block w-100 p-3"
                              />
                            </div>
                            <label className="contact-help" />
                            <div className="form-info-contact mt-1">
                              <label htmlFor="name-contact1" className="mb-2">
                                Email
                              </label>
                              <input
                                id="name-contact1"
                                type="email"
                                className="value-contact d-block w-100 p-3"
                              />
                            </div>
                            <label className="contact-help" />
                            <div className="form-info-contact mt-2">
                              <label htmlFor="name-contact2" className="mb-1">
                                Tiêu đề
                              </label>
                              <input
                                id="name-contact2"
                                type="text"
                                className="value-contact d-block w-100 p-3"
                              />
                            </div>
                            <label className="contact-help" />
                            <div className="form-info-contact mt-1">
                              <label htmlFor="name-contact3" className="mb-2">
                                Nội dung
                              </label>
                              <textarea
                                id="name-contact3"
                                type="text"
                                className="value-contact d-block w-100 p-3"
                                cols={30}
                                rows={10}
                                placeholder="Nhập nội dung tin nhắn"
                                defaultValue={""}
                              />
                            </div>
                            <label className="contact-help" />
                            <div className="row">
                              <div
                                className="
                                          col-lg-12
                                          mt-3
                                          d-flex
                                          justify-content-center
                                          align-items-center
                                        "
                              >
                                <CustomizeButton
                                  href="/"
                                  className="secondary-btn
                                            sub-out-product
                                            btn-contact
                                            d-flex
                                            justify-content-center
                                            align-items-center
                                            text-center
                                          "
                                >
                                  Gửi
                                </CustomizeButton>
                              </div>
                            </div>
                          </form>
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

export default Contact;
