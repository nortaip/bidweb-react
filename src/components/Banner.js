import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../imgs/Banner.jpg';
import banner2 from '../imgs/Banner2.jpg';

function UncontrolledExample() {
    return (
        <Carousel className='Banner'>
            <Carousel.Item>
                <img
                    className="banner-img d-block w-100"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="banner-img d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
}

export default UncontrolledExample;