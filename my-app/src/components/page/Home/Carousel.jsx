import React from 'react';
import LANA from '../../img/lata.webp';
import Nestles from '../../img/suanan.webp';
import Tshirts from '../../img/ao_khoac.webp';
import Pumas from '../../img/21a108dc42951087adc434372e455028.jpg.webp';
import Uno from '../../img/uno.webp';
import tefat from '../../img/may_ep.webp';


export default function Carousel() {
  return (
    <div class="body_Carousel">
      <div class="row mx-0 sale">
          <div class="row mx-0  row-card">
            {/* thoi trang */}
            <div class="col-2 h-100 position-relative">
              <div class="d-flex align-items-center justify-content-center h-100">
                <div class="wrap-img-sale">
                  <img class="w-100 h-100" src={LANA} alt="Lataa" />
                </div>
                <div class="total w-100">
                  <div class="text">
                    <span>Mua 1 Tang 1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* sữa */}
            <div class="col-2 h-100 position-relative">
              <div class="d-flex align-items-center justify-content-center h-100">
                <div class="wrap-img-sale">
                  <img class="w-100 h-100" src={Nestles} alt="soos 1" />
                </div>
                <div class="total w-100">
                  <div class="text">
                    <span>Mua là có quà</span>
                  </div>
                </div>
              </div>
            </div>
            {/* áo khoacs */}
            <div class="col-2 h-100 position-relative">
              <div class="d-flex align-items-center justify-content-center h-100">
                <div class="wrap-img-sale">
                  <img class="w-100 h-100" src={Tshirts} alt="soos 1" />
                </div>
                <div class="total w-100">
                  <div class="text">
                    <span>Mua 1 tặng 1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Puma */}
            <div class="col-2 h-100 position-relative">
              <div class="d-flex align-items-center justify-content-center h-100">
                <div class="wrap-img-sale">
                  <img class="w-100 h-100" src={Pumas} alt="soos 1" />
                </div>
                <div class="total w-100">
                  <div class="text">
                    <span>Hot Sale 290k </span>
                  </div>
                </div>
              </div>
            </div>
            {/* uno */}
            <div class="col-2 h-100 position-relative">
              <div class="d-flex align-items-center justify-content-center h-100">
                <div class="wrap-img-sale">
                  <img class="w-100 h-100" src={Uno} alt="soos 1" />
                </div>
                <div class="total w-100">
                  <div class="text">
                    <span>Giảm đến 48%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* máy chiên ko dầu */}
            <div class="col-2 h-100 position-relative">
              <div class="d-flex align-items-center justify-content-center h-100">
                <div class="wrap-img-sale">
                  <img class="w-100 h-100" src={tefat} alt="soos 1" />
                </div>
                <div class="total w-100">
                  <div class="text">
                    <span>Mua 1 tặng 1</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
  </div>
  )
}

