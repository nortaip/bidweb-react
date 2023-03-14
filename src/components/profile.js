import { Carousel, Space } from 'antd';
import img from '../imgs/Profile-original.jpg';
import LogoSalon from '../imgs/Image.jpg'
import Up from '../imgs/icons/up.svg'
import vip from '../imgs/icons/VIP.svg'
import pro from '../imgs/icons/Increase-Brightness.svg'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    with: '100%'
};
const ProfileMain = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <>
            <Carousel onChange>
                <img src={img} style={contentStyle} alt='Banner' />
            </Carousel>
            <div className='container'>
                <div className='fsvghd'>
                    <img src={LogoSalon} className='jbvdsd' />
                    <div className='hhdSsfaq'>
                        <h3>Hongqi Azərbaycan</h3>
                        <h5>"Hongqi" brendinin Azərbaycanda rəsmi distribütoru "Cahan Motors" şirkətidir.</h5>
                    </div>
                </div>

                <div className='container sdssfhg'>
                    {/* <div className='kbcvbhsd-left'>
                        <div className='ndhsbdf ireli'>
                            <img src={Up} alt='icon' />
                            <div className='asdfgc'>
                                <h3>Elanı irəli çəkmək</h3>
                                <h5 className='sllda'>Elanınız son elanlar bölməsində və axtarış nəticələrində birinci yerə qalxacaq.</h5>
                            </div>
                        </div>
                        <div className='ndhsbdf VIP'>
                            <img src={vip} alt='icon' />
                            <div className='asdfgc'>
                                <h3>VIP et</h3>
                                <h5 className='sllda'>Elanınız ana səhifədəki və axtarış nəticələrindəki VIP bölməsində təsadüfi qaydada göstəriləcək.</h5>
                            </div>
                        </div>
                        <div className='ndhsbdf Pro'>
                            <img src={pro} alt='icon' />
                            <div className='asdfgc'>
                                <h3>Premium et</h3>
                                <h5 className='sllda'>Sizin elan saytın ana səhifəsində xüsusi ayrılmış blokda görünəcək və xidmətin aktivlik müddətinin sonunadək orada qalacaq.</h5>
                            </div>
                        </div>
                    </div> */}
                    <div className='kbcvbsd-left'>
                        <div className='ndhsbdf '>
                            <div className='asdfgc'>
                                <h3>Elanlarım</h3>
                                <h5 className='secondary Bold'>Business management service</h5>
                            </div>
                        </div>
                        <div className='ndhsbdf '>
                            <div className='asdfgc'>
                                <h3>Acount information</h3>
                                <h5 className='secondary Bold'>Profile photo, name</h5>
                            </div>
                        </div>
                        <div className='ndhsbdf '>
                            <div className='asdfgc'>
                                <h3>Change pasword</h3>
                                <h5 className='secondary Bold'>Security </h5>
                            </div>
                        </div>
                    </div>
                    <div className='kbcvbsd-left'>
                        <div className='ndhsbdf '>
                            <div className='asdfgc'>
                                <h3>Notication</h3>
                                <h5 className='secondary Bold'>Notication</h5>
                            </div>
                        </div>
                        <div className='ndhsbdf '>
                            <div className='asdfgc'>
                                <h3>Izlediyin Salonlar</h3>
                                <h5 className='secondary Bold'>Salon</h5>
                            </div>
                        </div>
                        <div className='ndhsbdf '>
                            <div className='asdfgc'>
                                <h3>Like</h3>
                                <h5 className='secondary Bold'>Liked Product </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileMain;