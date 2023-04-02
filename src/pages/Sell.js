import React, { useContext } from 'react';
import { Layout, Tabs } from 'antd';
import AuthContext from '../components/AuthContext';
import Navbar from '../components/Navbar.js';
import FooterMain from '../components/Footers/FooterMain';
import SellItemForm from "../components/SellItems/SellItemForm.js";
import SellEhtiyat from "../components/SellItems/SellEhtiyath.js";
import PleaceLogin from '../components/PleaceLogin';
const { Header, Footer, Content } = Layout;

function Sell() {
    // const { isAuthenticated, userId } = useContext(AuthContext);

    // if (!isAuthenticated) {
    //     // Redirect to login page or show a message
    //     return <PleaceLogin />;
    // }
    return (
        <>
            <Layout>
                <Header className='navbarmain'>
                    <Navbar />
                </Header>
                <Content className='container'>
                    {/* <div className="container"> */}
                    <h1>Bir Mehsul sat</h1>
                    <Tabs
                        defaultActiveKey="1"
                        items={[
                            {
                                label: 'Yeni Elan',
                                key: '1',
                                children: <SellItemForm />,
                            },
                            {
                                label: 'Hərrac',
                                key: '2',
                                children: 'Hərrac',
                                disabled: true,
                            },
                            {
                                label: 'Ehtiyat Hissəsi',
                                key: '3',
                                children: <SellEhtiyat />,
                            },
                        ]}
                    />
                    {/* </div> */}
                </Content>
                <Footer>
                    <FooterMain />
                </Footer>
            </Layout>
        </>
    );
}

export default Sell;
