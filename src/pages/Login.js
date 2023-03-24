import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import { Layout, Space } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
const { Header, Footer, Content } = Layout;
import { Button, Checkbox, Form, Input } from 'antd';
import Logins from "../imgs/Frame 25480.png"
import axios from 'axios';

const Login = () => {

    const onFinish = (values) => {
        console.log(values);
        axios.post('http://localhost/tu/api/')
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
                            <Form
                                name="normal_login"
                                className="login-form container"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="Phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Phone"
                                        name={"Phone"}
                                    // onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        size="large"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                        name={"Password"}
                                    // onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" block htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                                Or <a href="">register now!</a>
                            </Form>
                        </div>
                        <img src={Logins} alt='login' className='imglosf' />
                    </Space>
                </div>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    );
};

export default Login;