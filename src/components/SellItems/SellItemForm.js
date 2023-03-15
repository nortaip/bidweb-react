import '../../App.css';
import React, { useState } from 'react';
import { Form, Select, AutoComplete, Button, Space, Input, Checkbox, Radio, InputNumber, Col, Row, } from 'antd';
import ImgUpload from '../ImgFile/ImgUpload';

function Filter() {
    const [options, setOptions] = useState([]);
    const getPanelValue = (searchText) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    const onSelect = (data) => {
        console.log('onSelect', data);
    };

    const [form] = Form.useForm();
    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            console.log('Submit:', values);
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };

    const handleChange = () => {
        form.setFieldsValue({
            sights: [],
        });
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className="container ">
            <Form
                form={form}
                name="dynamic_form_complex"
                onFinish={onFinish}
                autoComplete="on"
            >
                <Form.List name="sights">
                    {(fields, { add, remove }) => (
                        <div className='asfgcv'>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <Row>
                                    <Col span={24}>
                                        <Space >
                                            <Select
                                                placeholder="Surətlər qutusu"
                                                mode="multiple"
                                                size="large"
                                                style={{
                                                    width: '100%',
                                                }}
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
                                            <AutoComplete
                                                options={options}
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
                                                onSelect={onSelect}
                                                onSearch={(text) => setOptions(getPanelValue(text))}
                                                placeholder="Madel"
                                            />
                                            <AutoComplete
                                                options={options}
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
                                                onSelect={onSelect}
                                                onSearch={(text) => setOptions(getPanelValue(text))}
                                                placeholder="Nəsil"
                                            />
                                        </Space>
                                    </Col>
                                </Row>
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <Row>
                                    <Col span={24}>
                                        <Space >
                                            <Radio.Group size="large" buttonStyle="solid">
                                                <Radio.Button value="a">Benzin</Radio.Button>
                                                <Radio.Button value="b">Dizel</Radio.Button>
                                                <Radio.Button value="c">Electrik</Radio.Button>
                                            </Radio.Group>
                                            <AutoComplete
                                                options={options}
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
                                                onSelect={onSelect}
                                                onSearch={(text) => setOptions(getPanelValue(text))}
                                                placeholder="Madel"
                                            />
                                            <AutoComplete
                                                options={options}
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
                                                onSelect={onSelect}
                                                onSearch={(text) => setOptions(getPanelValue(text))}
                                                placeholder="Nəsil"
                                            />
                                        </Space>
                                    </Col>
                                </Row>
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <Row>
                                    <Col span={24}>
                                        <Space >
                                            <Radio.Group size="large" buttonStyle="solid">
                                                <Radio.Button value="a">Benzin</Radio.Button>
                                                <Radio.Button value="b">Dizel</Radio.Button>
                                                <Radio.Button value="c">Electrik</Radio.Button>
                                            </Radio.Group>
                                            <Radio.Group size="large" buttonStyle="solid">
                                                <Radio.Button value="a">Ön</Radio.Button>
                                                <Radio.Button value="b">Arxa</Radio.Button>
                                                <Radio.Button value="c">4x4</Radio.Button>
                                            </Radio.Group>
                                            <Select
                                                placeholder="Surətlər qutusu"
                                                mode="multiple"
                                                style={{
                                                    width: '100%',
                                                }}
                                                size="large"
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
                                        </Space>
                                    </Col>
                                </Row>


                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <InputNumber min={1} max={1000000000000000000000000000000000n}
                                    style={{
                                        width: '100%',
                                    }}
                                    className='inputfilter'
                                    size="large"
                                    placeholder="Mühərrikin həcmı . sm3"
                                />
                                <InputNumber min={1} max={1000000000000000000000000000000000n}
                                    style={{
                                        width: '100%',
                                    }}
                                    className='inputfilter'
                                    size="large"
                                    placeholder="mühərrikin gücü ag"
                                />
                                <InputNumber min={1} max={1000000000000000000000000000000000n}
                                    style={{
                                        width: '100%',
                                    }}
                                    className='inputfilter'
                                    size="large"
                                    placeholder="VIN-kod"
                                />
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <Row>
                                    <Col span={24}>
                                        <Input
                                            style={{
                                                width: '100%',
                                            }}
                                            size="large"
                                            placeholder="Mühərrikin həcmı . sm3"
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <Row>
                                    <h3 className='Bold'>Vəziyyəti</h3>
                                    <Space >
                                        <Col span={12}>
                                            <Checkbox
                                                value="A"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Vuruğu var
                                            </Checkbox>
                                            <p className='psell Medium'>Bir və ya bir necə detalı dəyişdirilib və ya təmir olunub</p>
                                        </Col>
                                        <Col span={12}>
                                            <Checkbox
                                                value="b"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Rənglənib
                                            </Checkbox>
                                            <p className='psell Medium'>Bir vı ya bir neçə detalı rənglənib və ya kosmetik işlər görülüb</p>
                                        </Col>
                                        <Col span={12}>
                                            <Checkbox
                                                value="c"
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
                                                value="A"
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
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Barter
                                            </Checkbox>
                                        </Col>
                                    </Space>
                                </Row>
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <Row>
                                    <h3 className='Bold'>Təchizatı</h3>
                                    <Col span={24}>
                                        <Space>
                                            <Space direction='vertical'>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Yüngül lehimli disklər
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Mərkəzi qapanma
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Dəri salon
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
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
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    ABS
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Park radarı
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Ksenon lampalar
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
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
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Lyuk
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Kondisioner
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Arxa görüntü kamerası
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
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
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Yağış sensoru
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Kondisioner
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Oturacaqların isidilməsi
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Yan pərdələr
                                                </Checkbox>
                                            </Space>
                                            <Space direction='vertical'>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Avtonom kruiz kontrol
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Kondisioner
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Oturacaqların isidilməsi
                                                </Checkbox>
                                                <Checkbox
                                                    value="A"
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
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <ImgUpload />
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
                                <Row>
                                    <h3 className='Bold'>Əlavə seçimlər</h3>
                                    <Col span={24}>
                                        <Space>
                                            <Checkbox
                                                value="A"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Premium elan
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                Elanı irəli çəkmək
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                            >
                                                VIP et
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
                                                style={{
                                                    lineHeight: '32px',
                                                }}
                                                disabled
                                            >
                                                Çat
                                            </Checkbox>
                                            <Checkbox
                                                value="A"
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
                            </div>
                            <div className=' asfgcvxd'>
                                {/* Marka,model,add+ */}
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