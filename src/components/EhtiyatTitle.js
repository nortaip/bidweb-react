import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "./Api/Ehtiyat"
import { PhoneFilled } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import TableSalon from './TableSalon';
import Phone from '../imgs/icons/PhoneRounded.svg';

function EhtiyatTitle() {
    const [visible, setVisible] = useState(false);
    const { Id } = useParams()
    const P = productsData.find(prod => prod.id === Id)
    const text = <span>Modelin qiymətləndirilməsi</span>;
    return (
        <>
            <div className="gdgf-left">
                <div className="e1113_11586">
                    <div className="e1113_11587">
                        <div className="e1126_12355">
                            <h4 className="e1113_11588 secondary">Qiymət</h4>
                            <h3 className="e1113_11589 Bold ">{P.price} ₼</h3>
                        </div>
                        <div className="Condition">
                            <h4 className="Regular">Condition</h4>
                            <div className='condin'>
                                <h3 className="SemiBold">{P.Condition}</h3>
                                <Tooltip placement="right" title={text} >
                                    <span className='Help_Icon'></span>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className="e1113_115872">
                        <div className="e1126_12355">
                            <h4 className="e1113_11592 secondary">mülkiyyətçi</h4>
                            <div className="e1113_11593">
                                <h3 className="e1113_11594 Bold">Xəyal</h3>
                                <span className='Checked'></span>
                            </div>
                        </div>
                        <div className="e1126_12355">
                            <h4 className="e1113_11592 secondary">Elan Nömrəsi</h4>
                            <div className="e1113_11599">
                                <span className="e1113_11600">#-7127450</span>
                            </div>
                        </div>
                    </div>
                    <div className="e1113_11617">
                        <div className="e1113_11602">
                            <h4 className="e1113_11605">Popular</h4>
                        </div>
                        <div className="e1113_11606">
                            <h4 className="e1113_11605">Best Deals</h4>
                        </div>
                    </div>
                    <div className="e1113_11610">
                        <Button className='btn-phone' type="primary" icon={<img src={Phone} alt='icon' />}>{P.Phone}</Button>
                        <span className="e1113_11616">Satıcıya elanı Bidex.az saytında tapdığınızı bildirin</span>
                    </div>
                </div>
                <TableSalon />
                <div className="e1113_11617">
                    <div className="Hash">
                        <h4 className="SemiBold">#Nəsimi</h4>
                    </div>
                    <div className="Hash">
                        <h4 className="SemiBold">#E3</h4>
                    </div>
                    <div className="Hash">
                        <h4 className="SemiBold">#Bmw</h4>
                    </div>
                    <div className="Hash">
                        <h4 className="SemiBold">#Nəsimi</h4>
                    </div>
                </div>
                <div className="e1113_11627">
                    <h4 className="e1113_11628 secondary">Baxışların sayı: 1220</h4>
                    <h4 className="e1113_11629 secondary">Yeniləndi: 30 Yanvar 2023</h4>
                </div>
            </div>

        </>
    )
}

export default EhtiyatTitle