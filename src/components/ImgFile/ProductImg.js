import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'antd';
import { CONN_KEY } from "../../Conn";
import axios from 'axios';

function ProductImg() {
    const [visible, setVisible] = useState(false);
    const [brands, setBrands] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        const apiUrl = `${CONN_KEY}sellimg.php?id=${productId}`;
        axios.get(apiUrl)
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [productId]);

    return (
        <div className='Product-imgs'>
            <Image.PreviewGroup
                preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                }}
            >

                <Image className='main-img main-img-border' src={`../../uploads/6433a5d05e554/o_1fuqtt6ac1sn51fk19uk6501ksug.jpg`} />

            </Image.PreviewGroup>
        </div>
    );
}

export default ProductImg;
