import '../../App.css';
import React, { useState } from 'react';
import { Form, Select, AutoComplete, Button, Space, Input, Checkbox, Radio, InputNumber, Col, Row, } from 'antd';
import ImgUpload from '../ImgFile/ImgUpload';
import axios from 'axios';

function Filter() {
    const [inputs, setInputs] = useState([]);
    const [options, setOptions] = useState([]);
    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const onFinish = (values) => {
        try {
            console.log('Received values of form: ', values);
            axios.post('http://localhost/tu/api/sell.php', values).then(function (response) {
                console.log(response.data);
            });
        }
        catch (errInfo) {
            console.log('Error-:', errInfo);
        }

    };

    const onReset = () => {
        Form.resetFields();
    };
    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    return (
        <div className="container ">
            <Form
                onFinish={onFinish}
                className="login-form container"
                initialValues={{
                    remember: true,
                }}
                name='sell'
                layout="vertical"
                onFinishFailed={onFinishFailed}
            >
                <Form.List >
                    {(fields, { add, remove }) => (
                        <div className='asfgcv'>
                            {/* Marka,model,add+ */}
                            <Row>
                                <Col span={8}>
                                    <Form.Item
                                        name="Marka"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <Input
                                            placeholder="Marka"
                                            mode="multiple"
                                            size="large"
                                            name="Marka"
                                            onChange={handleChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="Model"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <Input
                                            placeholder="Model"
                                            mode="multiple"
                                            size="large"
                                            name="Model"
                                            onChange={handleChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="Nesil"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <Input
                                            placeholder="Nesil"
                                            mode="multiple"
                                            size="large"
                                            name="Nesil"
                                            onChange={handleChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {/* Mühərrikin həcmı , VIN-kod*/}
                            <Row>
                                <Col span={8}>
                                    <Form.Item
                                        name='mhhec'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                width: '100%',
                                            }}
                                            className='inputfilter'
                                            size="large"
                                            placeholder="Mühərrikin həcmı . sm3"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="mhguc"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                width: '100%',
                                            }}
                                            className='inputfilter'
                                            size="large"
                                            placeholder="mühərrikin gücü ag"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="VIN"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                width: '100%',
                                            }}
                                            className='inputfilter'
                                            size="large"
                                            placeholder="VIN-kod"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {/* il , Yanacaq növü ,suret */}
                            <Row>
                                <Col span={8}>
                                    <Form.Item
                                        name='year'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                width: '100%',
                                            }}
                                            className='inputfilter'
                                            size="large"
                                            placeholder="Ili"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Yanacaq növü"
                                        name='Yanacaq'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}>
                                        <Radio.Group size="large" buttonStyle="solid" >
                                            <Radio.Button value="Benzin" onChange={handleChange}>Benzin</Radio.Button>
                                            <Radio.Button value="Dizel" onChange={handleChange}>Dizel</Radio.Button>
                                            <Radio.Button value="Electrik" onChange={handleChange}>Electrik</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                {/* <Col span={8}>
                                    <Form.Item
                                        mode="multiple"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{
                                            width: '100%',
                                        }}>
                                        <Select
                                            placeholder="Surətlər qutusu"
                                            mode="multiple"
                                            // className='inputfilter'
                                            size="large"
                                            name="Surətlər"
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'Mexaniki',
                                                    label: 'Mexaniki',
                                                },
                                                {
                                                    value: 'Avtomatik',
                                                    label: 'Avtomatik',
                                                },
                                                {
                                                    value: 'Robot',
                                                    label: 'Robot',
                                                },
                                                {
                                                    value: 'Dəyişən Sürətlər',
                                                    label: 'Dəyişən Sürətlər',
                                                },

                                            ]}
                                        />
                                    </Form.Item>
                                </Col> */}
                            </Row>
                            {/* Əlavə məlumat */}
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        name='elave'
                                        style={{
                                            width: '100%',
                                        }}>
                                        <Input placeholder='Əlavə məlumat' size='large' mode="multiple" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {/* Rəngin sec Buttons */}
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        name='color'
                                        style={{
                                            width: '100%',
                                        }}>
                                        <Input
                                            style={{
                                                width: '100%',
                                            }}
                                            size="large"
                                            placeholder="rengi"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {/* Vəziyyəti */}
                            <Row>
                                <h3 className='Bold'>Vəziyyəti</h3>
                                <Space >
                                    <Col span={12}>
                                        <Form.Item
                                            
                                            name='Vuruğu'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                value="A"
                                                name='Vuruğu'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Vuruğu var
                                            </Checkbox></Form.Item>
                                            <p className='psell Medium'>Bir və ya bir necə detalı dəyişdirilib və ya təmir olunub</p>
                                        
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            
                                            name='Rənglənib'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                value="G"
                                                name='Rənglənib'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Rənglənib
                                            </Checkbox> </Form.Item>
                                            <p className='psell Medium'>Bir vı ya bir neçə detalı rənglənib və ya kosmetik işlər görülüb</p>
                                       
                                    </Col>
                                    <Col span={12}>
                                        <Checkbox
                                            value="c"
                                            name='Qəzalı'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Qəzalı
                                        </Checkbox>
                                        <p className='psell Medium'>Təmirə ehtiyacı var və ya ümumiyyətlə yararsız vəzyətdədir</p>
                                    </Col>
                                    <Col span={12}>
                                        <Checkbox
                                            value="O"
                                            name='Kredit'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Kredit
                                        </Checkbox>
                                    </Col>
                                    <Col span={12}>
                                        <Checkbox
                                            value="F"
                                            name='Barter'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Barter
                                        </Checkbox>
                                    </Col>
                                </Space>
                            </Row>
                            {/* Təchizatı */}
                            <Row>
                                <h3 className='Bold'>Təchizatı</h3>
                                <Col span={24}>
                                    <Space>
                                        <Space direction='vertical'>
                                            <Checkbox
                                                value="A"
                                                name='Yüngüllehimlidisklər'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Yüngül lehimli disklər
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Mərkəziqapanma'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Mərkəzi qapanma
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Dərisalon'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Dəri salon
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Oturacaqların-ventilyasiyası'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Oturacaqların ventilyasiyası
                                            </Checkbox>
                                        </Space>
                                        <Space direction='vertical'>
                                            <Checkbox
                                                value="A"
                                                name='ABS'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                ABS
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Park'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Park radarı
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Ksenon'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Ksenon lampalar
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Kamerauc'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                360 kamera
                                            </Checkbox>
                                        </Space>
                                        <Space direction='vertical'>
                                            <Checkbox
                                                value="A"
                                                name='Lyuk'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Lyuk
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Kondisioner'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Kondisioner
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='ArxaKamera'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Arxa görüntü kamerası
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='Multi'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Multi rull
                                            </Checkbox>
                                        </Space>
                                        <Space direction='vertical'>
                                            <Checkbox
                                                value="A"
                                                name='Yağış-s'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Yağış sensoru
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='kruiz'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Avtonom kruiz kontrol
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='O-İ'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Oturacaqların isidilməsi
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                name='YanP'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Yan pərdələr
                                            </Checkbox>
                                        </Space>
                                    </Space>
                                </Col>
                            </Row>

                            {/* İmg add*/}
                            <ImgUpload />

                            {/* Vip premium Chat */}
                            <Row>
                                <h3 className='Bold'>Əlavə seçimlər</h3>
                                <Col span={24}>
                                    <Space>
                                        <Checkbox
                                            value="3"
                                            name='Premium'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Premium elan
                                        </Checkbox>
                                        <Checkbox
                                            value="6"
                                            name='UP'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Elanı irəli çəkmək
                                        </Checkbox>
                                        <Checkbox
                                            value="8"
                                            name='VIP'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            VIP et
                                        </Checkbox>
                                        <Checkbox
                                            value="5"
                                            name='Chat'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                            disabled
                                        >
                                            Çat
                                        </Checkbox>
                                        <Checkbox
                                            value="2"
                                            name='Avto-reistis'
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                            disabled
                                        >
                                            Avtomatik reististlər (kayıt məmurları)
                                        </Checkbox>
                                    </Space>
                                </Col>
                            </Row>

                            {/* Buttons */}
                            <div className=' asfgcvxd'>
                                {/* Bottons*/}
                                <Button htmlType="button" onClick={onReset}>
                                    Reset
                                </Button>
                                <Button htmlType="submit" type="primary">
                                    Axtar
                                </Button>
                            </div>

                        </div>
                    )}
                </Form.List>
            </Form>
        </div >
    );
}

export default Filter;