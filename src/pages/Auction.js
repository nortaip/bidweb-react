import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Col, Row, Space } from 'antd';
import React, { useState } from 'react';
import ProducrImg from '../components/ProductImg';
import Navbar from "../components/Navbar";
import AuctionLive from '../components/Bid';
import ActivityAuction from '../components/ActibityAuction';
import ProductInfo from '../components/ProductInfo';
import Footermini from '../components/Footermini';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),

    getItem('Files', '9', <FileOutlined />),
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <Layout className="site-layout">
                <Header>
                    <Navbar />
                </Header>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <div
                            style={{
                                height: 32,
                                margin: 16,
                                background: 'rgba(255, 255, 255, 0.2)',
                            }}
                        />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                    </Sider>
                    <Content
                        style={{
                            margin: '3px',
                        }}
                    >
                        <Row>
                            <Col>
                                <ProducrImg />
                            </Col>
                            <Col>
                                <ProductInfo />
                            </Col>
                            <Col><AuctionLive />
                                <ActivityAuction />
                            </Col>
                        </Row>
                        <Footer
                            style={{
                                textAlign: 'center',
                                background: 'none'
                            }}
                        >
                            <Footermini />
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default App;