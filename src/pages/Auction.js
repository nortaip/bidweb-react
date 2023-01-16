import React from 'react';
import Navbar from "../components/Navbar";
import Footermini from "../components/Footermini";
import { Col, Row, Space, Layout } from 'antd';
import Table from '../components/TableProduct';
import ProductTitle from '../components/ProductTitlle';
import ProducrImg from '../components/ProductImg';
import AuctionLive from '../components/Bid';
import JoinProductLevel from '../components/JoinProductLevel';
import ActivityAuction from '../components/ActibityAuction';
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
                            <JoinProductLevel />
                        </Col>
                        <Col>
                            <AuctionLive />
                            <ActivityAuction />
                        </Col>
                    </Row>
                </Space>
            </Content>
            <Footer>
                <Footermini />
            </Footer>
        </Layout>
    )
}

export default ProductDetail