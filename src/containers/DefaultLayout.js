import React from "react";
import { Route, Routes } from "react-router-dom";
import { SearchProvider } from "../components/Product/SearchContext";
import Account from "../pages/Profile/Account";
import Profile from "../pages/Profile/Profile";
import ProfileOrder from "../pages/Profile/ProfileOrder";
import routes from "./../routes/routes";
import Footer from "./Footer";
import Header from "./Header";
import AllOrder from "../pages/Profile/AllOrder";
import PendingOrder from "../pages/Profile/PendingOrder";
import SuccessOrder from "../pages/Profile/SuccessOrder";
import CancelOrder from "../pages/Profile/CancelOrder";

const DefaultLayout = () => {
  return (
    <SearchProvider>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />}>
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<ProfileOrder />}>
            <Route path="all" element={<AllOrder />} />
            <Route path="pending" element={<PendingOrder />} />
            <Route path="success" element={<SuccessOrder />} />
            <Route path="cancel" element={<CancelOrder />} />
          </Route>
        </Route>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component}></Route>
        ))}
      </Routes>
      <Footer />
    </SearchProvider>
  );
};

export default DefaultLayout;
