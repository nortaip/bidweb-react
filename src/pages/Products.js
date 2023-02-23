import React from 'react';
import Navbar from "../components/Navbar";
import { Col, Row, Space, Layout } from 'antd';
import Table from '../components/TableProduct';
import ProductTitle from '../components/ProductTitlle';
import JoinProduct from '../components/JoinProduct';
import ProducrImg from '../components/ProductImg';
import Description from '../components/Description';
import Similar from '../components/ProductSimilar';
import FooterMain from '../components/FooterMain';
import Supply from '../components/Supply';

const { Header, Footer, Content } = Layout;
function ProductDetail() {

    return (
        <Layout>
            <Header>
                <Navbar />
            </Header>
            <Content className='container'>
                <Space direction="vertical" size="middle" align="center" className='section container' style={{ display: 'flex' }}>
                    <ProducrImg />
                    <Row gutter={24} offset={12} >
                        <Col className='right-info'>
                            <ProductTitle />
                            <Table />
                            <JoinProduct />
                            <Supply />
                        </Col>
                    </Row>
                    <div className='container'>
                        <Description />
                    </div>
                    <Similar />
                </Space>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default ProductDetail