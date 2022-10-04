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
        // <div className='CategoryViewstyle__Right-sc-bhstkd-1 jxmsjJ'>
        //     <div className='inner'>
        //         <div className='search-summary'>
        //         <div class="title"><h1>Thời trang nam </h1></div>
        //         </div>
        //         <div className='category-slide-wrapper'>
        //             <div className='Slider__Root-sc-1cbg3p7-0 iXBoov'>
        //                 <div className='Slider__Wrapper-sc-pmvh7n-0 iTEXsX'>
        //                     <div className='slick-slider slick-initialized' dir='ltr'>
        //                     <a data-role="none" class="slick-arrow slick-prev slick-disabled" style="display: block;"><span class="icon"><i class="tikicon icon-arrow-back"></i></span></a>
        //                     <div className='slick-list'>
        //                         <div className='slick-track'>
        //                             <div className='slick-slide slick-active slick-center slick-current'>
        //                                 <div>
        //                                     <a href="https://tiki.vn/khuyen-mai/super-fashion-day" data-view-index="0" data-view-id="product_list_banner_item" tabindex="-1" class="Slider__SlideItem-sc-1cbg3p7-1 cyPxRV" style="width: 100%; display: inline-block;">
        //                                         <picture className='webpimg-container'>
        //                                         <source type="image/webp" srcset="https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png.webp 1x, https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png.webp 2x"/>
        //                                         <img src="https://salt.tikicdn.com/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png" srcset="https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png 1x, https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png 2x" class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo" style="width: 861px; height: 286px; object-fit: cover;"/>
        //                                         </picture>
        //                                     </a>
        //                                 </div>

        //                             </div>

        //                         </div>
                                
        //                     </div>    
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>

        //     </div>

        // </div>
        
  );
    }
}