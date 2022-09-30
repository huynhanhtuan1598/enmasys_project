import React from "react";
import logo from "../../img/enmasys.png";
import searchs from "../../img/search.png";
import user from "../../img/user.png";
import carts from "../../img/cart.png";


export const Head = () => {
  return (
    <div class="body">
      <div class="header">
        <div class="container">
          <div class="d-flex align-items-center mt-4">
            <div class="d-flex align-items-center">
              <img src={logo} className="logo" />
            </div>
            <div class="wrap-navbar-input">
              <div class="wrap-search">
                <input
                  type="text"
                  class="form-control"
                  placeholder=" Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
                />
                <div class="wrap-icon-s">
                  {/* <!-- <img class="icon-media" src="assets/search.png" alt="" /> --> */}
                  <img src={searchs} className="searchs" />
                </div>
              </div>
              <div class="under-input d-flex mt-2">
                <span class="mr-3">trái cây</span>
                <span class="mr-3">thịt, trứng</span>
                <span class="mr-3">rau củ quả</span>
                <span class="mr-3">sửa, bơ, phô mai </span>
                <span class="mr-3">hải sản </span>
                <span class="mr-3">gạo, mì ăn liền</span>
                <span class="mr-3">đồ uống, bia rượu</span>
                <span class="mr-3">bánh kẹo</span>
              </div>
            </div>
            <div className="icon-shop">
              <img src={user} className="user" />
            </div>
            <div class="user__login">
              <span class="register__header">Đăng Nhập / Đăng Ký</span>
              <span class="account__header">Tài khoản</span>
            </div>
            <div class="cart-header">
            <img src={carts} className="carts" />
              <span class="cart-header-o">0</span>
              <span class="cart-haeder-name">Giỏ Hàng</span>
            </div>
          </div>
        </div>
      </div>



      
    </div>
  );
};
