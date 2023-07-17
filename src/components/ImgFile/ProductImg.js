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
  const [folderName, setFoldername] = useState('');

  useEffect(() => {
    const apiUrl = `${CONN_KEY}sellimg.php?post_id=${productId}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const { folderName } = response.data;
        setFoldername(folderName); // Assuming you have a state variable named folderName
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);


  useEffect(() => {
    const apiUrl = `${CONN_KEY}getimgsPostId.php?folder_name=${folderName}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [folderName]);

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
                <SwiperSlide key={item.id}>
                  <Image.PreviewGroup>
                    <Image
                      style={{
                        width: '100%',
                        height: '450px',
                      }}
                      src={`${CONN_KEY}uploads/${item.folder_name}/${item.image_name}`}
                      onClick={() => setVisible(true)}
                    />
                  </Image.PreviewGroup>
                  <div
                    className="image-slide"
                    style={{
                      backgroundImage: `url(${CONN_KEY}uploads/${item.folder_name}/${item.image_name})`,
                      WebkitFilter: 'blur(90px) brightness(1)',
                      backdropFilter: 'blur(30px)',
                      backgroundSize: '50%',
                      // opacity: '0.55',
                      // width: '100%',
                      // height: '450px',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
