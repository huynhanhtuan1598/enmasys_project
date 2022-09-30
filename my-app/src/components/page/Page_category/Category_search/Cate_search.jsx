import React, { Component } from 'react';
import "./cate_search.css";
import product_img from "../../../img/sale_nua_thang.webp";
import product_img2 from "../../../img/me_be.webp";
import product_img3 from "../../../img/gufood.webp";

export default class PreviousNextMethods extends Component {
    constructor(props) {
      super(props);
      this.next_slider = this.next.bind(this);
      this.prev_slider = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
        <div class="slider">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-8 m-8 c-12">
                        <div class="slider-container">
                            <div class="slider-directional">
                                <div class="prev_slider">
                                    <i class="fas fa-chevron-left"></i>
                                </div>
                                <div class="next_slider">
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                            <div class="slider-container-banner">
                                <a href="" class="slider-container-link">
                                    <img src={product_img} alt="" class="slider-img"/>
                                    <img src={product_img2} alt="" class="slider-img"/>
                                    <img src={product_img3} alt="" class="slider-img"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  );
    }
}