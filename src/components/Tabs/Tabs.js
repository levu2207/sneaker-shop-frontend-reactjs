import React from "react";
import "./tabs.css";

const Tabs = (props) => {
  const { onClick, currentTab } = props;
  const tabs = [
    {
      id: 1,
      tabTitle: "Tất cả",
      value: "",
      name: "all",
    },
    {
      id: 2,
      tabTitle: "Hàng Mới",
      value: "",
      name: "new",
    },
    {
      id: 3,
      tabTitle: "Giá Thấp Đến Cao",
      value: "ASC",
      name: "priceASC",
    },
    {
      id: 4,
      tabTitle: "Giá Cao Đến Thấp",
      value: "DESC",
      name: "priceDESC",
    },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          name={tab.name}
          key={tab.id}
          id={tab.id}
          value={tab.value}
          disabled={currentTab === `${tab.id}`}
          onClick={onClick}
        >
          {tab.tabTitle}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
