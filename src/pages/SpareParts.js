import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banners/Banner.js';
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import FilterSP from '../components/Filters/FilterSP';
import EhtiyatCards from '../components/CardsGroup/ehtiyat-CARDGoup';
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
