import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  Watermark, Skeleton, Button, Empty, Divider, Tooltip } from 'antd';
import VerifiedIcon from "../imgs/icons/Increase-Brightness.svg";
import VIPIcon from "../imgs/icons/VIP.svg";
import ProIcon from "../imgs/icons/Pro.svg";
import Topsvg from "../imgs/icons/top.svg";
import sfhdgdfghesd from '../imgs/ehtiyat-Imgs/1665509448117_bulletin.jpeg';
import kredit from "../imgs/icons/kredit.svg"
import barter from "../imgs/icons/barter.svg"
import { CONN_KEY } from "../Conn";

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
function Verified(props) {
    if (props.isVisible) {
        return <div><img src={VerifiedIcon} alt="icon" className="iconCard" /></div>;
    } else {
        return;
    }
}
function Top(props) {
    if (props.isVisible) {
        return <div><Tooltip placement="top" color="#76C81C" title={Toup}><img src={Topsvg} alt="icon" className="iconCard" /></Tooltip></div>;
    } else {
        return;
    }
}
function VIP(props) {
    if (props.isVisible === "1") {
        return <div><Tooltip placement="top" color="#76C81C" title={VIPE}><img src={VIPIcon} alt="icon" className="iconCard" /></Tooltip></div>;
    } else {
        return;
    }
}
function Pro(props) {
    if (props.isVisible) {
        return <div><Tooltip placement="top" color="#FCDB5B" title={Premium}><img src={ProIcon} alt="icon" className="iconCard" /></Tooltip></div>;
    } else {
        return;
    }
}
function Barter(props) {
    if (props.isVisible) {
        return <div><Tooltip placement="top" color="#000" title={Bter}><img src={barter} alt="icon" className="iconCard" /></Tooltip></div>;
    } else {
        return;
    }
}
function Kredit(props) {
    if (props.isVisible) {
        return <div><Tooltip placement="top" color="#000" title={Presc}><img src={kredit} alt="icon" className="iconCard" /></Tooltip></div>;
    } else {
        return;
    }
}
const Bter = <span>Barter</span>;
const Premium = <span>Premium</span>;
const Toup = <span>Irəli cək</span>;
const Presc = <span>Kredit</span>;
const VIPE = <span>VIP</span>;
const Cards = ({ item }) => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${CONN_KEY}similarEhtiyat.php`)
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setLoading(false); // Change loading state to false once data is received
            })
            .catch(error => console.log(error));
    }, []);

    if (loading) {
        return (
            <div className="products">
                {[...Array(8)].map((_, index) => (
                    <Skeleton key={index} active />
                ))}
            </div>
        );
    }

    //if not data

    if (items.length === 0) {
        return <div>
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                    height: 60,
                }}
                description={
                    <span>
                        Customize Description
                    </span>
                }
            >
                <Link to="/sell"><Button type="primary">Create Now</Button></Link>
            </Empty></div>;
    }
    return (
        <>
            <div className="card-list top-32">
                <Divider orientation="left" orientationMargin="50">
                    Auctions
                </Divider>
                {items.map((Val) => {
                    return (
                        <div className="products-i " key={Val.id}>
                            <div className="products-i__top">
                                <Link target="_blank" to={`/Ehtiyat-hissələri/${Val.id}`}>
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
                                            alt={Val.Marka}
                                        />
                                    </Watermark>
                                </Link>
                                <div className="products-i__label-container ">
                                    <Verified isVisible={Val.Verified} />
                                    <VIP isVisible={Val.vip} />
                                    <Top isVisible={Val.to_up} />
                                    <Pro isVisible={Val.prem} />
                                </div>
                                <div className="products-barter-kredit-container ">
                                    <Barter isVisible={Val.barter} />
                                    <Kredit isVisible={Val.barter} />
                                </div>
                                <LikeButton />
                            </div>
                            <Link target="_blank" to={`/Ehtiyat-hissələri/${Val.id}`}>
                                <div className="products-i__bottom">
                                    <div className="title">
                                        <div className="products-i__name Title">{Val.Marka}</div>
                                        <div className="products-i__attributes  Desc">{Val.Model}</div>
                                    </div>
                                    <div className="products-i__price ">
                                        <div className="product-price">{Val.Price} <span>AZN</span>
                                        </div>
                                    </div>
                                    <div className="fofgsdfgsr">
                                        <div className="post-date Medium">{Val.created_at}</div>
                                        <div className="post-date Medium">{Val.location}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;