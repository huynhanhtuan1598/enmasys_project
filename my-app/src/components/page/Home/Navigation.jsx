import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./style.css";

export const Navigation = () => {
  const [isNext, setIsNext] = useState(true);

  return (
    <>
      <div className="navigation">
        <div className="grid wide">
          <div className="rower">
            <div
              className="col l-12 c-12 m-12"
              style={{ padding: "0", overflow: "hidden", backgroundColor: "#e1e1e1" }}
            >
              <div className="navigation-content" style={{ transform: !isNext ? "translateX(-941px)" : "" }}>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Thịt, rau củ&nbsp;&nbsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Bách Hóa&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Nhà Cửa&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Thiết Bị Số&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Điện Thoại&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p> Mẹ & Bé&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Làm Đẹp&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Gia Dụng&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Thời trang nữ&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Thời trang nam&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Giày nữ&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p> Túi nữ&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Giày nam2&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Giày nữ&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Túi nam&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Balo & Vali&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Phụ kiện&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Đồng hồ&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Laptop&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Quốc Tế&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Voucher&nbsp;&nbsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Xe&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Sách&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Thể thao&emsp;</p>
                </NavLink>
                <NavLink strict to="/Category_home" className="navigation-item">
                  <p>Máy Ảnh&emsp;</p>
                </NavLink>
              </div>
              <div
                className="prev-navigation"
                style={{ display: isNext ? "none" : "block" }}
                onClick={() => {
                  setIsNext(true);
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </div>
              <div
                className="next-navigation"
                style={{ display: isNext ? "block" : "none" }}
                onClick={() => {
                  setIsNext(false);
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
