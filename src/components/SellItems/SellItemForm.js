import '../../App.css';
import { Form, Select, Upload, Button, Space, Input, Checkbox, Radio, InputNumber, Col, Row, Modal, message, Alert, } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import kredit from "../../imgs/icons/kredit.svg"
import barter from "../../imgs/icons/barter.svg"
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

function SellingItem() {
    const [inputs, setInputs] = useState([]);
    const [brands, setBrands] = useState([]);
    const [Year, setYear] = useState([]);

    const [form] = Form.useForm();


    useEffect((brand) => {
        fetch('http://localhost/tu/api/brand_name.php')
            .then(response => response.json())
            .then(data => {
                // İlk veri seti burada state'e atanır
                setBrands(data);
            });
        // İkinci endpoint'ten veri çekme işlemi
        fetch('http://localhost/tu/api/yearGet.php')
            .then(response => response.json())
            .then(data => {
                // İkinci veri seti burada state'e atanır
                setYear(data);
            });
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };
    const onFinish = (values) => {
        try {
            console.log('Received values of form: ', values);
            axios.post('http://localhost/tu/api/sell.php', values).then(function (response) {
                console.log(response.data);
                // navigate('/');
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
        message.error('Müvafiq sahələr boş qala bilməz!');
    };

    const navigate = useNavigate();

    useEffect((brands) => {
        fetch('http://localhost/tu/api/brand_name.php')
            .then(response => response.json())
            .then(data => {
                // İlk veri seti burada state'e atanır
                setBrands(data);
            });

        // İkinci endpoint'ten veri çekme işlemi
        fetch('http://localhost/tu/api/yearGet.php')
            .then(response => response.json())
            .then(data => {
                // İkinci veri seti burada state'e atanır
                setYear(data);
            });
    }, []);

    return (
        <div className="container ">
            <Form
                onFinish={onFinish}
                className="login-form container"
                initialValues={{
                    remember: true,
                }}
                encType="multipart/form-data"
                layout="vertical"
                onFinishFailed={onFinishFailed}
            >
                {(fields, { add, remove }) => (
                    <Space direction="vertical"
                        style={{
                            width: '100%',
                        }}
                    >
                        <Space direction="vertical" size='large'>
                            <div style={{ gap: "10" }}>
                                {/* Marka,model,add+ */}
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Marka"
                                            name="Marka"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Markanı secin',
                                                },
                                            ]}
                                        >
                                            <Select
                                                name="Marka"
                                                size='large'
                                                placeholder="Mersedes"
                                            >
                                                {brands.map(brand => (
                                                    <Option key={brand.brand_name} value={brand.brand_name}>
                                                        {brand.brand_name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Model"
                                            name="Model"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Modeli secin',
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
                                                    message: 'Xaiş edirik Nəsili secin',
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
                                                    message: 'Xaiş edirik Mühərrikin həcmıni boş saxlamayın',
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
                                                    message: 'Xaiş edirik Mühərrikin gücünü boş saxlamayın',
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
                                                    message: 'Xaiş edirik VIN-kodu boş saxlamayın',
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '100%',
                                                }}
                                                name="VIN-kod"
                                                size="large"
                                                placeholder="№ 000000***00"
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
                                                    message: 'Xaiş edirik ilini secin',
                                                },
                                            ]}
                                        >
                                            <Select
                                                label="İL"
                                                name='CYear'
                                                size='large'
                                                placeholder="İL"
                                            >
                                                {Year.map(brand => (
                                                    <Option key={brand.id} value={brand.name}>
                                                        {brand.brand_name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Yanacaq növü"
                                            name='Yanacaq'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Yanacaq növünü boş saxlamayın',
                                                },
                                            ]}
                                        >
                                            <Select
                                                name='Yanacaq'
                                                size="large"
                                                placeholder="Benzin"
                                                options={[
                                                    {
                                                        value: 'Benzin',
                                                        label: 'Benzin',
                                                    },
                                                    {
                                                        value: 'Dizel',
                                                        label: 'Dizel',
                                                    },
                                                    {
                                                        value: 'Electrik',
                                                        label: 'Electrik',
                                                    }
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Sürətlər qutusu"
                                            name="Suret"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Sürətlər qutusunu boş saxlamayın',
                                                },
                                            ]}
                                        >
                                            <Select
                                                name="Suret"
                                                size="large"
                                                placeholder="Avtomatik"
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
                                                    }
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>

                                </Row>

                                {/* Rəng ,Yürüş */}
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Rəngi"
                                            name='color'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Rəngi secin',
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
                                            label="Oturacağ sayı"
                                            name="People"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Select
                                                name="People"
                                                size="large"
                                                placeholder="7 Nəfər"
                                                options={[
                                                    {
                                                        value: '2',
                                                        label: '2',
                                                    },
                                                    {
                                                        value: '5',
                                                        label: '5',
                                                    },
                                                    {
                                                        value: '7',
                                                        label: '7',
                                                    },
                                                    {
                                                        value: '8',
                                                        label: '8+',
                                                    },

                                                ]}

                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                {/* Əlavə məlumat, qiymət ,Ötürücü */}
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Ötürücü"
                                            name="Gear"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Ötürücünü boş saxlamayın',
                                                },
                                            ]}
                                        >
                                            <Select
                                                name="Gear"
                                                size="large"
                                                placeholder="Arxa"
                                                options={[
                                                    {
                                                        value: 'Ön',
                                                        label: 'Ön',
                                                    },
                                                    {
                                                        value: 'Arxa',
                                                        label: 'Arxa',
                                                    },
                                                    {
                                                        value: '4x4 & Tam',
                                                        label: '4x4 & Tam',
                                                    }
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Qiymət"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Qiymeti boş saxlamayın',
                                                },
                                            ]}
                                            extra={<span><SmileOutlined />  Qeyd edek ki qiymət yalnız AZN ile yazılmalıdır!</span>}
                                            name='Price'
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
                                                name='Price'
                                                placeholder="13 000 AZN"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Əlavə məlumat"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Xaiş edirik Əlavə məlumatı boş saxlamayın',
                                                },
                                            ]}
                                            name='elave'
                                        >
                                            <Input.TextArea allowClear showCount placeholder='Əlavə məlumat' onChange={handleChange} size='large' name='elave' mode="multiple" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                            {/* Vəziyyəti */}
                            <Row>
                                <Space direction="vertical">
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
                                </Space>
                            </Row >

                            {/* Təchizatı */}
                            <Row>
                                <h3 className='Bold'>Təchizatı</h3>
                                <Col span={24} style={{ marginTop: 12, width: 10 }}>
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
                                        <Space direction='vertical'>
                                            <Form.Item name="Kruiz" valuePropName="checked" noStyle>
                                                <Checkbox>kruiz</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Barter" valuePropName="checked" noStyle>
                                                <Checkbox>Barters</Checkbox>
                                            </Form.Item>
                                            <Form.Item name="Kredit" valuePropName="checked" noStyle>
                                                <Checkbox>Kredit</Checkbox>
                                            </Form.Item>
                                        </Space>
                                    </Space>
                                </Col>
                            </Row>

                            {/* İmg add*/}
                            <Space direction="vertical"
                                size='middle'
                                style={{
                                    width: '100%',
                                }}>
                                <h2>Foto qalereya</h2>
                                <Alert message="25-a qədər şəkil yükləyə bilərsiniz. Hər bir şəkil 500000 KB-dan kiçik olmalıdır." type="info" />
                                {/* <ImageUploader/> */}
                                <Form.Item
                                    name='file'
                                    extra="Şəkillər yaxşı keyfiyyətdə olmalıdır. Nəqliyyat vasitəsi yaxşı işıqlandırılmış olmalı, şəkillərin üzərində loqotip və digər yazılar olmamalıdır. Skrinşotlar qəbul olunmur."
                                >                                    
                                    <p className="ant-upload-hint">1.Minimum – 5 şəkil (ön, arxa, yan, mator və bütöv ön panelin görüntüsü mütləqdir).</p>
                                    <p className="ant-upload-hint">2.Maksimum – 25 şəkil.</p>
                                    <p className="ant-upload-hint">3.Optimal ölçü – 1024x768 piksel.</p>
                                </Form.Item>
                            </Space>

                            {/* Vip premium Chat */}
                            <Row>
                                <Space direction="vertical">
                                    {/* <Alert message="Əgər heç bir təklif göndərilməmişsə, siz auksionunuzu avtomatik olaraq yenidən siyahıya salmağı (Avtomatik reististlər) seçə bilərsiniz." type="info" showIcon /> */}
                                    <h3 className='Bold'>Əlavə seçimlər</h3>
                                    <Space >
                                        <Col span={24}>
                                            <Form.Item name="prem" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Xüsusi göstərin (Premium elan)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="to_up" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Cəsarətli olun (İrəli çək)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="vip" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Vurğulanmalıdır (Vip et)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="live_chat" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Çat (Yalnız Hərraclarda aktiv edilə bilər)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="Avtoreistis" valuePropName="checked" noStyle>
                                                <Checkbox className='chek h4 Medium'>Avtomatik reististlər (kayıt məmurları)</Checkbox>
                                            </Form.Item>
                                        </Col>
                                    </Space>
                                </Space>
                            </Row >
                        </Space>
                        {/* Buttons */}
                        <div className=' asfgcvxd'>
                            {/* Bottons*/}
                            <Button htmlType="button" block onClick={onReset}>
                                Sahələri Sıfırla
                            </Button>
                            <Button htmlType="submit" block type="primary">
                                Elanı Paylaş
                            </Button>
                        </div>
                    </Space >
                )
                }
            </Form >
        </div >
    );
}

export default SellingItem;