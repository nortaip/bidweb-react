import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tag, Watermark } from 'antd';

function LikeButton({ id }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="like">
      <svg viewBox="0 0 24 24" width="24" height="24" onClick={toggleLike}>
        <path
          fill={isLiked ? 'red' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          d="M12 21.35l-1.84-1.67C5.4 14.76 2 11.55 2 7.77 2 4.42 4.42 2 7.77 2c2.34 0 4.54 1.23 5.23 3.23C13.69 3.23 16 5.42 16 8.23c0 2.69-2.31 5-5.25 8.45z"
        />
        <span>{isLiked ? 'Liked' : 'Like'}</span>
      </svg>
    </div>
  );
}

const Cards = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [buttons, setButtons] = useState([
    { id: 1, isLiked: false },
    { id: 2, isLiked: false },
    { id: 3, isLiked: false },
  ]);
  const toggleLike = (id) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id ? { ...button, isLiked: !button.isLiked } : button
      )
    );
  };
  return (
    <>
      {item.map((Val) => {
        return (
          <div className="products-i " key={Val.id}>

            <div className="products-i__top">
              <Link target="_blank" to={`/products/${Val.id}`}>
                <Watermark content="Bid.az">
                  <img loading="lazy" src={Val.imgM} alt={Val.title} />
                </Watermark>
              </Link>
              <div className="products-i__label-container ">
                <Tag className="products-i__label products-i__label_active">{Val.activity}</Tag>
              </div>
              <LikeButton />
            </div>
            <Link target="_blank" to={`/products/${Val.id}`}>
              <div className="products-i__bottom">
                <div className="title">
                  <div className="products-i__name Title">{Val.title}</div>
                  <div className="products-i__attributes  Desc">{Val.category}</div>
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
                <div className="fofgsdfgsr">
                  <div className="post-date Medium">{Val.date}</div>
                  <div className="post-date Medium">{Val.location}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Cards;