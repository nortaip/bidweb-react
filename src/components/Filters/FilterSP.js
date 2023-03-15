import '../../App.css';
import React, { useState } from 'react';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Form, Select, AutoComplete, Button, Space, Input, Checkbox, Radio, InputNumber, Collapse } from 'antd';

function FilterSP() {
    const [readMore, setReadMore] = useState(false);


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

    const onkbox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onReset = () => {
        form.resetFields();
    };
    const extraContent = <>
        {/* NO,Color */}
        <Space>
            {/* <Select
                placeholder="Ban tipi"
                style={{
                    width: "100%",
                    textAlign: 'center',
                }}
                size="large"
                onChange={handleChange}
                options={[
                    {
                        value: 'jack',
                        label: 'Jack',
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy',
                    },
                    {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                    },
                    {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                    },
                ]}
            /> */}
            {/* colors */}
            <Space >
                <Button shape="round" size="large">Hamısı</Button>
                <Button type="primary" className='colors white' shape="circle"></Button>
                <Button type="primary" className='colors black' shape="circle"></Button>
                <Button type="primary" className='colors brown' shape="circle"></Button>
                <Button type="primary" className='colors purple' shape="circle"></Button>
                <Button type="primary" className='colors green' shape="circle"></Button>
                <div className='btnclorgroup'>
                    <Button type="primary" className='colors grey' shape="circle"></Button>
                    <Button type="primary" className='colors grey2' shape="circle"></Button>
                </div>
                <div className='btnclorgroup'>
                    <Button type="primary" className='colors blue ' shape="circle"></Button>
                    <Button type="primary" className='colors blue2' shape="circle"></Button>
                </div>
                <div className='btnclorgroup '>
                    <Button type="primary" className='colors yellow1' shape="circle"></Button>
                    <Button type="primary" className='colors yellow2' shape="circle"></Button>
                    <Button type="primary" className='colors yellow3' shape="circle"></Button>
                </div>
                <div className='btnclorgroup rd'>
                    <Button type="primary" className='colors red' shape="circle"></Button>
                    <Button type="primary" className='colors red2' shape="circle"></Button>
                    <Button type="primary" className='colors red3' shape="circle"></Button>
                    <Button type="primary" className='colors red4' shape="circle"></Button>
                </div>
            </Space>
        </Space>
        {/* In addition to */}
        <Space >
            {/* <Checkbox onChange={onkbox} size="large" className='checkbox-filter'>Xarici maşınlar</Checkbox> */}
            {/* <Checkbox onChange={onkbox} size="large" className='checkbox-filter'>Barter mümkündür</Checkbox> */}
            {/* <Radio.Group size="large" buttonStyle="solid">
                <Radio.Button value="a">Benzin</Radio.Button>
                <Radio.Button value="b">Dizel</Radio.Button>
                <Radio.Button value="c">Electrik</Radio.Button>
            </Radio.Group> */}
            {/* <Radio.Group size="large" buttonStyle="solid">
                <Radio.Button value="a">Ön</Radio.Button>
                <Radio.Button value="b">Arxa</Radio.Button>
                <Radio.Button value="c">4x4</Radio.Button>
            </Radio.Group> */}
        </Space>
    </>
    // const linkName = readMore ? 'Ümumi axtarış ' : 'Ümumi axtarış'
    return (
        <div className="container filter">
            <div className="tabs">
                {/* <div className="tabs-content">
           <div className="tabs-content-1"><h3>Ətraflı axtarış</h3></div>
           <div className="tabs-content-2"><h3>İşlənmiş maşın</h3></div>
           <div className="tabs-content-3"><h3>Salonlar</h3></div>
        </div>  */}
            </div>
            <div className="main">
                <Form
                    form={form}
                    name="dynamic_form_complex"
                    onFinish={onFinish}
                    autoComplete="on"
                >
                    <Form.List name="sights">
                        {(fields, { add, remove }) => (
                            <div className='space-V'>
                                {/* Marka,model,add+ */}
                                <div className='space'>
                                    <AutoComplete
                                        options={options}
                                        className='asss'
                                        size="large"
                                        onSelect={onSelect}
                                        onSearch={(text) => setOptions(getPanelValue(text))}
                                        placeholder="Marka"
                                    />
                                    <AutoComplete
                                        options={options}
                                        className='asss'
                                        size="large"
                                        onSelect={onSelect}
                                        onSearch={(text) => setOptions(getPanelValue(text))}
                                        placeholder="Madel"
                                    />
                                    <AutoComplete
                                        options={options}
                                        className='asss'
                                        size="large"
                                        onSelect={onSelect}
                                        onSearch={(text) => setOptions(getPanelValue(text))}
                                        placeholder="Nəsil"
                                    />
                                    <Button
                                        style={{
                                            width: '40',
                                            flex: 'none',
                                            order: ' 0',
                                            background: 'rgba(0, 0, 0, 0.05)'
                                        }}
                                        onClick={() => add()} block icon={<PlusOutlined />}
                                        size="large"
                                    />
                                </div>
                                <div>
                                    {fields.map((field) => (
                                        <div className='space' >
                                            <AutoComplete
                                                options={options}
                                                className='asss'
                                                size="large"
                                                onSelect={onSelect}
                                                onSearch={(text) => setOptions(getPanelValue(text))}
                                                placeholder="Marka"
                                            />
                                            <AutoComplete
                                                options={options}
                                                className='asss'
                                                size="large"
                                                onSelect={onSelect}
                                                onSearch={(text) => setOptions(getPanelValue(text))}
                                                placeholder="Madel"
                                            />
                                            <AutoComplete
                                                options={options}
                                                className='asss'
                                                size="large"
                                                onSelect={onSelect}
                                                onSearch={(text) => setOptions(getPanelValue(text))}
                                                placeholder="Nəsil"
                                            />
                                            <MinusCircleOutlined onClick={() => remove(field.name)} />
                                        </div>
                                    ))}
                                </div>
                                {/* Price,year */}
                                <div className='sfasfdsd'
                                    style={{
                                        marginTop: '20px'
                                    }} >
                                    <Input.Group compact >
                                        <InputNumber className='inputfilter' min={1} max={1000000000000000000000000000000000n}
                                            size="large"
                                            placeholder="Qiymət, Max"
                                        />
                                        <InputNumber className='inputfilter' min={1} max={1000000000000000000000000000000000n}
                                            size="large"
                                            placeholder="min"
                                        />
                                    </Input.Group>
                                    <Input.Group compact  >
                                        <Select
                                            placeholder="İldən"
                                            size="large"
                                            onChange={handleChange}
                                            className='inputfilter'
                                            options={[
                                                {
                                                    value: 'jack',
                                                    label: 'Jack',
                                                },
                                                {
                                                    value: 'lucy',
                                                    label: 'Lucy',
                                                },
                                                {
                                                    value: 'Yiminghe',
                                                    label: 'yiminghe',
                                                },
                                                {
                                                    value: 'disabled',
                                                    label: 'Disabled',
                                                    disabled: true,
                                                },
                                            ]}
                                        />
                                        <Select
                                            placeholder="İldən"
                                            size="large"
                                            onChange={handleChange}
                                            className='inputfilter'
                                            options={[
                                                {
                                                    value: 'jack',
                                                    label: 'Jack',
                                                },
                                                {
                                                    value: 'lucy',
                                                    label: 'Lucy',
                                                },
                                                {
                                                    value: 'Yiminghe',
                                                    label: 'yiminghe',
                                                },
                                                {
                                                    value: 'disabled',
                                                    label: 'Disabled',
                                                    disabled: true,
                                                },
                                            ]}
                                        />
                                    </Input.Group>
                                    <Input.Group compact >
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                textAlign: 'center',
                                            }} className='inputfilter'
                                            size="large"
                                            placeholder="Yürüş,Km dən"
                                        />
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                textAlign: 'center',
                                            }}
                                            className='inputfilter'
                                            size="large"
                                            placeholder="Km rə"
                                        />
                                    </Input.Group>
                                </div>
                                {/* Km,VIP,New */}
                                <Space>
                                    {/* <Input.Group compact>
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                textAlign: 'center',
                                            }}
                                            className='inputfilter'
                                            size="large"
                                            placeholder="Həcmi, l"
                                        />
                                        <InputNumber min={1} max={1000000000000000000000000000000000n}
                                            style={{
                                                textAlign: 'center',
                                            }}
                                            className='inputfilter'

                                            size="large"
                                            placeholder="Həcmədək"
                                        />
                                    </Input.Group>
                                    <Input.Group compact >
                                        <Select
                                            placeholder="Ötürücü"
                                            style={{
                                                textAlign: 'center',
                                            }}
                                            className='inputfilter'

                                            size="large"
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'jack',
                                                    label: 'Jack',
                                                },
                                                {
                                                    value: 'lucy',
                                                    label: 'Lucy',
                                                },
                                                {
                                                    value: 'Yiminghe',
                                                    label: 'yiminghe',
                                                },
                                                {
                                                    value: 'disabled',
                                                    label: 'Disabled',
                                                    disabled: true,
                                                },
                                            ]}
                                        />
                                    </Input.Group> */}
                                    {/* <Select
                                        placeholder="Surətlər qutusu"
                                        mode="multiple"
                                        className='inputfilter'
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
                                    /> */}
                                    {/* <Select
                                        placeholder="Yanacaq"
                                        mode="multiple"
                                        className='inputfilter'
                                        size="large"
                                        onChange={handleChange}
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
                                                value: 'Elektrik',
                                                label: 'Elektrik',
                                            },
                                            {
                                                value: 'Hibrid',
                                                label: 'Hibrid',
                                            },
                                            {
                                                value: 'Plug-in Hibrid',
                                                label: 'Plug-in Hibrid',
                                            }
                                        ]}

                                    /> */}
                                    <Checkbox onChange={onkbox} size="large" className='checkbox-filter'>Barter mümkündür</Checkbox>
                                    <Checkbox onChange={onkbox} className='checkbox-filter'>ViP Elanlar</Checkbox>
                                    <Checkbox onChange={onkbox} className='checkbox-filter'>Yeni elanlar</Checkbox>
                                </Space>
                                {/* Buttons */}
                                {/* {readMore && extraContent} */}
                                <Space>
                                    {/* <div className="read-more-link" onClick={() => { setReadMore(!readMore) }}>
                                        <h4>{linkName}</h4>
                                    </div> */}
                                    <Button htmlType="button" onClick={onReset}>
                                        Reset
                                    </Button>
                                    <Button htmlType="submit" type="primary">
                                        Axtar
                                    </Button>
                                </Space>
                            </div>
                        )}
                    </Form.List>
                </Form>
            </div>
        </div >
    );
}

export default FilterSP;