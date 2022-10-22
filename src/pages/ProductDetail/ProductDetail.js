import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import HeroDetail from "../../Assets/image/hero-product.jpg";
import Hero from "../../components/Hero/Hero";
import Loading from "../../components/Loading/Loading";
import AddToCartForm from "../../components/Product/AddToCartForm";
import ProductSize from "../../components/Product/ProductSize";
import convertToVnd from "../../helpers/convertToVnd";
import { addToCart } from "../../redux/reducers/cartSlice";
import productService from "./../../services/productService";
import ImageDetails from "./ImageDetails";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const salePercent = Number(product.sale);
  const salePrice = product.price - (product.price * salePercent) / 100;
  const sizeList = [6, 7, 8, 9, 10, 11];
  let sizeSelect;

  useEffect(() => {
    window.scrollTo(0, 0);
    productService.get(id).then((res) => {
      setProduct(res.data);
      setIsLoading(false);
    });
  }, [id]);

  const handleAddToCart = (value) => {
    if (sizeSelect) {
      const quantity = value;

      const action = addToCart({
        id: product.id,
        product,
        salePrice,
        sizeSelect,
        quantity,
      });

      dispatch(action);
      toast.success("Thêm sản phẩm thành công!");
    } else {
      toast.error("Xin chọn kích cỡ!");
    }
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
          <Helmet>
            <title>{`Giày ${product.brand} ${product.name}`}</title>
            <meta
              name="description"
              content={`Chi tiết về Giày ${product.brand} ${product.name}`}
            />
          </Helmet>
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

                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    className="pe-3 pb-3"
                  ></div>

                  {/* product price */}
                  <div className="product-detail-price py-3 me-4">
                    <h1 className="detail-price-current">
                      {product.sale !== 0 ? convertToVnd(salePrice) : convertToVnd(product.price)}
                    </h1>
                    <p className="product-price px-2">
                      {product.sale !== 0 ? convertToVnd(product.price) : ""}
                    </p>
                    {product.sale !== 0 ? <p className="text-danger">{`-${product.sale}%`}</p> : ""}
                  </div>

                  {/* product size */}
                  <div className="product-detail-size py-3">
                    <p>Kích cỡ:</p>
                    <ProductSize sizeList={sizeList} onClick={handleSelectSize} />
                  </div>

                  {/* add to cart form */}

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
