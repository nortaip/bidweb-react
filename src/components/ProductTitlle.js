import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { PhoneFilled } from '@ant-design/icons';
import { Button, Badge } from 'antd';

function ProductTitle() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <div className="gdgf-left">
                <div className="e1113_11586">
                    <div className="e1113_11587">
                        <div className="e1126_12355">
                            <h5 className="e1113_11588 secondary">Qiymət</h5>
                            <h3 className="e1113_11589 Bold ">{P.price} ₼</h3>
                        </div>
                        <div className="Condition">
                            <h6 className="Regular">Condition</h6>
                            <h5 className="SemiBold">{P.Condition}</h5>
                        </div>
                    </div>
                    <div className="e1113_11587">
                        <div className="e1126_12355">
                            <h5 className="e1113_11592 secondary">mülkiyyətçi</h5>
                            <div className="e1113_11593">
                                <h3 className="e1113_11594 Bold">Xəyal</h3>
                                <span className='Checked'></span>
                            </div>
                        </div>
                        <div className="e1126_12355">
                            <h5 className="e1113_11592 secondary">Elan Nömrəsi</h5>
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
                        <Button className='btn-phone' type="primary" icon={<PhoneFilled />}>{P.Phone}</Button>
                        <span className="e1113_11616">Satıcıya elanı Bidex.az saytında tapdığınızı bildirin</span>
                    </div>
                </div>
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
                    <h5 className="e1113_11628 secondary">Baxışların sayı: 1220</h5>
                    <h5 className="e1113_11629 secondary">Yeniləndi: 30 Yanvar 2023</h5>
                </div>
            </div>
        </>
    )
}

export default ProductTitle