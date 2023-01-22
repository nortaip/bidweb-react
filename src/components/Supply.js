import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { Col, Row, Space } from 'antd';
import { PhoneFilled, EnvironmentFilled, CrownFilled, FireFilled, CaretUpFilled } from '@ant-design/icons';

function Supply() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <div className='splyffse'>
                <Row>
                    <Space>
                        <Col>
                            <div className='tagjhd'>
                                <PhoneFilled />
                                <h4>{P.Phone}</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='tagjhd'>
                                <EnvironmentFilled />
                                <h4>{P.location}</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='tagsevsr up'>
                                <CaretUpFilled />
                                <h4>Up</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='tagsevsr vp'>
                                <CrownFilled />
                                <h4>Vip</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='tagsevsr pr'>
                                <FireFilled />
                                <h4>Premium</h4>
                            </div>
                        </Col>
                    </Space>
                </Row>
            </div>
        </>
    )
}

export default Supply