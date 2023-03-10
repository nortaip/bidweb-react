import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Tooltip, InputNumber, Radio, Select, Input, Button, Checkbox, Col, Rate, Row, Slider, Upload, Space, } from 'antd';
import ImgUpload from './ImgUpload';
const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

const { TextArea } = Input;
const SellitemForm = () => (
    <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
            'input-number': 3,
            'checkbox-group': ['A', 'B'],
            rate: 3.5,
        }}
        style={{
            maxWidth: 600,
        }}
    >
        <Form.Item
            name="residence"
            label="Marka"
            rules={[
                {
                    required: true,
                    message: 'Please select Marka!',
                },
            ]}
        >
            <Select placeholder="Marka">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="Model"
            label="Model"
            rules={[
                {
                    required: true,
                    message: 'Please select Marka!',
                },
            ]}
        >
            <Select placeholder="Model">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="Ban novu"
            label="Ban novu"
            rules={[
                {
                    required: true,
                    message: 'Please select Marka!',
                },
            ]}
        >
            <Select placeholder="Ban novu">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="Y??r????"
            label="Y??r????"
            rules={[
                {
                    required: true,
                    message: 'Please select your favourite colors!',
                    type: 'array',
                },
            ]}
        >
            <Form.Item name="input-number" noStyle>
                <InputNumber min={1} max={10} />
            </Form.Item>
            <span
                className="ant-form-text"
                style={{
                    marginLeft: 8,
                }}
            >
                KM
            </span>
        </Form.Item>
        <Form.Item
            name="select-multiple"
            label="??L"
            rules={[
                {
                    required: true,
                    message: 'Please select your favourite colors!',
                    type: 'array',
                },
            ]}
        >
            <Select placeholder="Ban N??v??">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="color"
            label="Color"
            rules={[
                {
                    required: true,
                    message: 'Please select your favourite colors!',
                    type: 'array',
                },
            ]}
        >
            <Select mode="multiple" placeholder="color">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="Yanacaq n??v??"
            label="Yanacaq n??v??"
            rules={[
                {
                    required: true,
                    message: 'Please pick an item!',
                },
            ]}
        >
            <Radio.Group>
                <Radio.Button value="a">Benzin</Radio.Button>
                <Radio.Button value="b">Dizel</Radio.Button>
                <Radio.Button value="c">Electrik</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item
            name="??t??r??c??"
            label="??t??r??c??"
            rules={[
                {
                    required: true,
                    message: 'Please pick an item!',
                },
            ]}
        >
            <Radio.Group>
                <Radio.Button value="a">??n</Radio.Button>
                <Radio.Button value="b">Arxa</Radio.Button>
                <Radio.Button value="c">4x4</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item
            name="S??r??tl??r qutusu"
            label="S??r??tl??r qutusu"
            rules={[
                {
                    required: true,
                    message: 'Please pick an item!',
                },
            ]}
        >
            <Radio.Group>
                <Radio.Button value="a">Mexanik</Radio.Button>
                <Radio.Button value="b">Avtomatik</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item
            name="M??h??rrikin h??cm??"
            label="M??h??rrikin h??cm??"
            rules={[
                {
                    required: true,
                    message: 'Please select your favourite colors!',
                    type: 'array',
                },
            ]}
        >
            <Form.Item name="input-number m" noStyle>
                <InputNumber min={1} max={10} />
            </Form.Item>
            <span
                className="ant-form-text"
                style={{
                    marginLeft: 8,
                }}
            >
                sm3
            </span>
        </Form.Item>
        <Form.Item
            name="VIN-kod"
            label="VIN-kod"
            rules={[
                {
                    required: true,
                    message: 'Please select your favourite colors!',
                    type: 'array',
                },
            ]}
        >
            <Form.Item name="input-numberc" noStyle>
                <InputNumber min={1} max={999999999999999999999999999999999999} />
            </Form.Item>
            <span
                className="ant-form-text"
                style={{
                    marginLeft: 8,
                }}
            >
                sm3
            </span>
        </Form.Item>
        <Form.Item name="??lav?? m??lumat" label="??lav?? m??lumat">
            <Input.TextArea showCount />
        </Form.Item>
        <Form.Item
            name="V??ziyy??ti"
            label="V??ziyy??ti"
            rules={[
                {
                    required: true,
                    message: 'Please pick an item!',
                },
            ]}
        >
            <Radio.Group>
                <Tooltip title="Bir v?? ya bir nec?? detal?? d??yi??dirilib v?? ya t??mir olunub">
                    <Radio.Button value="a" help="Vuru??u var">Vuru??u var</Radio.Button>
                </Tooltip>
                <Tooltip title="Bir v?? ya bir ne???? detal?? r??ngl??nib v?? ya kosmetik i??l??r g??r??l??b">
                    <Radio.Button value="b" help="R??ngl??nib">R??ngl??nib</Radio.Button>
                </Tooltip>
                <Tooltip title="T??mir?? ehtiyac?? var v?? ya ??mumiyy??tl?? yarars??z v??zy??td??dir">
                    <Radio.Button value="c" help="Q??zal??">Q??zal??</Radio.Button>
                </Tooltip>
            </Radio.Group>
            <Form.Item name="checkbox-group" label="">
                <Checkbox.Group>
                    <Row>
                        <Space>
                            <Col span={8}>
                                <Checkbox
                                    value="A"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    Kredit
                                </Checkbox>
                            </Col>
                            <Col span={8}>
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
                </Checkbox.Group>
            </Form.Item>
        </Form.Item>

        <Form.Item name="checkbox-group" label="T??chizat??">
            <Checkbox.Group>
                <Row>
                    <Col>
                        <Checkbox
                            value="Y??ng??l lehimli diskl??r"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Y??ng??l lehimli diskl??r
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="B"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            M??rk??zi qapanma
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="C"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            D??ri salon
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="D"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Oturacaqlar??n ventilyasiyas??
                        </Checkbox>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Checkbox
                            value="E"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            ABS
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="V"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Park radar??
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="g"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Ksenon lampalar
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="S"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            360 kamera
                        </Checkbox>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Checkbox
                            value="T"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Lyuk
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="I"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Kondisioner
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="q"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Arxa g??r??nt?? kameras??
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="m"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Multi rull
                        </Checkbox>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Checkbox
                            value="J"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Ya?????? sensoru
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="K"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Oturacaqlar??n isidilm??si
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="U"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Yan p??rd??l??r
                        </Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
        </Form.Item>
        <ImgUpload />
    </Form>
);
export default SellitemForm;