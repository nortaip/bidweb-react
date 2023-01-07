import React, { useState } from "react";

const Cards = ({ item }) => {
  return (
    <>
      {item.map((Val) => {
        return (
          <div class="products-i vipped featured salon" key={Val.id}>
            <div class="products-i__top">
              <img loading="lazy" src={Val.img} alt={Val.title} />
              <div class="products-i__label-container tz-d-flex tz-gap-5 tz-wrap-wrap">
                <div class="products-i__label products-i__label_active">{Val.activity}</div>
              </div>
              <div class="like" ></div>
            </div>
            <div class="products-i__bottom">
              <div className="title">
                <div class="products-i__name Title">{Val.title}</div>
                <div class="products-i__attributes  Desc">{Val.desc}</div>
              </div>
              <div class="products-i_info ">
                <div className="ico">
                  <span class="Gear-icon"></span>
                  <h6 className="Card-icon">{Val.mekanik}</h6>
                </div>
                <div className="ico">
                  <span class="Vector-icon ico"></span>
                  <h6 className="Card-icon">{Val.Benzin}</h6>
                </div>
                <div className="ico">
                  <span class="people-icon ico"></span>
                  <h6 className="Card-icon">{Val.people}</h6>
                </div>
              </div>
              <div class="products-i__price ">
                <div class="product-price">{Val.price} <span>AZN</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;