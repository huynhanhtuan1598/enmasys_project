import React from 'react';
import Hot from'../../img/hot_ngon.webp';
import Sport_shoes from'../../img/giay_the_thao.webp';
import Balo from'../../img/balo.webp';
import Mind_book from'../../img/sach_tu_duy.webp';
import Smart_phone from'../../img/smart_phone.webp';
import Novel from'../../img/book.webp';
import Comic from'../../img/comic.webp';
import Novelette from '../../img/truyen_ngan.webp';
import Furniture from '../../img/ghe.webp';
import Table_works from '../../img/table.webp';
import Average_Thermostats from '../../img/binh_giu.webp';
import Shelf from '../../img/ke_tu.webp';
import Others from '../../img/diff.jpg';
import Classical_works from '../../img/tac_pham.webp';
import Book_english from '../../img/book_english.webp';
import Bookshelf from '../../img/ke_sach.webp';
import Underbone from '../../img/underbon.webp';
import loudspeaker from '../../img/loa.webp';
import Kitchen from '../../img/phu_kien_nha_bep.webp';
import Flared_dress from '../../img/dam_dang_xoe.webp';
import {  NavLink } from "react-router-dom";

export default function Category() {
  return (
    <div className='body_Category'>
    <div className="row mx-0 mt-4 category">
        <h5 className="p-4">Danh Mục Nổi Bật</h5>
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center card-category">
          <NavLink  strict to="/Product_detail_page" >
          <div className="wrap-img">
              <img className="w-100 h-100" src={Hot}alt="Hot_ngon" />
            </div>
            <p className="mb-0 text-center"><h6>NGON</h6></p>
          </NavLink>
            
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Sport_shoes} alt="Sport_shoes" />
            </div>
            <p className="mb-0 text-center mt-2">Giày thể thao </p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Balo} alt="Balo" />
            </div>
            <p className="mb-0 text-center mt-2">Balo </p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Mind_book} alt="_Mind_book" />
            </div>
            <p className="mb-0 text-center mt-2">Sách tư duy & kỹ năng sống</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Smart_phone} alt="Smart_phone" />
            </div>
            <p className="mb-0 text-center mt-2">Điện thoại<br/> Smart Phone</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Novel} alt="Novel" />
            </div>
            <p className="mb-0 text-center mt-2">Tiểu thuyết</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Comic} alt="" />
            </div>
            <p className="mb-0 text-center mt-2">Truyện tranh, Manga, Comic</p>
            
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Novelette} alt="Novelette" />
            </div>
            <p className="mb-0 text-center mt-2">Truyện ngắn -tản văn</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Furniture} alt="Furniture" />
            </div>
            <p className="mb-0 text-center mt-2">Bàn-ghế làm việc</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Table_works} alt="Table_works" />
            </div>
            <p className="mb-0 text-center mt-2">Tủ</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Average_Thermostats} alt="Average_Thermostats" />
            </div>
            <p className="mb-0 text-center mt-2">Bình giữ nhiệt</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Shelf} alt="" />
            </div>
            <p className="mb-0 text-center mt-2">Kệ & Tủ</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Others} alt="Others" />
            </div>
            <p className="mb-0 text-center mt-2">Khác</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Classical_works} alt="Classical_works" />
            </div>
            <p className="mb-0 text-center mt-2">Tác Phẩm kinh điển</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Book_english} alt="Book_english" />
            </div>
            <p className="mb-0 text-center mt-2">Sách học tiếng anh</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Bookshelf} alt="Bookshelf" />
            </div>
            <p className="mb-0 text-center mt-2">Tủ, kệ sách</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Underbone} alt="Underbone" />
            </div>
            <p className="mb-0 text-center mt-2">Xe tay ga</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={loudspeaker} alt="loudspeaker" />
            </div>
            <p className="mb-0 text-center mt-2">Loa Bluetooth</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Kitchen} alt="Kitchen" />
            </div>
            <p className="mb-0 text-center mt-2">Phụ kiện nhà bếp</p>
          </div>
          <div className="d-flex flex-column align-items-center card-category">
            <div className="wrap-img">
              <img className="w-100 h-100" src={Flared_dress} alt="Flared_dress" />
            </div>
            <p className="mb-0 text-center mt-2">Đầm dáng xòe</p>
          </div>
        </div>
      </div>
  </div>
  )
}

