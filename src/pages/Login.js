import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar.js';
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import { CONN_KEY } from "../Conn";
const { Header, Footer, Content } = Layout;

const LoginForm = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post(`${CONN_KEY}login.php`, {
                username: values.username,
                password: values.password,
            });
            console.log(response.data); // handle successful login
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
                            </Form.Item>
                        </Form>
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
