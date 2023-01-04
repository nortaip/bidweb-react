import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from '../imgs/Products/shadow.jpg';
import Gear from '../imgs/icons/Gear.svg';
import Vector from '../imgs/icons/Vector.svg';
import people from '../imgs/icons/people.svg';
// import '../App.css';

function KitchenSinkExample() {
    return (
        <Card className="auction-card products-i">
            <div className="header-card">
                <div className="car-name">
                    <p className="text-1">Audi a6</p>
                    <p className="text-2">Sport</p>
                </div>
                <div className="like">
                    <div className="vuesax">
                        <img src="" />
                    </div>
                </div>
            </div>
            <div className="main-card">
                <img src={Car} alt='car' />
                <div className="bedgs">
                    <div className="frame-4-2-7-3-2-0-6-3-4">
                        <div className="badge">
                            <p className="text-5">Aktiv</p>
                        </div>
                        <div className="badge">
                            <img src="" />
                        </div>
                        <div className="badge">
                            <img src="" />
                        </div>
                    </div>
                    <div className="frame-4-2-7-3-2-0-6-3-5">
                        <div className="badge">
                            <img src="" />
                        </div>
                        <div className="badge">
                            <img src="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="spesificationhh">
                <div className="info-card">
                    <img src={Vector} alt='benzin' />
                    <p className="text-1-1">Benzin</p>
                </div>
                <div className="info-card">
                    <img src={Gear} alt='mekanik' />
                    <p className="text-1-2">Mekanik</p>
                </div>
                <div className="info-card">
                    <img src={people} alt='people' />
                    <p className="text-1-4">5 People</p>
                </div>
            </div>
            <div className="footer-card">
                <div className="price">
                    <p className="text-1-5">$30000 </p>
                </div>
                <button className="button">
                    <div className="icon">
                        <p className="text-1-6">JOIN</p>
                    </div>
                </button>
            </div>
        </Card>

    );
}

export default KitchenSinkExample;