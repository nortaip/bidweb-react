import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import { Layout } from 'antd';
import FooterMain from '../components/FooterMain';
import FilterSP from '../components/FilterSP';
import EhtiyatCards from '../components/ehtiyat-CARDGoup';
const { Header, Footer, Content } = Layout;

function SpareParts() {

    return (
        <>
            <Layout>
                <Header className='navbarmain'>
                    <Navbar />
                </Header>
                <Content>
                    <Banner />
                    <FilterSP />
                    <div className='space-align-container '>
                        <EhtiyatCards />
                    </div>
                </Content>
                <Footer>
                    <FooterMain />
                </Footer>
            </Layout>
        </>
    );
}

export default SpareParts;
