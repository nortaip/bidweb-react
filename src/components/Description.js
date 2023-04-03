import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { Divider, Typography } from 'antd';
import axios from 'axios';
const { Paragraph, Text } = Typography;

function Descriptions() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost/tu/api/sellimg.php?id=${productId}`;
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [productId]);
    return (
        <>
            <div className='Desc'>
                <Divider orientation="left" orientationMargin="0">
                    Descriptions
                </Divider>
                <Text className='container'>
                    {data.elave}
                </Text >
            </div>
        </>
    )
}

export default Descriptions