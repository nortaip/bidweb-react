import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-carousel-minimal';
import axios from 'axios';
import { CONN_KEY } from "../../Conn";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${CONN_KEY}getimgsPostId.php?post_id=${productId}`;
                const response = await axios.get(apiUrl);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [productId]);

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <div className="App">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <div style={{ padding: '0 20px' }}>
                        <Carousel
                            data={data.map(item => ({
                                image: `${CONN_KEY}uploads/${item.folder_name}/${item.image_name}`,
                                caption: item.caption
                            }))}
                            time={2000}
                            width="1200px"
                            height="400px"
                            radius="10px"
                            slideNumberStyle={slideNumberStyle}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            thumbnails={true}
                            thumbnailWidth="100px"
                            style={{
                                textAlign: 'center',
                                maxWidth: '850px',
                                maxHeight: '500px',
                                margin: '40px auto',
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
