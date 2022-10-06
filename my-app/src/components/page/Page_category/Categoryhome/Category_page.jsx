import React from "react";
import "./Category.css";
import "../../Css/Responsive.css";
import Now from '../../../img/now.png';
import Astra from '../../../img/astra++.png';
import Freeship from '../../../img/freeship.png';

const Category_page = () => {
  return (
    <>
      <div class="menu-category ">
        <ul class="menu-hover">
          <p>
            <b>DANH MỤC SẢN PHẨM</b>
          </p>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Điện Thoại - Máy Tính Bảng
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Điện Tử - Điện Lạnh
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Phụ Kiện - Thiết Bị Số
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Laptop - Thiết Bị IT
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Máy Ảnh - Máy Quay Phim
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Điện Gia Dụng
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Nhà Cửa Đời Sống
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Hàng Tiêu Dùng - Thực Phẩm
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Đồ Chơi, Mẹ & Bé
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Làm Đẹp - Sức Khỏe
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Thời Trang - Phụ Kiện
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Thể Thao - Dã Ngoại
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Xe Máy, Ô Tô, Xe Đạp
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Hàng Quốc Tế
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Sách, VPP, Quà Tặng
            </a>
          </li>
          <li class="menu-hover-item">
            <a href="" class="menu-hover-link">
              Voucher - Dịch Vụ - Thẻ Cào
            </a>
          </li>
        </ul>
      </div>

      <div class="menu-service">
        <p>
          <b>DỊCH VỤ  </b>
        </p>
        <div class="checkbox-label">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="HCM" />
        <label for="vehicle1"><img src={Now}/> Giao Siêu Tốc 24h</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="HN" />
        <label for="vehicle1"> <img src={Astra}/>Thưởng Thêm Astra</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="HG" />
        <label for="vehicle1"><img src={Freeship} class="freeship"/> Không giới hạn </label><br/>
        <input type="checkbox" id="vehicle4" name="vehicle4" value="HP" />
        <label for="vehicle1"> Rẻ hơn hoàn tiền</label><br/>
        <input type="checkbox" id="vehicle5" name="vehicle5" value="DN" />
        <label for="vehicle1"> Trả góp 0%</label><br/>
        <input type="checkbox" id="vehicle6" name="vehicle6" value="PQ" />
        <label for="vehicle1"> Phú Quốc</label><br/>
        </div>
      </div>

      <div class="menu-address">
        <p>
          <b>NƠI BÁN</b>
        </p>
        <div class="checkbox-label">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="HCM" />
        <label for="vehicle1"> Tp. Hồ Chí Minh</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="HN" />
        <label for="vehicle1"> Hà Nội</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="HG" />
        <label for="vehicle1"> Hà Giang</label><br/>
        <input type="checkbox" id="vehicle4" name="vehicle4" value="HP" />
        <label for="vehicle1"> Hải Phòng</label><br/>
        <input type="checkbox" id="vehicle5" name="vehicle5" value="DN" />
        <label for="vehicle1"> Đà Nẵng</label><br/>
        <input type="checkbox" id="vehicle6" name="vehicle6" value="PQ" />
        <label for="vehicle1"> Phú Quốc</label><br/>
        </div>
      </div>
      
    </>
  );
};

export default Category_page;
