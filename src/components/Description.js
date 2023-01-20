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
            <Divider orientation="left" orientationMargin="0">
                Descriptions
            </Divider>
            <p>
                {P.desc}
            </p>
        </>
    )
}

export default Descriptions