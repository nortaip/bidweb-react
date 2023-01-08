import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      {item.map((Val) => {
        return (
          <div className="products-i vipped featured salon" key={Val.id}>
            <div className="products-i__top">
              <img loading="lazy" src={Val.img} alt={Val.title} />
              <div className="products-i__label-container tz-d-flex tz-gap-5 tz-wrap-wrap">
                <div className="products-i__label products-i__label_active">{Val.activity}</div>
              </div>
              <div className="like" ></div>
            </div>
            <div className="products-i__bottom">
              <div className="title">
                <div className="products-i__name Title">{Val.title}</div>
                <div className="products-i__attributes  Desc">{Val.desc}</div>
              </div>
              <div className="products-i_info ">
                <div className="ico">
                  <span className="Gear-icon"></span>
                  <h6 className="Card-icon">{Val.mekanik}</h6>
                </div>
                <div className="ico">
                  <span className="Vector-icon ico"></span>
                  <h6 className="Card-icon">{Val.Benzin}</h6>
                </div>
                <div className="ico">
                  <span className="people-icon ico"></span>
                  <h6 className="Card-icon">{Val.people}</h6>
                </div>
              </div>
              <div className="products-i__price ">
                <div className="product-price">{Val.price} <span>AZN</span>
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