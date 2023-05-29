import { Form, Input, Button, Checkbox, Space, message } from 'antd';
import axios from 'axios';
import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar.js';
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import { CONN_KEY } from "../Conn";
import Logins from "../imgs/Frame 25480.png"
const { Header, Footer, Content } = Layout;

// Helper function to get cookie expiration time
function getCookieValue(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

const LoginForm = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post(`${CONN_KEY}login.php`, {
                username: values.username,
                password: values.password,
            }, {
                headers: {
                    Cookie: `user_id=${getCookieValue('user_id')}`, // Include user_id cookie in headers
                },
            });

            console.log(response.data);

            if (response.data.status === 1) {
                // Save username as a cookie with partition key
                const partitionKey = '1235412';
                const expiration = new Date();
                expiration.setTime(expiration.getTime() + (1 * 24 * 60 * 60 * 1000));
                document.cookie = `user_id=${response.data.user_id}; partitionKey=${partitionKey}; expires=${expiration.toUTCString()}; path=/; Secure; SameSite=none`;

                window.location.href = '/'; // Redirect to the home page
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            // handle error
        }
    };
    return (
        <>
            <Layout>
                <Header className='navbarmain'>
                    <Navbar />
                </Header>
                <Content>
                    <div className='space-align-container sgafsdg'>
                        <Space>
                            <div className='loginda'>
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
                            </div>
                            <img src={Logins} alt='Ragister' className='imglosf' />
                        </Space>
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
