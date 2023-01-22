import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { Link } from "react-router-dom";
import { Button } from 'antd';

function JoinProduct() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (

        <div className="jgfdt">
            <div className="price" >
                <div className="dfgjmes">
                    <h2 className="Price Bold">₼{P.price}/</h2>
                    <h5 className="currentbid semiBold">current bid</h5>
                </div>
                <div className="gfhdfhgd">
                    <h5 className="str-prc">₼{P.strPrice}</h5>
                    <h6 className="startprice">start price</h6>
                </div>
            </div>
            <Link  to={`/auction-live/${P.id}`}><Button type="primary">Join to auction</Button></Link>
        </div>

    )
}

export default JoinProduct