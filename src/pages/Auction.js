import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Col, Row } from 'antd';
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import ProducrImgLive from '../components/Productimglive';
import ProductInfo from '../components/ProductInfo';
import AuctionInfo from '../components/AuctionInfo';
import LiveChat from '../components/LiveChat';

const { Header, Content, Sider } = Layout;

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
                <Layout style={{
                    maxHeight: '100vh'
                }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                    </Sider>
                    <Content>
                        <Row >
                            <Col>
                                <ProducrImgLive/>
                            </Col>
                            <Col>
                                <ProductInfo />
                            </Col>
                            <Col>
<AuctionInfo />
                            </Col>
                            <Col>
                                <LiveChat />
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </Layout >
    );
};
export default App;