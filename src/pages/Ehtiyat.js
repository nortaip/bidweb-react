import React from 'react';
import Navbar from "../components/Navbar";
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import EhtiyatImg from '../components/ImgFile/EhtiyatİMgs';
import EhtiyatTitle from '../components/Titles/EhtiyatTitle';
import TableEhtiyat from '../components/Tables/EhtiyatTable';

const { Header, Footer, Content } = Layout;
function EhtiyathissələriDetail() {

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content className='container'>
                <EhtiyatImg />
                <div className='fless '>
                    <TableEhtiyat />
                    <EhtiyatTitle />
                </div>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default EhtiyathissələriDetail