import '../App.css';
import React, { useState } from 'react';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Form, Select, AutoComplete, Button, Space, Input, } from 'antd';
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
  return (
    <div className="container">
      <div className="tabs">
        <div className="tabs-content">
          <div className="tabs-content-1"><h3>Hamısı</h3></div>
          <div className="tabs-content-2"><h3>İşlənmiş maşın</h3></div>
          <div className="tabs-content-3"><h3>Salonlar</h3></div>
        </div>
      </div>
      <div className="main">
        <div>
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
              width: '100%',
            }}
          >
            <Form.List name="sights">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (

                    <Space key={field.key} align="baseline">

                      <Form.Item
                        {...field}
                        label="Price"
                        name={[field.name, 'price']}
                        rules={[
                          {
                            required: true,
                            message: 'Missing price',
                          },
                        ]}
                      >
                        <div className='first'>
                          <AutoComplete
                            options={options}
                            style={{
                              width: '100%',
                              flex: 'none',
                              order: ' 0',
                            }}
                            size="large"
                            onSelect={onSelect}
                            onSearch={(text) => setOptions(getPanelValue(text))}
                            placeholder="Marka"
                          />
                          <AutoComplete
                            options={options}
                            style={{
                              width: '100%',
                              flex: 'none',
                              order: ' 0',
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
                              flex: 'none',
                              order: ' 0',
                            }}
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
                            }} onClick={() => add()} block icon={<PlusOutlined />}
                            size="large" />
                        </div>
                        <Input />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add sights
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
      </div >
    </div >
  );
}

export default Filter;