import React from "react";
import "../Css/Responsive.css";
import Footer from "../Home/Footer";
import { Head } from "../Home/Head";
import Category_page from "./Categoryhome/Category_page";
import Cate_search from "../Page_category/Category_search/Cate_search";
import { Product } from "../Home/Product";
import Product_cate from "./Product_cate/Product_cate";
import Category_header from "./Category_header/Header_cate";

const Category_home = () => {
  return (
    <>
      <Head />
      <Category_header />
      <Cate_search/>
      <Product_cate/>
      <Category_page />
      <Footer />
    </>
  );
};

export default Category_home;
