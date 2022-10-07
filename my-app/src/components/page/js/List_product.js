import React from 'react';
import {  NavLink } from "react-router-dom";


export default function List_product(props) {
    
    return (
        <div class="product_suggestions_category">
        <div class="grid wide product">
          <div class="highlight-container">
            <div class="row ">
              {/* <!-- Dành cho bạn --> */}
              <div class="product_suggestions_container block-active_category">
                <div class="suggestions_main_category">
                <div class="col l-2 m-6 c-3">
                    <div class="product-having">
                      <NavLink  strict to="/Product_detail_page" class="product-having-a" href="">
                        <div class="product-having-photo">
                          <img
                            src={props.img}
                            alt=""
                            class="product-having-img"
                          />
                        </div>
                        <div class="product-having-title">
                          <p class="product-having-title-item">
                            {props.name}
                          </p>
                          <span class="product-having-price">194.000 ₫</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  {/* <div class="col l-2 m-6 c-3">
                    <div class="product-having">
                      <NavLink  strict to="/Product_detail_page" class="product-having-a" href="">
                        <div class="product-having-photo">
                          <img
                            src={Ip13}
                            alt=""
                            class="product-having-img"
                          />
                        </div>
                        <div class="product-having-title">
                          <p class="product-having-title-item">
                            Ghế đệm mông bơm hơi có tay vịn-Tặng kèm bơm tay và
                            quà tặng
                          </p>
                          <span class="product-having-price">194.000 ₫</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div class="col l-2 m-6 c-3">
                    <div class="product-having">
                      <a class="product-having-a" href="">
                        <div class="product-having-photo">
                          <img
                            src={Ip13}
                            alt=""
                            class="product-having-img"
                          />
                        </div>
                        <div class="product-having-title">
                          <p class="product-having-title-item">
                            (Hang Cap Cap) Kệ đựng đồ đa năng,3tầng có bánh xe
                            việt nhật
                          </p>
                          <span class="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col l-2 m-6 c-3">
                    <div class="product-having">
                      <a class="product-having-a" href="">
                        <div class="product-having-photo">
                          <img src={Ip13} class="product-having-img" />
                        </div>
                        <div class="product-having-title">
                          <p class="product-having-title-item">
                            Điện thoại iPhone 13 Pro Max - Hàng chính hãng
                          </p>
                          <span class="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col l-2 m-6 c-3">
                    <div class="product-having">
                      <a class="product-having-a" href="">
                        <div class="product-having-photo">
                          <img
                            src={Ip13}
                            alt=""
                            class="product-having-img"
                          />
                        </div>
                        <div class="product-having-title">
                          <p class="product-having-title-item">
                            Nồi Chiên Không Dầu Điện Tử Lock&Lock EJF357BLK (5.2
                            Lít) - Hàng Chính Hãng
                          </p>
                          <span class="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
