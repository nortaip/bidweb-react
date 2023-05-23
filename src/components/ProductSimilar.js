import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tag, Watermark, Divider, Button, Empty } from 'antd';
import VerifiedIcon from "../imgs/icons/VerifiedCheck.svg";
import VIPIcon from "../imgs/icons/VIP.svg";
import AuctionIcon from "../imgs/icons/Sledgehammer.svg";
import ProIcon from "../imgs/icons/Pro.svg";
import Topsvg from "../imgs/icons/top.svg";
import sfhdgdfghesd from '../imgs/Products/78230_nRlF9XFVq6pOFOUJUgO9-A.jpg';
import axios from 'axios';
import { CONN_KEY } from "../Conn";

function CardList() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get(`${CONN_KEY}similar.php`)
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
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
    function Activity(props) {
        if (props.isVisible) {
            return <div><Tag className="products-i__label products-i__label_active">Active</Tag></div>;
        } else {
            return <div></div>;
        }
    }
    function Verified(props) {
        if (props.isVisible) {
            return <div><img src={VerifiedIcon} alt="icon" className="iconCard" /></div>;
        } else {
            return <div></div>;
        }
    }
    function Top(props) {
        if (props.isVisible) {
            return <div><img src={Topsvg} alt="icon" className="iconCard" /></div>;
        } else {
            return <div></div>;
        }
    }
    function VIP(props) {
        if (props.isVisible === "1") {
            return <div><img src={VIPIcon} alt="icon" className="iconCard" /></div>;
        } else {
            return <div></div>;
        }
    }
    function Auction(props) {
        if (props.isVisible) {
            return <div><img src={AuctionIcon} alt="icon" className="iconCard" /></div>;
        } else {
            return <div></div>;
        }
    }
    function Pro(props) {
        if (props.isVisible) {
            return <div><img src={ProIcon} alt="icon" className="iconCard" /></div>;
        } else {
            return <div></div>;
        }
    }
    return (
        <div className="top-32">
            <Divider orientation="left" orientationMargin="0">
                Popular Car For you
            </Divider>
            <div className="card-list">
                {brands.map(brand => (
                    <div className="products-i " key={brand.id}>
                        <div className="products-i__top">
                            <Link target="_blank" to={`#`}>
                                <Watermark
                                    content="Xerci.az"
                                    fontSize={10}
                                    fontWeight={900}
                                    height={30}
                                    width={30}
                                >
                                    <img
                                        className="imga"
                                        loading="lazy"
                                        src={sfhdgdfghesd}
                                        // src={'http://localhost/tu/api/uploads/' + brand.folder_name}
                                        alt={brand.Marka}
                                    />
                                </Watermark>
                            </Link>
                            <div className="products-i__label-container ">
                                {/* <Activity isVisible={brand.Activity} /> */}
                                <Verified isVisible={brand.Verified} />
                                <VIP isVisible={brand.vip} />
                                <Top isVisible={brand.to_up} />
                                {/* <Auction isVisible={brand.Auction} /> */}
                                <Pro isVisible={brand.prem} />
                            </div>
                            <LikeButton />
                        </div>
                        <Link target="_blank" to={`#`}>
                            <div className="products-i__bottom">
                                <div className="title">
                                    <div className="products-i__name Title">{brand.Marka}</div>
                                    <div className="products-i__attributes  Desc">{brand.Model}</div>
                                </div>
                                <div className="products-i_info ">
                                    <div className="ico">
                                        <span className="Gear-icon"></span>
                                        <h6 className="Card-icon">{brand.Yanacaq}</h6>
                                    </div>
                                    <div className="ico">
                                        <span className="Vector-icon ico"></span>
                                        <h6 className="Card-icon">{brand.Suret}</h6>
                                    </div>
                                    <div className="ico">
                                        <span className="people-icon ico"></span>
                                        <h6 className="Card-icon">{brand.People}</h6>
                                    </div>
                                </div>
                                <div className="products-i__price ">
                                    <div className="product-price">{brand.Price} <span>AZN</span>
                                    </div>
                                </div>
                                <div className="fofgsdfgsr">
                                    <div className="post-date Medium">{brand.created_at}</div>
                                    <div className="post-date Medium">{brand.location}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardList;

