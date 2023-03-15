import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import phone from '../../imgs/icons/phone.svg'
import location from '../../imgs/icons/location.svg'
import watch from '../../imgs/icons/watch.svg'
import eye from '../../imgs/icons/eye.svg'
import Data from "../Api/SalonData"
import DataS from "../Api/Salon"

const Salonheader = () => {
    const [visible, setVisible] = useState(false);
    const { Id } = useParams()
    const P = Data.find(prod => prod.id === Id)
    return (
        <>
            <div className='container'>
                <div className='fsvghd'>
                    <img src={P.LogoS} className='jbvdsd' />
                    <div className='jbvdsdsghvg '>
                        <div className='sfassvdd '>
                            <img src={phone} alt='icon' />
                            <h5 className='sjfvcd secondary Regular'>{P.Phone}</h5>
                        </div>
                        <div className='sfassvdd'>
                            <img src={location} alt='icon' />
                            <h5 className='sjfvcd secondary Regular'>{P.Adress}</h5>
                        </div>
                        <div className='sfassvdd'>
                            <img src={watch} alt='icon' />
                            <h5 className='sjfvcd secondary Regular'>{P.Time}</h5>
                        </div>
                    </div>
                </div>

                <div className='kbcvbsd'>
                    <div className='hhdSsfaq'>
                        <h3>{P.Name}</h3>
                        <h5>{P.Desc}</h5>
                    </div>
                    <div className='jkhjasd'>
                        <div className='sfassvdd'>
                            <img src={eye} alt='icon' />
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