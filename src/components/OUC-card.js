import React from "react";
import img from "../imgs/Products/shadow.jpg"
const Cards = ({ item }) => {
  return (
    <>
      {item.map((Val) => {
        return (
          <div class="products-i vipped featured salon" key={Val.id}>
            <div class="products-i__top">
              <img loading="lazy" src={Val.img} alt={Val.title} />
              <div class="products-i__label-container tz-d-flex tz-gap-5 tz-wrap-wrap">
                <div class="products-i__label products-i__label--salon">{Val.activity}</div>
              </div>
              <div class="products-i__paid">
                <span class="featured-icon"></span>
                <span class="vipped-icon"></span>
              </div>
              <div class="products-i__info">
                <div class="products-i__icon products-i__icon--barter">
                  <div class="products-i__tooltip products-i__tooltip--barter">Barter mümkündür</div>
                </div>
              </div>
            </div>
            <div class="products-i__bottom">
              <div class="products-i__price products-i__bottom-text">
                <div class="product-price">{Val.price} <span>AZN</span>
                </div>
              </div>
              <div class="products-i__name products-i__bottom-text">{Val.title}</div>
              <div class="products-i__attributes products-i__bottom-text">{Val.desc}</div>
              <div class="products-i__datetime">{Val.time}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;