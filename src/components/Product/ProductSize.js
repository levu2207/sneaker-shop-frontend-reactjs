import React from "react";

const ProductSize = ({ sizeList, onClick }) => {
  const handleClick = (e) => {
    document.querySelector(".size-item.active-size")?.classList.remove("active-size");
    e.target.classList.add("active-size");
    onClick(e.target.value);
  };

  return (
    <div className="size-list">
      {sizeList.map((size) => (
        <button key={size} value={size} onClick={(e) => handleClick(e)} className="size-item">
          {size}
        </button>
      ))}
    </div>
  );
};

export default ProductSize;
