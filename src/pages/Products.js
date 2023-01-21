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

const { Header, Footer, Content } = Layout;
function ProductDetail() {

    return (
        <Layout>
            <Header>
                <Navbar />
            </Header>
            <Content>
                <Space direction="vertical" size="middle" align="center" className='section' style={{ display: 'flex' }}>
                    <Row gutter={24} offset={12} >
                        <Col >
                            <ProducrImg />
                        </Col>
                        <Col className='right-info'>
                            <ProductTitle />
                            <Table />
                            <JoinProduct />
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