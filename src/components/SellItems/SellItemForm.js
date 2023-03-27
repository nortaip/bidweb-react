import '../../App.css';
import React, { useState } from 'react';
import { Form, Select, Upload, Button, Space, Input, Checkbox, Radio, InputNumber, Col, Row, Modal, Alert, } from 'antd';
import ImgCrop from 'antd-img-crop';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

function SellingItem() {
    const [inputs, setInputs] = useState([]);

    const [fileList, setFileList] = useState([

    ]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
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
                                        name='CYear'
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
                                            name='CYear'
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
                                        <Input placeholder='Əlavə məlumat' onChange={handleChange} size='large' name='elave' mode="multiple" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* Vəziyyəti */}
                            <Row>
                                <h3 className='Bold'>Vəziyyəti</h3>
                                <Space >
                                    <Col span={12}>
                                        <Form.Item name="accent" valuePropName="checked" noStyle>
                                            <Checkbox>Vuruğu var</Checkbox>
                                        </Form.Item>
                                        <p className='psell Medium'>Bir və ya bir necə detalı dəyişdirilib və ya təmir olunub</p>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="clored" valuePropName="checked" noStyle>
                                            <Checkbox>Rənglənib</Checkbox>
                                        </Form.Item>
                                        <p className='psell Medium'>Bir vı ya bir neçə detalı rənglənib və ya kosmetik işlər görülüb</p>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="Accd" valuePropName="checked" noStyle>
                                            <Checkbox>Qəzalı</Checkbox>
                                        </Form.Item>
                                        <p className='psell Medium'>Təmirə ehtiyacı var və ya ümumiyyətlə yararsız vəzyətdədir</p>
                                    </Col>
                                </Space>
                            </Row>

                            {/* Təchizatı */}
                            <Row>
                                <h3 className='Bold'>Təchizatı</h3>
                                <Col span={24}>
                                    <Space>
                                        <Space direction='vertical'>
                                            <Form.Item name="Alloy" valuePropName="checked" noStyle>
                                                <Checkbox>Yüngül lehimli disklər</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Centr" valuePropName="checked" noStyle>
                                                <Checkbox>Mərkəzi qapanma</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Leather" valuePropName="checked" noStyle>
                                                <Checkbox>Dəri salon</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Seat_vent" valuePropName="checked" noStyle>
                                                <Checkbox>Oturacaqların ventilyasiyası</Checkbox>
                                            </Form.Item>
                                        </Space>
                                        <Space direction='vertical'>
                                            <Form.Item name="ABS" valuePropName="checked" noStyle>
                                                <Checkbox>ABS</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Park" valuePropName="checked" noStyle>
                                                <Checkbox>Park radarı</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Ksenon" valuePropName="checked" noStyle>
                                                <Checkbox>Ksenon lampalar</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Kamerauc" valuePropName="checked" noStyle>
                                                <Checkbox>360 kamera</Checkbox>
                                            </Form.Item>
                                        </Space>
                                        <Space direction='vertical'>
                                            <Form.Item name="Lyuk" valuePropName="checked" noStyle>
                                                <Checkbox>Lyuk</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Kondisioner" valuePropName="checked" noStyle>
                                                <Checkbox>Kondisioner</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="ArxaKamera" valuePropName="checked" noStyle>
                                                <Checkbox>Arxa görüntü kamerası</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Multi" valuePropName="checked" noStyle>
                                                <Checkbox>Multi rull</Checkbox>
                                            </Form.Item>
                                        </Space>
                                        <Space direction='vertical'>
                                            <Form.Item name="RainSensor" valuePropName="checked" noStyle>
                                                <Checkbox>Yağış sensoru </Checkbox>
                                            </Form.Item>
                                            <Form.Item name="HotSeat" valuePropName="checked" noStyle>
                                                <Checkbox>Oturacaqların isidilməsi</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="YanP" valuePropName="checked" noStyle>
                                                <Checkbox>Yan pərdələr</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="MultiE" valuePropName="checked" noStyle>
                                                <Checkbox>Multi Ektan</Checkbox>
                                            </Form.Item>
                                        </Space>
                                    </Space>
                                </Col>
                            </Row>

                            {/* Vip premium Chat */}

                            {/* İmg add*/}
                            <Space direction="vertical"
                                style={{
                                    width: '100%',
                                }}>
                                <h2>Foto qalereya</h2>
                                <Alert message="22-a qədər şəkil yükləyə bilərsiniz. Hər bir şəkil 500000 KB-dan kiçik olmalıdır." type="info" />
                                <ImgCrop rotationSlider>
                                    <Upload
                                        action="http://localhost/tu/api/sell.php"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onChange={onChange}
                                        onPreview={onPreview}
                                        name='name'
                                    >
                                        {fileList.length < 5 && '+ Upload'}
                                    </Upload>
                                </ImgCrop>
                                {/* <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                    <img
                                        alt="example"
                                        style={{
                                            width: '100%',
                                        }}
                                        src={previewImage}
                                    />
                                </Modal> */}
                                <h5>Şəkillər yaxşı keyfiyyətdə olmalıdır. Nəqliyyat vasitəsi yaxşı işıqlandırılmış olmalı, şəkillərin üzərində loqotip və digər yazılar olmamalıdır. Skrinşotlar qəbul olunmur.</h5>
                            </Space>
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
            </Form >
        </div >
    );
}

export default SellingItem;