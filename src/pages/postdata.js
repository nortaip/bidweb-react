import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import { Layout, Space } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import { Button,  Form, Input } from 'antd';
import Logins from "../imgs/Frame 25480.png"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CONN_KEY } from "../Conn";
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
        // console.log('Received values of form: ', values);
        axios.post(`${CONN_KEY}brand_name.php`, values).then(function (response) {
            console.log(response.data);
            // navigate('/');
        });
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
                                    name={"name"}
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
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" block htmlType="submit" className="login-form-button">
                                        Save
                                    </Button>
                                </Form.Item>
                                Or <a href="">register now!</a>
                            </Form>
                        </div>
                        {/* <img src={Logins} alt='login' className='imglosf' /> */}
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