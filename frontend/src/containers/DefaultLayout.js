import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import routes from "./../routes/routes";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component}></Route>
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default DefaultLayout;
