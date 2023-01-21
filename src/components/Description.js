import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { Divider } from 'antd';

function Descriptions() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <div className='Desc'>
                <Divider orientation="left" orientationMargin="0">
                    Descriptions
                </Divider>
                <p className='container'>
                    {P.desc}
                </p >
            </div>
        </>
    )
}

export default Descriptions