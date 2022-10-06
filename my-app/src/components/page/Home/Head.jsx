import React from "react";
import logo from "../../img/enmasys.png";
import searchs from "../../img/search.png";
import user from "../../img/user.png";
import carts from "../../img/cart.png";

export const Head = () => {
  return (
    <>
      <header class="style__Header-sc-q53692-0 ebTvCC">
        <div class="Container-sc-itwfbd-0 hfMLFx">
          <div class="Middle__Wrap-sc-vop1h1-0 edlkEo">
            <div class="Middle__LeftContainer-sc-vop1h1-1 hBRVdJ">
              <div class="logo-menu">
                <div class="style__Logo-sc-3sdkaq-0 cWrfyT">
                  <a href="/" data-view-id="header_main_logo" class="tiki-logo">
                    <img
                      src={logo}
                      alt="tiki-logo"
                    />
                  </a>
                </div>
              </div>
              <div class="FormSearch__Root-sc-1fwg3wo-0 fPLoMu">
                <div class="FormSearch__Form-sc-1fwg3wo-1 dPyAZH">
                  <input
                    type="text"
                    data-view-id="main_search_form_input"
                    value=""
                    placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                    class="FormSearch__Input-sc-1fwg3wo-2 gBxvSE"
                  />
                  <button
                    data-view-id="main_search_form_button"
                    class="FormSearch__Button-sc-1fwg3wo-3 bUpWwh"
                  >
                    <img
                      class="icon-search"
                      src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                    />
                    Tìm Kiếm
                  </button>
                </div>
              </div>
            </div>
            <div class="Userstyle__Root-sc-6e6am-0 lhUPfd">
              <div class="Userstyle__Item-sc-6e6am-1 cHRIKv">
                <img
                  class="profile-icon"
                  src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                />
                <span class="Userstyle__ItemText-sc-6e6am-3 kYZPng">
                  <span class="Userstyle__NoWrap-sc-6e6am-12 gJAiTt">
                    Đăng Nhập / Đăng Ký
                  </span>
                  <span class="account-label">
                    <span>Tài khoản</span>
                    <img
                      class="arrowIcon"
                      src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                    />
                  </span>
                </span>
              </div>
              <div class="Userstyle__CartItem-sc-6e6am-14 hfiWvr">
                  <a href="#" rel="nofollow" data-view-id="header_user_shortcut_cart">
                    <div class="Userstyle__Item-sc-6e6am-1 Userstyle__CartItemInner-sc-6e6am-2 cHRIKv cucUum">
                        <div class="cart-wrapper">
                        <img class="cart-icon" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"/>
                        <span class="Userstyle__ItemCartQty-sc-6e6am-5 ohfHv">0</span>
                        </div>
                        <span class="cart-text">Giỏ Hàng</span>
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div class="Bottom__Root-sc-azeq0g-0 fnCMyp">
            <div class="Container-sc-itwfbd-0 hfMLFx">
             <div class="style__StyledHeaderKeyWords-sc-1tmiyrh-0 hgsBUf">
                <a data-view-id="header_quicklinks_item" data-view-index="0">trái cây</a>
                <a data-view-id="header_quicklinks_item" data-view-index="1">thịt, trứng</a>
                <a data-view-id="header_quicklinks_item" data-view-index="2">rau củ quả</a>
                <a data-view-id="header_quicklinks_item" data-view-index="3">sửa, bơ, phô mai </a>
                <a data-view-id="header_quicklinks_item" data-view-index="4">hải sản </a>
                <a data-view-id="header_quicklinks_item" data-view-index="5">gạo, mì ăn liền</a>
                <a data-view-id="header_quicklinks_item" data-view-index="6">đồ uống, bia rượu</a>
                <a data-view-id="header_quicklinks_item" data-view-index="7">bánh kẹo</a>
             </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Head;
