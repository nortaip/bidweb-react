import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import productsData from "./Api/Data"
import { Button } from 'antd';

function TableSalon() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)
    const text = <span>Modelin qiymətləndirilməsi</span>;
    return (
        <>
            <div className="gdgf-left">
                <div className="e1113_11610652">
                    <div className="e1113_11dgr435634">
                        <div className="e1126_12355">
                            <h4 className="e1113_11588 secondary">Salon</h4>
                            <h3 className="e1113_11d392 Bold ">Mersedesaze</h3>
                        </div>
                        <div className="e1126_12355">
                            <h4 className="e1113_11588 secondary">Salon Reyting</h4>
                            <div className='rayting'>
                                <div className='a01 Medium'><span>A</span></div>
                                <div className='a02 Medium'><span>A</span></div>
                                <div className='a03 Medium activeA'><span>A</span></div>
                                <div className='a04 Medium'><span>A</span></div>
                                <div className='a05 Medium'><span>A</span></div>
                                {/* <div className='a06 Medium'><span>A</span></div>
                                <div className='a07 Medium'><span>A</span></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="e1113_11dsc2">
                        <span className="e1113_1556">Bakının ilk açilan avtosalonlardan biri "008" avtosalonudur. Biz hər zaman müştərimizə qüsursuz avtomobil sataraq etimadını...</span>
                    </div>
                    <div className="e1113_11617">
                        <div className="e1113_11602">
                            <h4 className="e1113_11605">Popular</h4>
                        </div>
                        <div className="e1113_11606">
                            <h4 className="e1113_11605">Best</h4>
                        </div>
                        <Link target="_blank" to={`/Salon/$511`}>
                            <Button className='btn-phonesa' type="primary">Salona kec</Button>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default TableSalon