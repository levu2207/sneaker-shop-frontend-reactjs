import queryString from "query-string";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
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
  window.onpopstate = () => {
    navigate("/");
  };

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  const [currentTab, setCurrentTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const contextSearch = useContext(SearchContext);
  const [page, setPage] = useState(Number.parseInt(queryParams.page) || 1);
  const [limit, setLimit] = useState(Number.parseInt(queryParams.limit) || 8);
  const [price, setPrice] = useState(queryParams.price || "");
  const [brand, setBrand] = useState(queryParams.brand || "");
  const [category, setCategory] = useState(queryParams.category || "");
  const [pagingItems, setPagingItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, price, brand, category, contextSearch.search]);

  useEffect(() => {
    location.search = queryString.stringify({
      page,
      limit,
      brand,
      category,
      search: contextSearch.search,
      price,
    });

    navigate(`/products?${location.search}`, { replace: true });

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
    if (e.target.name === "all") {
      setPage(1);
      setLimit(8);
      setPrice("");
      setBrand("");
      setCategory("");
    }
  };

  const handleChangeLimit = (e) => {
    setPage(1);
    setLimit(e.target.value);
  };

  const handleCategory = (e) => {
    setCurrentTab("");
    setPage(1);
    setPrice("");
    setBrand("");
    setCategory(e.target.value);
    document.querySelector(".sidebar-category-item.active")?.classList.remove("active");
    document.querySelector(".sidebar-brand-item.active")?.classList.remove("active");
    e.target.classList.add("active");
  };

  const handleChangeBrand = (e) => {
    setCurrentTab("");
    setPage(1);
    setPrice("");
    setCategory("");
    setBrand(e.target.value);
    document.querySelector(".sidebar-category-item.active")?.classList.remove("active");
    document.querySelector(".sidebar-brand-item.active")?.classList.remove("active");
    e.target.classList.add("active");
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
            <div className="product-sidebar d-lg-block">
              <div className="sidebar-content  d-lg-block ">
                <div className="sidebar-product-category px-3">
                  <h5 className="sidebar-heading py-3">DANH MỤC</h5>
                  <button
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
                  <button
                    value={4}
                    onClick={(e) => handleCategory(e)}
                    className="sidebar-category-item"
                  >
                    Giày Thể Thao
                  </button>
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
                  <button
                    value="CONVERSE"
                    onClick={(e) => handleChangeBrand(e)}
                    className="sidebar-brand-item"
                  >
                    Converse
                  </button>
                  <button
                    value="NEW BALANCE"
                    onClick={(e) => handleChangeBrand(e)}
                    className="sidebar-brand-item"
                  >
                    New Balance
                  </button>

                  <button
                    value="VANS"
                    onClick={(e) => handleChangeBrand(e)}
                    className="sidebar-brand-item"
                  >
                    Vans
                  </button>

                  <button
                    value="REEBOK"
                    onClick={(e) => handleChangeBrand(e)}
                    className="sidebar-brand-item"
                  >
                    Reebok
                  </button>
                </div>
              </div>
            </div>

            <div className="list-product-main">
              {/* Product sorter */}
              <div className="product-sorter row mx-3">
                <div className="col-12 col-lg-9">
                  <Tabs onClick={(e) => handleTabClick(e)} currentTab={currentTab} />
                </div>

                {/* paging with page size */}
                <div className="paging-limit col-12 col-lg-3">
                  <label>Số sản phẩm hiển thị:</label>
                  <select value={limit} onChange={handleChangeLimit} className="">
                    <option value="8">8</option>
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
              {productList.length > 0 ? (
                <Pagination className="d-flex justify-content-center my-3">
                  {pagingItems}
                </Pagination>
              ) : (
                <div className="d-flex justify-content-center mt-5">
                  <h5>Hiện tại chưa có sản phẩm thuộc danh mục này</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
