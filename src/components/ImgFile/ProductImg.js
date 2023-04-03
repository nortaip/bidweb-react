import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'antd';
import Mer921 from '../../imgs/Products/Mer921_gdAQ1_Mq1IJ6eTYQIP07lg.jpg';
import mer767 from '../../imgs/Products/mer76723_O4mm3IOi0tDvfQJ7597_eg.jpg';
import mer662 from '../../imgs/Products/mer66235_fewoF6XgxwTPWB71dcWiJA.jpg';
import Mer103 from '../../imgs/Products/Mer10340_GAt-fs5WIbbBDpRnpIXFcA.jpg';
import Mer274 from '../../imgs/Products/Mer27402_mb5R1U965SeBXDs7ywbnaA.jpg';
import Mer431 from '../../imgs/Products/Mer43186_bWVihBq081avC0nTAgQkBw.jpg';
import Mer436 from '../../imgs/Products/Mer43614_jrR52GE0S6fNhVgdiPrWjA.jpg';
import Mer463 from '../../imgs/Products/Mer46361_aUFEKy2sFmTSS3xJjFZOGA.jpg';
import Mer475 from '../../imgs/Products/Mer47541_fNQwiA-8kR5Dtq-ANu2KfQ.jpg';
import Mer718 from '../../imgs/Products/Mer71812_Rt7wr7Vgcq_7Rw4PL1gJYg.jpg';
import Mer639 from '../../imgs/Products/Mer63935_6CWgsn86oQskAIfJ-DN6sA.jpg';

function ProducrImg() {
    const [visible, setVisible] = useState(false);
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
                        <Image className='main-img main-img-border' src={Mer921} />
                        <Image className='main-img main-img-border' src={mer767} />
                        <Image className='main-img main-img-border' src={mer662} />
                        <Image className='main-img main-img-border' src={Mer103} />
                        <Image className='main-img main-img-border' src={Mer274} />
                        <Image className='main-img main-img-border' src={Mer431} />
                        <Image className='main-img main-img-border' src={Mer436} />
                        <Image className='main-img main-img-border' src={Mer463} />
                        <Image className='main-img main-img-border' src={Mer475} />
                        <Image className='main-img main-img-border' src={Mer718} />
                        <Image className='main-img main-img-border' src={Mer639} />
                    </Carousel>
                </Image.PreviewGroup>
            </div>
        </>
    )
}

export default ProducrImg