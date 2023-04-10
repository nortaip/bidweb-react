import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'antd';
import axios from 'axios';

function ProductImg() {
    const [visible, setVisible] = useState(false);
    const [brands, setBrands] = useState([]);
    const { productId } = useParams();
    useEffect(() => {
        const apiUrl = `http://localhost/tu/api/sellimg.php?id=${productId}`;
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
                <Carousel interval="1200" transitionTime="900" showArrows={true}>
                    {Array.isArray(brands) ? (
                        brands.map(brand => (
                            <Image key={index} alt={brand.product_folder} className='main-img main-img-border' src={`http://localhost:3000/uploads/${brand.product_folder}/{}`} />
                        )
                        )
                    ) : (
                        <></>
                    )}
                </Carousel>
            </Image.PreviewGroup>
        </div>
    )
}

export default ProductImg;
