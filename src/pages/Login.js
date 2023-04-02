import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Space, Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar.js';
import FooterMain from '../components/Footers/FooterMain';
import AuthContext from '../components/AuthContext';
import Logins from "../imgs/Frame 25480.png"
import axios from "axios";
import '../App.css';

const { Header, Footer, Content } = Layout;
const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post('http://localhost/tu/api/user/save', values).then(function (response) {
            console.log(response.data);
            navigate('/');
        });
    };
    const { isAuthenticated, userId } = useContext(AuthContext);

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content>
                <div className='space-align-container sgafsdg'>
                    <Space>
                        <div className='loginda'>
                            <p>Hello, user {userId}</p>
                            <Form
                                name="normal_login"
                                className="login-form container"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name={"names"}
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
                                        name="names"
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="mobile"
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
                                        name="mobile"
                                        onChange={handleChange}
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
                                        Save
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