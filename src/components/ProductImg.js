import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { Image } from 'antd';
import Data from '../components/Data';

function ProducrImg() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <div className='Product-imgs'>
                <Image
                    preview={{
                        visible: false,
                    }}
                    src={P.imgM}
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
                            <Image className='mini-imgs main-img-border'  src={P.img.ImgS} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imge} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgb} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgc} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgd} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgf} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgg} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgv} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgj} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgk} />
                            <Image className='mini-imgs main-img-border'  src={P.img.Imgh} />
                    </Image.PreviewGroup>
                </div>
            </div>
        </>
    )
}

export default ProducrImg