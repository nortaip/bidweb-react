import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import { InputNumber, message, Statistic, Button, Form, Progress } from 'antd';
import { ButtonGroup } from '@mui/material';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

function AuctionLive() {
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)
    const onFinish = () => {
        console.log('finished!');
    };
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi
            .open({
                type: 'loading',
                content: 'Bid in progress..',
                duration: 2.5,
            })
            .then(() => message.success('Bid in progress success', 2.5))
            .then(() => message.info('Loading finished', 2.5));
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Something went wrong',
        });
    };
    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'Bloced',
        });
    };
    return (
        <>
            <div className='bid'>
                <Countdown className='countdown-title' title="Countdown" value={deadline} onFinish={onFinish} />
                <Progress type="circle" percent={100} format={() => 'Done'} />
                <div className='bid-input-container'>
                    <Form.Item label="your bid" extra="min bid +10 $.">
                        <Form.Item
                            name="Bid-input"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the captcha you got!',
                                },
                            ]}
                        >{contextHolder}
                            <InputNumber
                                prefix="₼"
                                defaultValue={P.price}
                                min={P.price}
                                size="large"
                                className='input-bid'
                                style={{
                                    width: '219px',
                                    // padding: '10px 16px',
                                }}
                                aria-label='sdfsdfs'
                            />
                        </Form.Item>
                    </Form.Item>
                    <ButtonGroup className='btn-group-bid'>
                        <Button size='large' block>Auto</Button>
                        <Button type="primary" block onClick={success} size='large'>Bid Your Price</Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}

export default AuctionLive