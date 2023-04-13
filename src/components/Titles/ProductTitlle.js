import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { Button, Tooltip } from 'antd';
import Phone from '../../imgs/icons/PhoneRounded.svg';
import axios from 'axios';
import SkeletonM from '../Skeletons/skaletonProduct';
import TableSalon from '../Tables/TableSalon';

function ToUP(props) {
    if (props.isVisible) {
        return <div className="e1113_11602">
            <h4 className="e1113_11605">Irəli cək</h4>
        </div>;
    } else {
        return;
    }
}
function VİP(props) {
    if (props.isVisible) {
        return <div className="e1113_11606">
            <h4 className="e1113_11605">VİP</h4>
        </div>;
    } else {
        return;
    }
}
function Prem(props) {
    if (props.isVisible) {
        return <div className="e1113_1160643">
            <h4 >Premium</h4>
        </div>;
    } else {
        return;
    }
}
function MySalon(props) {
    if (props.isVisible) {
        return <TableSalon/> ;
    } else {
        return;
    }
}

function ProductTitle() {
    // const [visible, setVisible] = useState(false);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost/tu/api/sellimg.php?id=${productId}`;
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [productId]);

    const text = <span>Modelin qiymətləndirilməsi</span>;
    return (
        <>{isLoading ? (
            <SkeletonM />
        ) : (
            <div className="gdgf-left">
                <div className="e1113_11586">
                    <div className="e1113_11587">
                        <div className="e1126_12355">
                            <h4 className="e1113_11588 secondary">Qiymət</h4>
                            <h3 className="e1113_11589 Bold ">{data.Price} ₼</h3>
                        </div>
                        <div className="Condition">
                            <h4 className="Regular">Condition</h4>
                            <div className='condin'>
                                <h3 className="SemiBold">{data.id}</h3>
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
                        <ToUP isVisible={data.to_up} />
                        <VİP isVisible={data.vip} />
                        <Prem isVisible={data.prem} />
                    </div>
                    <div className="e1113_11610">
                        <Button className='btn-phone' type="primary" icon={<img src={Phone} alt='icon' />}>{data.Price}</Button>
                        <span className="e1113_11616">Satıcıya elanı Bidex.az saytında tapdığınızı bildirin</span>
                    </div>
                </div>
                <MySalon isVisible={data.Salon} />
                <div className="e1113_11627">
                    <h4 className="e1113_11628 secondary">Baxışların sayı: 1220</h4>
                    <h4 className="e1113_11629 secondary">Yeniləndi: {data.created_at}</h4>
                </div>
                {/* <Hashtags /> */}
            </div>
        )}
        </>
    )
}

export default ProductTitle