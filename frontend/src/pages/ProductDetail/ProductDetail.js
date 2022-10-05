import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeroDetail from "../../Assets/image/hero-product.jpg";
import Hero from "../../components/Hero/Hero";
import Loading from "../../components/Loading/Loading";
import AddToCartForm from "../../components/Product/AddToCartForm";
import ProductSize from "../../components/Product/ProductSize";
import { addToCart } from "../../redux/reducers/cartSlice";
import productService from "./../../services/productService";
import ImageDetails from "./ImageDetails";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const salePercent = Number(product.sale);
  const salePrice = product.price - (product.price * salePercent) / 100;
  const sizeList = [6, 7, 8, 9, 10, 11];
  let sizeSelect;
  let quantity;

  useEffect(() => {
    productService.get(id).then((res) => {
      setProduct(res.data);
      setIsLoading(false);
    });
  }, [id]);

  const handleAddToCart = (value) => {
    quantity = value;
    console.log(quantity);

    const action = addToCart({
      id: product.id,
      product,
      salePrice,
      sizeSelect,
      quantity,
    });

    dispatch(action);
  };

  const handleSelectSize = (value) => {
    sizeSelect = value;
    console.log(sizeSelect);
  };

  return (
    <>
      <Hero
        title="Chi tiết sản phẩm"
        subTitle="Những sản phẩm mới nhất trong cửa hàng"
        heroImg={HeroDetail}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="product-detail mt-3">
          <Container>
            <div className="breadcrumb">
              <Link to="/home">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to="/products">Sneaker</Link>
              <span className="mx-2">/</span>
              <Link to="/products">{product.brand}</Link>
              <span className="mx-2">/</span>
              <p className="breadcrumb-text-current">{product.name}</p>
            </div>
            <div className="product-detail-content">
              <Row>
                <Col lg className="product-detail-image">
                  <ImageDetails images={product.imageArr} />
                </Col>
                <Col lg className="product-detail-info">
                  <h6>{`Thương hiệu: ${product.brand}`}</h6>

                  <h1 className="product-detail-name pb-3 mt-2">{product.name}</h1>

                  {/* product price */}
                  <div className="product-detail-price py-3 me-4">
                    <h1 className="detail-price-current">
                      {product.sale !== 0
                        ? Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                            salePrice
                          )
                        : Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                            product.price
                          )}
                    </h1>
                    <p className="product-price px-2">
                      {product.sale !== 0
                        ? Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                            product.price
                          )
                        : ""}
                    </p>
                    {product.sale !== 0 ? <p className="text-danger">{`-${product.sale}%`}</p> : ""}
                  </div>

                  {/* product size */}
                  <div className="product-detail-size py-3">
                    <p>Kích cỡ:</p>
                    <ProductSize sizeList={sizeList} onClick={handleSelectSize} />
                  </div>

                  {/* add to cart form */}
                  {/* <form
                    name="quantity"
                    onSubmit={(e) => handleSubmitQuantity(e)}
                    className="product-quantity-form py-3"
                  >
                    <label htmlFor="">Số lượng:</label>
                    <div className="quantity-input-group my-3">
                      <button
                        type="button"
                        onClick={(e) => setQuantity(quantity - 1)}
                        disabled={quantity === 1}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <input
                        onChange={(e) => console.log(e.target.value)}
                        value={quantity}
                        className="product-quantity-value"
                        type="text"
                      ></input>
                      <button type="button" onClick={(e) => setQuantity(quantity + 1)}>
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>

                    <CustomizeButton
                      type="submit"
                      className="quantity-submit-btn primary-btn rounded-btn-1 big"
                    >
                      Chọn mua
                    </CustomizeButton> 
                  </form> */}

                  <AddToCartForm onClick={handleAddToCart} />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
