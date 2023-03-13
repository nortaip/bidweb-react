import React from 'react';
import Navbar from "../components/Navbar";
import { Col, Row, Space, Layout } from 'antd';
import Table from '../components/TableProduct';
import ProductTitle from '../components/ProductTitlle';
import ProducrImg from '../components/ProductImg';
import Similar from '../components/ProductSimilar';
import FooterMain from '../components/FooterMain';

const { Header, Footer, Content } = Layout;
function ProductDetail() {

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content className='container'>
                {/* <Space direction="vertical" size="middle" align="center" className='section container' style={{ display: 'flex' }}> */}
                <ProducrImg />

                <div className='fless '>
                    <Table />
                    <ProductTitle />
                    {/* <JoinProduct />  
                             <Supply />  */}
                </div>
                <Similar />
                {/* </Space> */}
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default ProductDetail