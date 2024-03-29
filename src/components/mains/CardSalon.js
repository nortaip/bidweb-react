import React from "react";
import { Link } from "react-router-dom";
import { Tag, Watermark } from 'antd';

const Cards = ({ item }) => {
    return (
        <>
            {item.map((Val) => {
                return (
                    <div className="products-i " key={Val.id}>
                        <Link target="_blank" to={`/products/${Val.id}`}>
                            <div className="products-i__top">
                                <Watermark content="Xerci.az">
                                    <img loading="lazy" src={Val.imgM} alt={Val.title} />
                                </Watermark>
                                <div className="products-i__label-container ">
                                    {/* <Tag className="products-i__label products-i__label_active">{Val.activity}</Tag> */}
                                </div>
                                {/* <div className="like"></div> */}
                            </div>
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