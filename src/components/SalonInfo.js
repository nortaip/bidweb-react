import { Carousel } from 'antd';
import LogoSalon from '../imgs/LogoSalon.png'
import phone from '../imgs/icons/phone.svg'
import location from '../imgs/icons/location.svg'
import watch from '../imgs/icons/watch.svg'
import eye from '../imgs/icons/eye.svg'


const Salonheader = () => {

    return (
        <>
            <div className='container'>
                <div className='fsvghd'>
                    <img src={LogoSalon} className='jbvdsd' />
                    <div className='jbvdsdsghvg '>
                        <div className='sfassvdd '>
                            <img src={phone} alt='icon'/>
                            <h5 className='sjfvcd secondary Regular'>(055) 444-55-44</h5>
                        </div>
                        <div className='sfassvdd'>
                            <img src={location} alt='icon'/>
                            <h5 className='sjfvcd secondary Regular'>Bakı ş., Xətai r., Babək pr., 21/99 (Cahan Motors)</h5>
                        </div>
                        <div className='sfassvdd'>
                            <img src={watch}alt='icon' />
                            <h5 className='sjfvcd secondary Regular'>Hər gün: 09:00–18:00</h5>
                        </div>
                    </div>
                </div>

                <div className='kbcvbsd'>
                    <div className='hhdSsfaq'>
                        <h3>Hongqi Azərbaycan</h3>
                        <h5>"Hongqi" brendinin Azərbaycanda rəsmi distribütoru "Cahan Motors" şirkətidir.</h5>
                    </div>
                    <div className='jkhjasd'>
                        <div className='sfassvdd'>
                            <img src={eye} alt='icon'/>
                            <span>39 046</span>
                        </div>
                        <span>10 elan</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Salonheader;