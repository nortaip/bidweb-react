import React, { useEffect } from 'react';
import { Layout, Tabs } from 'antd';
import Navbar from '../components/Navbar.js';
import FooterMain from '../components/Footers/FooterMain';
import SellItemForm from "../components/SellItems/SellItemForm.js";
import SellEhtiyat from "../components/SellItems/SellEhtiyath.js";
import { useCookies } from 'react-cookie';
const { Header, Footer, Content } = Layout;

function Sell() {
    const [cookies, setCookie] = useCookies(['user_id']);

    useEffect(() => {
      if (!cookies.user_id) {
        window.location.href = '/Login';
      }
    }, [cookies.user_id]);

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
