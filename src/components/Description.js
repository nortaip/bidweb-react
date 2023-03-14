import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "./Api/Data"
import { Divider, Typography } from 'antd';
const { Paragraph, Text } = Typography;

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
                <Text className='container'>
                    {P.desc}
                </Text >
            </div>
        </>
    )
}

export default Descriptions