import React from 'react';
import { Result, Button, Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { SmileOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar.js';
import FooterMain from '../components/Footers/FooterMain';

function PleaceLogin() {
    return (
        < Layout >
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content className='container'>
                <Result
                    icon={<SmileOutlined />}
                    title="Elan paylaşmaq ücün giriş edin"
                    extra={<Button type="primary">Giriş et</Button>}
                />
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout >

    )
}
export default PleaceLogin;