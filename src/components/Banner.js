// import { Carousel } from 'react-responsive-carousel'
import banner from '../imgs/Banner.jpg';
import banner2 from '../imgs/Banner2.jpg';

function UncontrolledExample() {
    return (
        // <Carousel>
        <>
            <div>
                <img
                    className="banner-img d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
            </div>
            <div>
                <img
                    className="banner-img d-block w-100"
                    src={banner}
                    alt="First slide"
                />
            </div>
            {/* </Carousel> */}
        </>
    );
}

export default UncontrolledExample;