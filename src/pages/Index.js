import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banners/Banner.js';
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import Filter from '../components/Filters/Filters';
import { ConfigProvider } from 'antd';
import MainNormal from '../components/Cards/OUC-card';
import EhtiyatMainCards from '../components/Cards/Ehtiyat-Card';

const { Header, Footer, Content } = Layout;
const defaultData = {
    borderRadius: 6,
    colorPrimary: '#1677ff',
};
function Index() {
    const [data] = React.useState(defaultData);

    return (
        <>
            <Layout>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: data.colorPrimary,
                            borderRadius: data.borderRadius,
                        },
                    }}
                >
                    <Header className='navbarmain'>
                        <Navbar />
                    </Header>
                    <Content>
                        <Banner />
                        <Filter />
                        <div className='space-align-container '>
                            <MainNormal />
                        </div>
                        <div className='space-align-container '>
                            <EhtiyatMainCards/>
                        </div>
                    </Content>
                    <Footer>
                        <FooterMain />
                    </Footer>
                </ConfigProvider>

            </Layout>
        </>
    );
}

export default Index;
