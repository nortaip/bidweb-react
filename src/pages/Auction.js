import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Col, Row, Button, Modal } from 'antd';
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import ProducrImgLive from '../components/ImgFile/Productimglive';
import ProductInfo from '../components/infos/ProductInfo';
import AuctionInfo from '../components/infos/AuctionInfo';
import LiveChat from '../components/LiveChat';
import { useNavigate } from "react-router-dom";

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

const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
};

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        window.close();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();
    let navigate = useNavigate();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Layout className="site-layout">
                <Header className='navbarmain'>
                    <Navbar />
                </Header>
                <Layout style={{
                    maxHeight: '100vh'
                }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                        <button onClick={() => navigate(-1)}>Back</button>
                        <Button type="primary" onClick={showModal}>
                            Exit Auction
                        </Button>
                        <Modal title="Diqqət" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <p>Həracdan ayrılmağa əminsiniz?</p>
                        </Modal>
                    </Sider>
                    <Content>

                        <Row style={{
                            flexFlow: 'nowrap'
                        }}>
                            <Col>
                                <ProducrImgLive />
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

