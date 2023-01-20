import { Carousel } from 'antd';
import img from '../imgs/Banner.jpg';
import img2 from '../imgs/Banner2.jpg';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const App = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel className='container' autoplay>
            <div>
                <img src={img} style={contentStyle} alt='Banner' />
            </div>
            <div>
                <img src={img2} style={contentStyle} alt='Banner' />
            </div>
        </Carousel>
    );
};
export default App;