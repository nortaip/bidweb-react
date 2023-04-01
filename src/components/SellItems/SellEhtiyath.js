import React, { useState } from 'react';
import { Form, Input, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const SellForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [fileList, setFileList] = useState([]);
    const onFinish = async (values) => {
        if (!fileList || fileList.length === 0) {
            message.error('No file uploaded.');
            return;
        }
    
        const uploadingFile = fileList.find(file => file.status === 'uploading');
    
        if (uploadingFile) {
            setLoading(true);
            return;
        }
    
        const doneFile = fileList.find(file => file.status === 'done');
    
        if (doneFile) {
            setLoading(false);
            try {
                const response = await axios.post('http://localhost/tu/api/ehtiyat.php', new FormData(), {
                    params: values,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (response.data && response.data.imageUrl) {
                    setImageUrl(response.data.imageUrl);
                    message.success(`${doneFile.name} file uploaded successfully`);
                } else {
                    message.error('Failed to upload file');
                }
            } catch (error) {
                message.error(error.response.data.message);
                console.error(error); // error'u console'a yazdır
            }
        } else {
            message.error('No file uploaded.');
            return;
        }
    
        console.log('Received values of form: ', values);
    
        try {
            const response = await axios.post('http://localhost/tu/api/ehtiyat.php', values);
            message.success(response.data.message);
        } catch (error) {
            message.error(error.response.data.message);
            console.error(error); // error'u console'a yazdır
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form form={form} name="sell-form" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label="Marka" name="Marka" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Model" name="Model" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Nesil" name="Nesil" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Fotoğraf" name="file" valuePropName="fileList" getValueFromEvent={(e) => e.fileList} rules={[{ required: true }]}>
                <Upload name="file" action="http://localhost/tu/api/ehtiyat.php" headers={{ 'Access-Control-Allow-Origin': '*' }} maxCount={8} fileList={fileList}>
                    <Button icon={<UploadOutlined />}>Yükle</Button>
                </Upload>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Kaydet
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SellForm;
