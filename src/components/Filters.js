import '../App.css';
import React, { useState } from 'react';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Form, Select, AutoComplete, Button, Space, Input, Checkbox, Radio } from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const onFinish = () => {
  console.log('Received values of form: ', values);
};

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const areas = [
  {
    label: 'Beijing',
    value: 'Beijing',
  },
  {
    label: 'Shanghai',
    value: 'Shanghai',
  },
];

const sights = {
  Beijing: ['Tiananmen', 'Great Wall'],
  Shanghai: ['Oriental Pearl', 'The Bund'],
};

function Filter() {

  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const onChange = (data) => {
    setValue(data);
  };


  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const handleChange = () => {
    form.setFieldsValue({
      sights: [],
    });
  };
  const onkbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="container ">
      <div className="filter">
        <div className="tabs">
          <div className="tabs-content">
            <div className="tabs-content-1"><h3>Ətraflı axtarış</h3></div>
            {/* <div className="tabs-content-2"><h3>İşlənmiş maşın</h3></div>
          <div className="tabs-content-3"><h3>Salonlar</h3></div> */}
          </div>
        </div>
        <div className="main">
          <Form
            form={form}
            name="dynamic_form_complex"
            onFinish={onFinish}
            // style={{
            //   width: 600,
            // }}
            autoComplete="off"
          >
            <Form.List name="sights">
              {(fields, { add, remove }) => (
                <Space direction="vertical">
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
                  {/* Price,year */}
                  <Space>
                    <Input.Group compact>
                      <Input
                        style={{
                          width: 100,
                          textAlign: 'center',
                        }}
                        size="large"
                        placeholder="Qiymət, Max"
                      />
                      <Input
                        className="site-input-right"
                        style={{
                          width: 100,
                          textAlign: 'center',
                        }}
                        size="large"
                        placeholder="min"
                      />
                    </Input.Group>
                    <Input.Group compact >
                      <Select
                        placeholder="İldən"
                        style={{
                          width: 120,
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
                      />
                      <Select
                        placeholder="İldən"
                        style={{
                          width: 120,
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
                      />
                    </Input.Group>
                    <Select
                      placeholder="Surətlər qutusu"
                      style={{
                        width: 120,
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
                    />
                    <Select
                      placeholder="Yanacaq"
                      style={{
                        width: 120,
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
                    />
                  </Space>
                  {/* Km,VIP,New */}
                  <Space>
                    <Input.Group compact>
                      <Input
                        style={{
                          width: 100,
                          textAlign: 'center',
                        }}
                        size="large"
                        placeholder="Həcmi, l"
                      />
                      <Input
                        className="site-input-right"
                        style={{
                          width: 100,
                          textAlign: 'center',
                        }}
                        size="large"
                        placeholder="Həcmədək"
                      />
                    </Input.Group>
                    <Input.Group compact >
                      <Select
                        placeholder="Ötürücü"
                        style={{
                          width: 120,
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
                      />
                    </Input.Group>
                    <Input.Group compact>
                      <Input
                        style={{
                          width: 100,
                          textAlign: 'center',
                        }}
                        size="large"
                        placeholder="Yürüş,Km dən"
                      />
                      <Input
                        className="site-input-right"
                        style={{
                          width: 100,
                          textAlign: 'center',
                        }}
                        size="large"
                        placeholder="Km rə"
                      />
                    </Input.Group>
                    <Checkbox onChange={onkbox} className='checkbox-filter'>ViP Elanlar</Checkbox>
                    <Checkbox onChange={onkbox} className='checkbox-filter'>Yeni elanlar</Checkbox>
                  </Space>
                  {/* NO,Color */}
                  <Space>
                    <Select
                      placeholder="Ban tipi"
                      style={{
                        width: 120,
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
                    />

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
                    <Form.Item
                      name="note"
                      label="Əlavə olaraq"
                      layout="vertical"
                      size="large"
                    >
                      <Checkbox onChange={onkbox} size="large" className='checkbox-filter'>Xarici maşınlar</Checkbox>
                      <Checkbox onChange={onkbox} size="large" className='checkbox-filter'>Barter mümkündür</Checkbox>
                    </Form.Item>

                    <Form.Item
                      name="Yanacaq növü"
                      size="large"
                      rules={[
                        {
                          required: true,
                          message: 'Please pick an item!',
                        },
                      ]}
                    >
                      <Radio.Group size="large" buttonStyle="solid">
                        <Radio.Button value="a">Benzin</Radio.Button>
                        <Radio.Button value="b">Dizel</Radio.Button>
                        <Radio.Button value="c">Electrik</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      name="Ötürücü"
                      size="large"
                      rules={[
                        {
                          required: true,
                          message: 'Please pick an item!',
                        },
                      ]}
                    >
                      <Radio.Group size="large" buttonStyle="solid">
                        <Radio.Button value="a">Ön</Radio.Button>
                        <Radio.Button value="b">Arxa</Radio.Button>
                        <Radio.Button value="c">4x4</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </Space>
                  {/* Button */}
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Axtar
                    </Button>
                  </Form.Item>
                </Space>
              )}
            </Form.List>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Filter;