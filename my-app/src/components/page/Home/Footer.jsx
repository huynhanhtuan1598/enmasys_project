import React from 'react';
import Cash from '../../img/Screenshot 2021-11-08 165951 thanh toán.png';
import Ch_play from '../../img/Screenshot 2021-11-08 171932 dowload.png';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Hỗ trợ khách hàng</h4>
                <ul>
                    <li><a href="#">Hotline: 1900-6035<br/>(1000 đ/phút, 8-21h kể cả T7, CN)</a></li>
                    <li><a href="#">Các câu hỏi thường gặp</a></li>
                    <li><a href="#">Gửi yêu cầu hỗ trợ</a></li>
                    <li><a href="#">Hướng dẫn đặt hàng</a></li>
                 <li><a href="#">Phương thức vận chuyển</a></li>
                    <li><a href="#">Chính sách đổi trả</a></li>
                    <li><a href="#">Hướng dẫn trả góp</a></li>
                    <li><a href="#">Chính sách hàng nhập khẩu</a></li>
                    <li><a href="#">Hỗ trợ khách hàng: hotro@tiki.vn</a></li>
                 <li><a href="#">Báo lỗi bảo mật: security@tiki.vn</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Về Tiki</h4>
                <ul>
                    <li><a href="#">Giới thiệu Tiki</a></li>
                    <li><a href="#">Tuyển dụng</a></li>
                    <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                    <li><a href="#">Chính sach bảo mật thông tin cá nhân</a></li>
                    <li><a href="#">Chính sách giải quyết khiếu nại</a></li>
                 <li><a href="#">Điều khoản sử dụng</a></li>
                 <li><a href="#">Giới thiệu Tiki Xu</a></li>
                 <li><a href="#">SEP-Mua sắm có lời</a></li>
                 <li><a href="#">Tiếp thị liên kết cùng Tiki</a></li>
                 <li><a href="#">Bán hàng doanh nghiệp</a></li>
                 <li><a href="#">Điều kiện vận chuyển</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Hợp tác và liên kết</h4>
                <ul>
                    <li><a href="#">Quy chế hoạt động Sàn GDTMDT</a></li>
                    <li><a href="#">Bán hàng cùng Tiki</a></li>
                </ul>
                <h4>Chứng nhận bởi</h4>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>

            </div>
            <div class="footer-col">
                <h4>Phương thức thanh toán</h4>
                <div class="social-links">
                <img class="w-100 h-100" src={Cash} alt="Lataa" />
                    {/* <a href="#">
                    <img class="w-100 h-100" src={Cash} alt="Lataa" />
                    </a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
                </div>
            </div>
            <div class="footer-col">
             <h4>kết nối với chúng tôi</h4>
             <div class="social-links">
             <img class="w-100 h-100" src={Ch_play} alt="Lataa" />
                 {/* <a href="#">  <img class="w-100 h-100" src={Ch_play} alt="Lataa" /></a>
                 <a href="#"><i class="fab fa-twitter"></i></a>
                 <a href="#"><i class="fab fa-instagram"></i></a>
                 <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
             </div>
         </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
