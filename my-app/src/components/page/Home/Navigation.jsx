import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div class="navigation">
        <div class="grid wide">
          <div class="rower">
            <div class="col l-12 c-12 m-12">
              <div class="navigation-content">
                <div class="navigation-slider">
                  <NavLink  strict to="/Category_home" class="navigation-item" > 
                    <p>Thịt, rau củ&nbsp;&nbsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Bách Hóa&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Nhà Cửa&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Thiết Bị Số&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Điện Thoại&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                   <p> Mẹ & Bé&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Làm Đẹp&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Gia Dụng&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Thời trang nữ&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Thời trang nam&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Giày nữ&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                   <p> Túi nữ&emsp;</p>
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    <p>Giày nam&emsp;</p>
                  </NavLink>

                  {/* <NavLink  strict to="/Category_home" class="navigation-item">
                    Giày nữ
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    Túi nam
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    Balo & Vali
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    Phụ kiện
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    Đồng hồ
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    Laptop
                  </NavLink>
                  <NavLink  strict to="/Category_home" class="navigation-item">
                    Quốc Tế
                  </NavLink> */}
                </div>
                <div class="prev-navigation">
                  <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                </div>
                <div class="next-navigation">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
