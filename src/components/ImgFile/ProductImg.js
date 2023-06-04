import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { CONN_KEY } from '../../Conn';
import { Image } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

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
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div style={{ padding: '0 20px' }}>
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.image_name}>
                  <Image
                    src={`${CONN_KEY}uploads/${item.folder_name}/${item.image_name}`}
                    style={{
                      width: '100%',
                      height: "100%"
                    }}
                    preview={{
                      visible: false,
                    }}
                    onClick={() => setVisible(true)}
                  />
                  <div
                    style={{
                      display: 'none',
                    }}
                  >
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image
                        src={`${CONN_KEY}uploads/${item.folder_name}/${item.image_name}`}
                      />

                    </Image.PreviewGroup>
                  </div>
                  <div
                    className="image-slide"
                    style={{
                      backgroundImage: `url(${CONN_KEY}uploads/${item.folder_name}/${item.image_name})`,
                      WebkitFilter: 'blur(20px) brightness(0.6)',
                      backdropFilter: 'blur(20px)',
                      backgroundSize: '150%',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
