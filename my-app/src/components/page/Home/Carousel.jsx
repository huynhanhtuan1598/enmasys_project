import React from 'react';
import LANA from '../../img/lata.webp';
import Nestles from '../../img/suanan.webp';
import Tshirts from '../../img/ao_khoac.webp';
import Pumas from '../../img/21a108dc42951087adc434372e455028.jpg.webp';
import Uno from '../../img/uno.webp';
import tefat from '../../img/may_ep.webp';


export default function Carousel() {
  return (
    <div className="body_Carousel">
      <div className="row mx-0 sale">
          <div className="row mx-0  row-card">
            {/* thoi trang */}
            <div className="col-2 h-100 position-relative">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="wrap-img-sale">
                  <img className="w-100 h-100" src={LANA} alt="Lataa" />
                </div>
                <div className="total w-100">
                  <div className="text">
                    <span>Mua 1 Tang 1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* sữa */}
            <div className="col-2 h-100 position-relative">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="wrap-img-sale">
                  <img className="w-100 h-100" src={Nestles} alt="soos 1" />
                </div>
                <div className="total w-100">
                  <div className="text">
                    <span>Mua là có quà</span>
                  </div>
                </div>
              </div>
            </div>
            {/* áo khoacs */}
            <div className="col-2 h-100 position-relative">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="wrap-img-sale">
                  <img className="w-100 h-100" src={Tshirts} alt="soos 1" />
                </div>
                <div className="total w-100">
                  <div className="text">
                    <span>Mua 1 tặng 1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Puma */}
            <div className="col-2 h-100 position-relative">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="wrap-img-sale">
                  <img className="w-100 h-100" src={Pumas} alt="soos 1" />
                </div>
                <div className="total w-100">
                  <div className="text">
                    <span>Hot Sale 290k </span>
                  </div>
                </div>
              </div>
            </div>
            {/* uno */}
            <div className="col-2 h-100 position-relative">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="wrap-img-sale">
                  <img className="w-100 h-100" src={Uno} alt="soos 1" />
                </div>
                <div className="total w-100">
                  <div className="text">
                    <span>Giảm đến 48%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* máy chiên ko dầu */}
            <div className="col-2 h-100 position-relative">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="wrap-img-sale">
                  <img className="w-100 h-100" src={tefat} alt="soos 1" />
                </div>
                <div className="total w-100">
                  <div className="text">
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

