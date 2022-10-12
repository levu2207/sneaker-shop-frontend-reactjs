import React from "react";
import "./tabs.css";

const Tabs = (props) => {
  const { onClick, currentTab } = props;
  const tabs = [
    {
      id: 1,
      tabTitle: "Bán Chạy",
      value: "",
    },
    {
      id: 2,
      tabTitle: "Hàng Mới",
      value: "",
    },
    {
      id: 3,
      tabTitle: "Giá Thấp Đến Cao",
      value: "ASC",
    },
    {
      id: 4,
      tabTitle: "Giá Cao Đến Thấp",
      value: "DESC",
    },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
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
