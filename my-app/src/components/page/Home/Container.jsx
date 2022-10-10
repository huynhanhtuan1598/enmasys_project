import React from "react";
import "../../page/Css/style_container.css";
import ForUser from "../../img/user1.webp";
import Apple from "../../img/apple.webp";
import Market from "../../img/hot_ngon.webp";
import Digital_service from "../../img/dong_tien.webp";
import Super_deal from "../../img/fire.webp";
import Cheap from "../../img/Incredibly_cheap.webp";
import New_product from "../../img/Product_new.webp";
import Trend from "../../img/fashion_trend.webp";
import Vinfast_moto from "../../img/vinfast.webp";
import Iphone_13pr from "../../img/13prmax.webp";
import Ipad from "../../img/ipad10.webp";
import Oil_free_fryer from "../../img/noi_chien_khong_dau.png";
import Book_organce from "../../img/book_cam.webp";
import Comic_annime from "../../img/truyen_tranh.webp";
import Sneaker from "../../img/giay_sneaker.webp";
import Fruit_machine from "../../img/may_ep.webp";
import Vision from "../../img/underbon.webp";
import S20 from "../../img/s20ss_256GB.webp";
import Milk from "../../img/suanan.webp";
import Iphone13 from "../../img/smart_phone.webp";


export default function Container() {
  return (
    <div>
      <div className="container-sticky">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className="sticky-item">
                <div className="sticky-item-box">
                  <h3 className="sticky-item-box-title">Gợi Ý Hôm Nay</h3>
                </div>
                <ul className="sticky-list">
                  <li className="sticky-list-tab sticky-active">
                    <img src={ForUser} alt="" className="sticky-list-img" />
                    <div className="sticky-box">Dành cho bạn</div>
                  </li>
                  <li className="sticky-list-tab">
                    <img src={Apple} alt="" className="sticky-list-img" />
                    <div className="sticky-box">Sale cực to 50%</div>
                  </li>
                  <li className="sticky-list-tab">
                    <img src={Market} alt="" className="sticky-list-img" />
                    <div className="sticky-box">Giảm đến 50%</div>
                  </li>
                  <li className="sticky-list-tab">
                    <img src={Digital_service} alt="" className="sticky-list-img" />
                    <div className="sticky-box">
                      Deal Siêu
                       Hot
                    </div>
                  </li>
                  <li className="sticky-list-tab">
                    <img src={Super_deal} alt="" className="sticky-list-img" />
                    <div className="sticky-box">Rẻ vô đối</div>
                  </li>
                  <li className="sticky-list-tab">
                    <img src={Cheap} alt="" className="sticky-list-img" />
                    <div className="sticky-box">Đi Chợ Siêu Sale</div>
                  </li>
                  <li className="sticky-list-tab">
                    <img src={New_product} alt="" className="sticky-list-img" />
                    <div className="sticky-box">Hàng mới</div>
                  </li>
                  <li className="sticky-list-tab">
                    <img src={Trend} alt="" className="sticky-list-img" />
                    <div className="sticky-box">Xu hướng thời trang</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-suggestions">
        <div className="grid wide">
          <div className="highlight-container">
            <div className="row ">
              {/* <!-- Dành cho bạn --> */}
              <div className="product-suggestions-container block-active">
                <div className="suggestions-main">
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Ghế đệm mông bơm hơi có tay vịn-Tặng kèm bơm tay và
                            quà tặng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            (Hang Cap Cap) Kệ đựng đồ đa năng,3tầng có bánh xe
                            việt nhật
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img src={Iphone_13pr} className="product-having-img" />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Điện thoại iPhone 13 Pro Max - Hàng chính hãng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Nồi Chiên Không Dầu Điện Tử Lock&Lock EJF357BLK (5.2
                            Lít) - Hàng Chính Hãng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Điện Thoại iPhone 13 128GB - Hàng Chính Hãng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Keo chống thấm dột sử lý vết nứt bong tróc đa năng
                            TAIKO JAPAN nhập khẩu - Đen - 1 Kg
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="suggestions-main">
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Ghế đệm mông bơm hơi có tay vịn-Tặng kèm bơm tay và
                            quà tặng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            (Hang Cap Cap) Kệ đựng đồ đa năng,3tầng có bánh xe
                            việt nhật
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img src={Iphone_13pr} className="product-having-img" />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Điện thoại iPhone 13 Pro Max - Hàng chính hãng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Nồi Chiên Không Dầu Điện Tử Lock&Lock EJF357BLK (5.2
                            Lít) - Hàng Chính Hãng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Điện Thoại iPhone 13 128GB - Hàng Chính Hãng
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <a className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={Iphone_13pr}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            Keo chống thấm dột sử lý vết nứt bong tróc đa năng
                            TAIKO JAPAN nhập khẩu - Đen - 1 Kg
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

