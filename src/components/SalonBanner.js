import { Carousel } from 'antd';
import img from '../imgs/Salon-header.jpg';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    with: '100%'
};
const SalonBanner = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel onChange>
            <img src={img} style={contentStyle} alt='Banner' />
        </Carousel>
    );
};
export default SalonBanner;