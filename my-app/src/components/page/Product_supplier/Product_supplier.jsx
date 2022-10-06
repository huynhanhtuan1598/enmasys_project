import React from "react";
import ShopProduct_detail from "./Header_shop/ShopProduct_detail";
import Product_list from "./Product_list_shop/Product_list";
import  { Head } from "../Home/Head";
import Footer from "../Home/Footer";


export const Product_supplier = () => {
  return (
    <>
    <Head/>
      <ShopProduct_detail/>
      <Product_list/>
      <Footer/>
    </>
  );
};
export default Product_supplier;