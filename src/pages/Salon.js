import React from 'react';
import Navbar from "../components/Navbar";
import {  Layout } from 'antd';
import FooterMain from '../components/FooterMain';
import SalonBanner from '../components/SalonBanner';
import Salonheader from '../components/SalonInfo';

const { Header, Footer, Content } = Layout;
function Salon() {

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content className='container'>
                    <SalonBanner />
                    <Salonheader/>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default Salon 