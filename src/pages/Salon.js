import React from 'react';
import Navbar from "../components/Navbar";
import { Layout } from 'antd';
import FooterMain from '../components/FooterMain';
import SalonBanner from '../components/SalonBanner';
import Salonheader from '../components/SalonInfo';
import SalonCardGroup from '../components/CardsSalon';

const { Header, Footer, Content } = Layout;
function Salon() {

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content>
                <SalonBanner />
                <Salonheader />
                <div className='space-align-container '>
                    <SalonCardGroup />
                </div>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default Salon 