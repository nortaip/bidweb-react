import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../Api/Data"
import Imagess from '../../imgs/Products/10018_oVojqO0HUQ_oTMc70bUeYw.jpg';
import { Image } from 'antd';

function ProducrImgLive() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <div className='Product-imgs  inf--o'>
                <Image
                    preview={{
                        visible: false,
                    }}
                    src={P.img}
                    className='main-img main-img-border'
                    onClick={() => setVisible(true)}
                />
                <div className='img-group-p'>
                    <Image.PreviewGroup
                        className='img-mini-container'
                        preview={{
                            visible,
                            onVisibleChange: (vis) => setVisible(vis),
                        }}
                    >
                        <Image className='mini-imgs main-img-border' src={Imagess} />
                        <Image className='mini-imgs main-img-border' src={P.img} />
                        <Image className='mini-imgs main-img-border' src={P.img} />
                        <Image className='mini-imgs main-img-border' src={Imagess} />

                    </Image.PreviewGroup>
                </div>
            </div>
        </>
    )
}

export default ProducrImgLive