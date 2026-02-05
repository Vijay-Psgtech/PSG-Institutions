import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./layouts/TopHeader";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
