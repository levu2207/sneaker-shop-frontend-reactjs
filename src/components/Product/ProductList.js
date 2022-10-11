import React from "react";
import Product from "./Product";

const ProductList = ({ data }) => {
  return (
    <div>
      <div className="row justify-content-center">
        {data.map((product) => (
          <div key={product.id} className="col-10 col-sm-6 col-lg-4 col-xl-3 px-3">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
