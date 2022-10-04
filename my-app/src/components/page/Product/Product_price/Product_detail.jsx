import React from "react";
import "../Product_price/style.css";

const Product_detail = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="container-fliud">
          <div class="wrapper row">
            <div class="preview col-md-6">
              <div class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div class="tab-pane" id="pic-2">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div class="tab-pane" id="pic-3">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div class="tab-pane" id="pic-4">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div class="tab-pane" id="pic-5">
                  <img src="http://placekitten.com/400/252" />
                </div>
              </div>
              <ul class="preview-thumbnail nav nav-tabs">
                <li class="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-3" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-4" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-5" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="details col-md-6">
              <h3 class="product-title">men's shoes fashion</h3>
              <div class="rating">
                <div class="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  (Xem 34 đánh giá) <span>&#124;</span> Đã bán 95
                </div>
                <span class="review-no">41 reviews</span>
              </div>
              <p class="product-description">
                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                cubilia sem sem! Repudiandae et! Massa senectus enim minim
                sociosqu delectus posuere.
              </p>
              <div className="price_product">
                <div className="price">180.000₫</div>
                <div className="price_sale">
                  <del>500.000₫</del>
                </div>
                <div className="price_persent">25%</div>
              </div>
              <h5 class="sizes">
                sizes:
                <span class="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span class="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span class="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span class="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5>
              <h5 class="colors">
                colors:
                <span
                  class="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In store"
                ></span>
                <span class="color green"></span>
                <span class="color blue"></span>
              </h5>
              <div class="buttons_added">
                <input class="minus is-form" type="button" value="-" />
                <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1"/>
                <input class="plus is-form" type="button" value="+" />
              </div>
              <div class="action">
                <button class="add-to-cart btn btn-default" type="button">
                  add to cart
                </button>
                <button class="like btn btn-default" type="button">
                  <span>Trả góp</span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	
  );
};

export default Product_detail;
