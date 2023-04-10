import React from 'react';
import Navbar from "../components/Navbar";
import { Space, Layout } from 'antd';
import Table from '../components/Tables/TableProduct';
import ProductTitle from '../components/Titles/ProductTitlle';
import ProducrImg from '../components/ImgFile/ProductImg';
import Similar from '../components/ProductSimilar';
import FooterMain from '../components/Footers/FooterMain';
import EhtiyatSimilar from '../components/EhtiyatSimilar';

const { Header, Footer, Content } = Layout;
function ProductDetail() {

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content className='container top-32'>
                <Space direction="vertical" size='large'>
                    <ProducrImg />
                    <div className='fless '>
                        <Table />
                        <ProductTitle />
                    </div>
                    <Similar />
                    <EhtiyatSimilar />
                </Space>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default ProductDetail