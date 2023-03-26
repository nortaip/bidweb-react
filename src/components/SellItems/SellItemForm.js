import '../../App.css';
import React, { useState } from 'react';
import { Form, Select, AutoComplete, Button, Space, Input, Checkbox, Radio, InputNumber, Col, Row, Popover } from 'antd';
import ImgUpload from '../ImgFile/ImgUpload';
import axios from 'axios';

function Filter() {
    const [inputs, setInputs] = useState([]);
    const [options, setOptions] = useState([]);
    // const onSelect = (data) => {
    //     console.log('onSelect', data);
    // };


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        setInputs(values => ({ ...values, [name]: value, checked }));
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
                name="normal_login"
                layout="vertical"
                onFinishFailed={onFinishFailed}
            >
                <Form.List
                    style={{
                        width: '100%',
                    }}>
                    {(fields, { add, remove }) => (
                        <Space direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >

                            {/* Marka,model,add+ */}
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Form.Item
                                        label="Marka"
                                        name="Marka"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
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
                                        label="Model"
                                        name="Model"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}

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
                                        label="Nəsil"
                                        name="Nesil"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
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
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Form.Item
                                        label="Mühərrikin həcmı"
                                        name='Mhhec'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}

                                    >
                                        <InputNumber
                                            style={{
                                                width: '100%',
                                            }}
                                            size="large"
                                            name='Mhhec'
                                            placeholder="sm3"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Mühərrikin gücü"
                                        name="mhguc"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            style={{
                                                width: '100%',
                                            }}
                                            name="mhguc"
                                            size="large"
                                            placeholder="mühərrikin gücü ag"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="VIN-kod"
                                        name="VIN"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            style={{
                                                width: '100%',
                                            }}
                                            name="VIN-kod"
                                            size="large"
                                            placeholder="mühərrikin gücü ag"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* il , Yanacaq növü ,Sürətlər qutusu*/}
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Form.Item
                                        label="İL"
                                        name='year'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            style={{
                                                width: '100%',
                                            }}
                                            size="large"
                                            placeholder="Ili"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label="Yanacaq növü"
                                        name='Yanacaq'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Radio.Group size="large" buttonStyle="solid" >
                                            <Radio.Button value="Benzin" onChange={handleChange}>Benzin</Radio.Button>
                                            <Radio.Button value="Dizel" onChange={handleChange}>Dizel</Radio.Button>
                                            <Radio.Button value="Electrik" onChange={handleChange}>Electrik</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col span={10}>
                                    <Form.Item
                                        label="Sürətlər qutusu"
                                        name="Suret"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Radio.Group size="large" buttonStyle="solid" >
                                            <Radio.Button value="Mexaniki" onChange={handleChange}>Mexaniki</Radio.Button>
                                            <Radio.Button value="Avtomatik" onChange={handleChange}>Avtomatik</Radio.Button>
                                            <Radio.Button value="Robot" onChange={handleChange}>Robot</Radio.Button>
                                            <Radio.Button value="Dəyişən Sürətlər" onChange={handleChange}>Dəyişən Sürətlər</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* Rəng ,Yürüş,Ötürücü */}
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Form.Item
                                        label="Rəngi"
                                        name='color'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}

                                    >
                                        <Select
                                            name='color'
                                            size="large"
                                            placeholder="Yaş Asfalt"
                                            options={[
                                                {
                                                    value: 'Ağ',
                                                    label: 'Ağ',
                                                },
                                                {
                                                    value: 'Qara',
                                                    label: 'Qara',
                                                },
                                                {
                                                    value: 'Yaş Asfalt',
                                                    label: 'Yaş Asfalt',
                                                },
                                                {
                                                    value: 'Boz',
                                                    label: 'Boz',
                                                },
                                                {
                                                    value: 'Gümüşü',
                                                    label: 'Gümüşü',
                                                },
                                                {
                                                    value: 'Bej',
                                                    label: 'Bej',
                                                },
                                                {
                                                    value: 'Tünd qırmızı',
                                                    label: 'Tünd qırmızı',
                                                },
                                                {
                                                    value: 'Qırmızı',
                                                    label: 'Qırmızı',
                                                },
                                                {
                                                    value: 'Çəhrayı',
                                                    label: 'Çəhrayı',
                                                },
                                                {
                                                    value: 'Narıncı',
                                                    label: 'Narıncı',
                                                },
                                                {
                                                    value: 'Qızılı',
                                                    label: 'Qızılı',
                                                },
                                                {
                                                    value: 'Sarı',
                                                    label: 'Sarı',
                                                },
                                                {
                                                    value: 'Yaşıl',
                                                    label: 'Yaşıl',
                                                },
                                                {
                                                    value: 'Mavi',
                                                    label: 'Mavi',
                                                },
                                                {
                                                    value: 'Göy',
                                                    label: 'Göy',
                                                },
                                                {
                                                    value: 'Bənövşəyi',
                                                    label: 'Bənövşəyi',
                                                },
                                                {
                                                    value: 'Qəhvəyi',
                                                    label: 'Qəhvəyi',
                                                },
                                            ]}

                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Yürüş"
                                        name="March"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            style={{
                                                width: '100%',
                                            }}
                                            name="March"
                                            size="large"
                                            placeholder="Yürüş"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Ötürücü"
                                        name="Gear"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Radio.Group size="large" buttonStyle="solid" >
                                            <Radio.Button value="Ön" onChange={handleChange}>Ön</Radio.Button>
                                            <Radio.Button value="Arxa" onChange={handleChange}>Arxa</Radio.Button>
                                            <Radio.Button value="Tam" onChange={handleChange}>4x4 & Tam</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* Əlavə məlumat */}
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Form.Item
                                        label="Əlavə məlumat"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        name='elave'
                                    >
                                        <Input placeholder='Əlavə məlumat' size='large' name='elave' mode="multiple" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* Vəziyyəti */}
                            <Row>
                                <h3 className='Bold'>Vəziyyəti</h3>
                                <Space >
                                    <Col span={12}>
                                        <Form.Item
                                            name='accent'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                onChange={handleChange}
                                                name='accent'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Vuruğu var
                                            </Checkbox>
                                            <p className='psell Medium'>Bir və ya bir necə detalı dəyişdirilib və ya təmir olunub</p>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name='clored'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                name='clored'
                                                onChange={handleChange}
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Rənglənib
                                            </Checkbox>
                                            <p className='psell Medium'>Bir vı ya bir neçə detalı rənglənib və ya kosmetik işlər görülüb</p>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name='Qezalı'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                name='Qezalı'
                                                onChange={handleChange}
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Qəzalı
                                            </Checkbox>
                                            <p className='psell Medium'>Təmirə ehtiyacı var və ya ümumiyyətlə yararsız vəzyətdədir</p>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name='kredit'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                name='kredit'
                                                onChange={handleChange}
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Kredit
                                            </Checkbox>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name='Barter'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                name='Barter'
                                                onChange={handleChange}
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Barter
                                            </Checkbox>
                                        </Form.Item>
                                    </Col>
                                </Space>
                            </Row>

                            {/* Təchizatı */}
                            <Row gutter={[16, 16]}>
                                <h3 className='Bold'>Təchizatı</h3>
                                <Col span={24}>
                                    <Space>
                                        <Form.Item
                                            name='Alloy'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                name='Alloy'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                                onChange={handleChange}
                                            >
                                                Yüngül lehimli disklər
                                            </Checkbox>
                                        </Form.Item>
                                        <Form.Item
                                            name='CentralLock'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                onChange={handleChange}
                                                name='CentralLock'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Mərkəzi qapanma
                                            </Checkbox>
                                        </Form.Item>
                                        <Form.Item
                                            name='Leather'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                onChange={handleChange}
                                                name='Leather'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Dəri salon
                                            </Checkbox>
                                        </Form.Item>
                                        <Form.Item
                                            name='Seat_vent'
                                            style={{
                                                width: '100%',
                                            }}>
                                            <Checkbox
                                                onChange={handleChange}
                                                name='Seat_vent'
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Oturacaqların ventilyasiyası
                                            </Checkbox>
                                        </Form.Item>
                                        {/* <Space direction='vertical'>
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
                                        </Space> */}
                                    </Space>
                                </Col>
                            </Row>
                            {/* Buttons */}
                            <div className=' asfgcvxd'>
                                {/* Bottons*/}
                                <Button htmlType="button" block onClick={onReset}>
                                    Reset
                                </Button>
                                <Button htmlType="submit" block type="primary">
                                    Axtar
                                </Button>
                            </div>

                        </Space>
                    )}
                </Form.List>
            </Form>
        </div >
    );
}

export default Filter;