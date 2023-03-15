import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../Api/Ehtiyat"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'antd';

function EhtiyatImg() {
    const [visible, setVisible] = useState(false);
    const { Id } = useParams()
    const P = productsData.find(prod => prod.id === Id)

    return (
        <>
            <div className='Product-imgs'>
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    <Carousel interval="1200" transitionTime="900" showArrows={true}  >
                        <Image className='main-img main-img-border' src={P.imgM} />
                        {/* <Image className='main-img main-img-border' src={P.img.ImgS} />
                        <Image className='main-img main-img-border' src={P.img.Imge} />
                        <Image className='main-img main-img-border' src={P.img.Imgb} />
                        <Image className='main-img main-img-border' src={P.img.Imgc} />
                        <Image className='main-img main-img-border' src={P.img.Imgd} />
                        <Image className='main-img main-img-border' src={P.img.Imgf} />
                        <Image className='main-img main-img-border' src={P.img.Imgg} />
                        <Image className='main-img main-img-border' src={P.img.Imgv} />
                        <Image className='main-img main-img-border' src={P.img.Imgj} />
                        <Image className='main-img main-img-border' src={P.img.Imgk} />
                        <Image className='main-img main-img-border' src={P.img.Imgh} /> */}
                    </Carousel>
                </Image.PreviewGroup>
            </div>
        </>
    )
}

export default EhtiyatImg