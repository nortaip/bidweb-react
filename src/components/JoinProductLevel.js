import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "./Api/Data"
import { Tag, Statistic} from 'antd';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined,
} from '@ant-design/icons';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

function JoinProductLevel() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)
    const onFinish = () => {
        console.log('finished!');
    };
    const onChange = (val) => {
        if (val && 4.95 * 1000 < val && val < 5 * 1000) {
            console.log('changed!');
        }
    };
    return (
        <>
            <div className="jgfdt">
                <div className="price" >
                    <div className="dfgjmes">
                        <h2 className="Price Bold">₼{P.price}/</h2>
                        <h5 className="currentbid semiBold">current bid</h5>
                    </div>
                    <div className="gfhdfhgd">
                        <h5 className="str-prc">₼{P.strPrice}</h5>
                        <h6 className="startprice">start price</h6>
                    </div>
                </div>
                <div>
                    <Tag icon={<CheckCircleOutlined />} color="success">
                        success
                    </Tag>
                    {/* <Tag icon={<SyncOutlined spin />} color="processing">
                            processing
                        </Tag>
                        <Tag icon={<CloseCircleOutlined />} color="error">
                            error
                        </Tag>
                        <Tag icon={<ExclamationCircleOutlined />} color="warning">
                            warning
                        </Tag>
                        <Tag icon={<ClockCircleOutlined />} color="default">
                            waiting
                        </Tag>
                        <Tag icon={<MinusCircleOutlined />} color="default">
                            stop
                        </Tag> */}
                </div>
            </div>
        </>
    )
}

export default JoinProductLevel