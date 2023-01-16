import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Imagess from '../imgs/Products/10018_oVojqO0HUQ_oTMc70bUeYw.jpg';
import { Image } from 'antd';

function ProducrImg() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <Image
                preview={{
                    visible: false,
                }}
                src={P.img}
                className='main-img'
                onClick={() => setVisible(true)}
            />
            <div>
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    <Image className='mini-imgs' src={Imagess} />
                    <Image className='mini-imgs' src={P.img} />
                    <Image className='mini-imgs' src={Imagess} />
                </Image.PreviewGroup>
            </div>
        </>
    )
}

export default ProducrImg