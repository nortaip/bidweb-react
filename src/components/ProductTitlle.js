import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { AiOutlineHeart } from "react-icons/ai";
import { Badge } from 'antd';

function ProductTitle() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <div className="header" >
                <h2 className="title" >{P.title}</h2>
                <div className="live-end" >
                    <h6 className="live" >LIVE</h6>
                    <AiOutlineHeart />
                </div>
            </div>
            <div className="stdfhds" >
                <div className="isergsfd">
                    <div className="hvheryffgd">
                        <h6 className="stdfhds-h6">Lot number</h6>
                        <div className="sfghsdfh">
                            <h6 className="ID">#{P.id}</h6>
                        </div>
                    </div>
                    <div className="hvheryfj">
                        <h6 className="stdfhds-h6" >Auction</h6>
                        <h6 className="stdfhdfghlds-h6">Maxsim</h6>
                    </div>
                    <div className="hvheryfj">
                        <h6 className="stdfhds-h6">Date/time</h6>
                        <h6 className="stdfhdfghlds-h6" >{P.date}</h6>
                    </div>
                    <div className="hvheryfj">
                        <h6 className="stdfhds-h6">Status</h6>
                        <Badge className="stdfhdfghlds-h6 " status="success processing" text="Online" />
                    </div>
                </div>
                <div className="Condition">
                    <h6 className="Regular">Condition</h6>
                    <h5 className="SemiBold">{P.Condition}</h5>
                </div>
            </div>
        </>
    )
}

export default ProductTitle