import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import heroSneaker from "../../Assets/image/hero-product.jpg";
import Hero from "../../components/Hero/Hero";
import ProductList from "../../components/Product/ProductList";
import { SearchContext } from "../../components/Product/SearchContext";
import Tabs from "../../components/Tabs/Tabs";
import Title from "../../components/Title/Titile";
import SkeletonList from "./../../components/Product/SkeletonList";
import productService from "./../../services/productService";
import "./products.css";

const Products = () => {
  const contextSearch = useContext(SearchContext);
  const [currentTab, setCurrentTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [pagingItems, setPagingItems] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, price, brand, category, contextSearch.search]);

  const loadData = async () => {
    //  load product list
    const { data, pagination } = await productService.getPaging(
      page,
      limit,
      brand,
      category,
      contextSearch.search,
      price
    );
    setProductList(data);
    setPage(pagination.currentPage);
    setLoading(false);

    // set pagination
    let items = [
      <Pagination.First key="first" onClick={() => setPage(1)} disabled={page === 1} />,
      <Pagination.Prev key="prev" onClick={() => setPage(page - 1)} disabled={page === 1} />,
    ];

    for (let i = 1; i < pagination.totalPages + 1; i++) {
      items.push(
        <Pagination.Item key={i.toString()} active={i === page} onClick={() => setPage(i)}>
          {i}
        </Pagination.Item>
      );
    }
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => setPage(page + 1)}
        disabled={page === pagination.totalPages}
      />
    );
    items.push(
      <Pagination.Last
        key="last"
        onClick={() => setPage(pagination.totalPages)}
        disabled={page === pagination.totalPages}
      />
    );

    setPagingItems(items);
  };

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
    setPrice(e.target.value);
  };

  const handleChangeLimit = (e) => {
    setPage(1);
    setLimit(e.target.value);
  };

  const handleCategory = (e) => {
    setCurrentTab("");
    setPage(1);
    setPrice("");
    setCategory(e.target.value);
  };

  const handleChangeBrand = (e) => {
    setCurrentTab("");
    setPage(1);
    setPrice("");
    setBrand(e.target.value);
  };

  return (
    <>
      <Hero
        title="Sneaker"
        subTitle="Những sản phẩm mới nhất trong cửa hàng"
        heroImg={heroSneaker}
      />

      <div className="container">
        <div className="row">
          <Title page="Sneaker" />

          <div className="product-content col-12 ">
            <div className="product-sidebar d-none d-lg-block">
              <div className="sidebar-content d-none d-lg-block ">
                <div className="sidebar-product-category px-3">
                  <h5 className="sidebar-heading py-3">DANH MỤC</h5>
                  <button
                    type="button"
                    value={1}
                    onClick={(e) => handleCategory(e)}
                    className="sidebar-category-item"
                  >
                    Giày Nam
                  </button>
                  <button
                    value={2}
                    onClick={(e) => handleCategory(e)}
                    className="sidebar-category-item"
                  >
                    Giày Nữ
                  </button>
                  <button
                    value={3}
                    onClick={(e) => handleCategory(e)}
                    className="sidebar-category-item"
                  >
                    Giày Trẻ Em
                  </button>
                  <button className="sidebar-category-item">Giày Thể Thao</button>
                  <button className="sidebar-category-item">Giày Tây</button>
                </div>
                <div className="sidebar-product-brand px-3">
                  <h5 className="sidebar-heading py-3">THƯƠNG HIỆU</h5>
                  <button
                    value="NIKE"
                    onClick={(e) => handleChangeBrand(e)}
                    className="sidebar-brand-item"
                  >
                    Nike
                  </button>
                  <button
                    value="ADIDAS"
                    onClick={(e) => handleChangeBrand(e)}
                    className="sidebar-brand-item"
                  >
                    Adidas
                  </button>
                  <p className="sidebar-brand-item">Converse</p>
                  <p className="sidebar-brand-item">New Balance</p>
                </div>
              </div>
            </div>
            <div className="list-product-main">
              {/* Product sorter */}
              <div className="product-sorter">
                <Tabs onClick={(e) => handleTabClick(e)} currentTab={currentTab} />

                {/* paging with page size */}
                <div className="paging-limit">
                  <label>Số sản phẩm hiển thị:</label>
                  <select value={limit} onChange={handleChangeLimit} className="">
                    <option value="0">{"---"}</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              {/* Product List */}
              <div className="row"></div>
              {loading ? (
                <SkeletonList length={16} />
              ) : (
                <div className="product-list">
                  <ProductList data={productList} />
                </div>
              )}
              {/* Product pagination */}
              <Pagination className="d-flex justify-content-center my-3">{pagingItems}</Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
