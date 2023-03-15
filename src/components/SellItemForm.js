import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Tooltip, InputNumber, Radio, Select, Input,  Checkbox, Col,  Row, Space, } from 'antd';
import ImgUpload from '../components/ImgFile/ImgUpload';
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
            name="Yürüş"
            label="Yürüş"
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
            label="İL"
            rules={[
                {
                    required: true,
                    message: 'Please select your favourite colors!',
                    type: 'array',
                },
            ]}
        >
            <Select placeholder="Ban Növü">
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
            name="Yanacaq növü"
            label="Yanacaq növü"
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
            name="Ötürücü"
            label="Ötürücü"
            rules={[
                {
                    required: true,
                    message: 'Please pick an item!',
                },
            ]}
        >
            <Radio.Group>
                <Radio.Button value="a">Ön</Radio.Button>
                <Radio.Button value="b">Arxa</Radio.Button>
                <Radio.Button value="c">4x4</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item
            name="Sürətlər qutusu"
            label="Sürətlər qutusu"
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
            name="Mühərrikin həcmı"
            label="Mühərrikin həcmı"
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
        <Form.Item name="Əlavə məlumat" label="Əlavə məlumat">
            <Input.TextArea showCount />
        </Form.Item>
        <Form.Item
            name="Vəziyyəti"
            label="Vəziyyəti"
            rules={[
                {
                    required: true,
                    message: 'Please pick an item!',
                },
            ]}
        >
            <Radio.Group>
                <Tooltip title="Bir və ya bir necə detalı dəyişdirilib və ya təmir olunub">
                    <Radio.Button value="a" help="Vuruğu var">Vuruğu var</Radio.Button>
                </Tooltip>
                <Tooltip title="Bir vı ya bir neçə detalı rənglənib və ya kosmetik işlər görülüb">
                    <Radio.Button value="b" help="Rənglənib">Rənglənib</Radio.Button>
                </Tooltip>
                <Tooltip title="Təmirə ehtiyacı var və ya ümumiyyətlə yararsız vəzyətdədir">
                    <Radio.Button value="c" help="Qəzalı">Qəzalı</Radio.Button>
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

        <Form.Item name="checkbox-group" label="Təchizatı">
            <Checkbox.Group>
                <Row>
                    <Col>
                        <Checkbox
                            value="Yüngül lehimli disklər"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Yüngül lehimli disklər
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="B"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Mərkəzi qapanma
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="C"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Dəri salon
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="D"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Oturacaqların ventilyasiyası
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
                            Park radarı
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
                            Arxa görüntü kamerası
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
                            Yağış sensoru
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="K"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Oturacaqların isidilməsi
                        </Checkbox>
                    </Col>
                    <Col>
                        <Checkbox
                            value="U"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Yan pərdələr
                        </Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
        </Form.Item>
        <ImgUpload />
    </Form>
);
export default SellitemForm;