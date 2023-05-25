import React from 'react';
import { Layout, Space, Button, Form, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar.js';
import FooterMain from '../components/Footers/FooterMain';
import Logins from "../imgs/Frame 25480.png"
import axios from "axios";
import { CONN_KEY } from "../Conn";
import '../App.css';

const { Item } = Form;
const { Header, Footer, Content } = Layout;

const Ragister = () => {

    const onFinish = async (values) => {
        try {
            const response = await axios.post(`${CONN_KEY}register.php`, values);
            console.log(response.data);
            message.success(JSON.stringify(response.data));

            // Save the cookie if login is successful
            if (response.data.status === 1) {
                const username = values.username;
                const expiration = new Date();
                expiration.setTime(expiration.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days expiration

                document.cookie = `username=${username}; expires=${expiration.toUTCString()}; path=/`;
            }

            window.location.href = '/Login';
        } catch (error) {
            message.error(JSON.stringify(error.response.data));
        }
    };


    const validateMessages = {
        required: '${label} is required',
        types: {
            email: '${label} is not a valid email',
        },
        string: {
            min: '${label} must be at least ${min} characters',
        },
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content>
                <div className='space-align-container sgafsdg'>
                    <Space>
                        <div className='loginda'>
                            <Form onFinish={onFinish} validateMessages={validateMessages} encType='multipart/form-data' >
                                <Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true }]}
                                >
                                    <Input name="username" />
                                </Item>
                                <Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, type: 'email' }]}
                                >
                                    <Input name='email' />
                                </Item>
                                <Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, min: 6 }]}
                                >
                                    <Input.Password />
                                </Item>
                                <Item>
                                    <Button type="primary" htmlType="submit">
                                        Register
                                    </Button>
                                </Item>
                            </Form>
                        </div>
                        <img src={Logins} alt='Ragister' className='imglosf' />
                    </Space>
                </div>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    );
};

export default Ragister;
