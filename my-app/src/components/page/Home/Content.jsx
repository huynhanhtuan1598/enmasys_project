import React from 'react';
import user_carousel from "../../img/1.png";
import astra from "../../img/astra+.webp";
import mec from "../../img/mec.webp";
import hot_food from "../../img/hot_ngon.webp";
import cash_money from "../../img/dong_tien.webp";
import ASA from "../../img/mua_ban.webp";
import ticked_sale from "../../img/sale_ticket.webp";
import Sale_50 from "../../img/sale_50.webp";
import Cash_money from "../../img/hoan_tien.webp";
import Cacsh_sale from "../../img/thanh_toan.webp";

export const Content = () => {
  return (
    <>
    <div className="content_header">
        <div className="container">
          <div class="row mx-0 jenis-sale">
            <div class="d-flex justify-content-between w-100">
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={astra} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={mec} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={hot_food} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={cash_money} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={ASA} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={ticked_sale} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={Sale_50} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={Cash_money} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={user_carousel} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div class="wrap-img">
                  <img src={Cacsh_sale} className="jenisk" />
                </div>
                <p class="mb-0 mt-2">Men&nbsp;Sale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
