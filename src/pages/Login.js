import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar.js';
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import { CONN_KEY } from "../Conn";
import Logins from "../imgs/Frame 25480.png"
const { Header, Footer, Content } = Layout;

const LoginForm = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post(`${CONN_KEY}login.php`, {
                username: values.username,
                password: values.password,
            });

            console.log(response.data.user_id); // Access the user ID from the response              

            // Store user_id as a cookie
            document.cookie = `user_id=${response.data.user_id}; path=/`;

            window.location.href = '/';
        } catch (error) {
            console.log(error); // handle login error
        }
    };

    return (
        <>
            <Layout>
                <Header className='navbarmain'>
                    <Navbar />
                </Header>
                <Content>
                    <div className='container' >
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                Or <a href="/register">register now!</a>
                            </Form.Item>
                        </Form>
                        <img src={Logins} alt='Ragister' className='imglosf' />

                    </div>
                </Content>
                <Footer>
                    <FooterMain />
                </Footer>
            </Layout>
        </>
    );
};

export default LoginForm;
