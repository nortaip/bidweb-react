import React from "react";
import Navbar from '../components/Navbar.js';
import { Layout } from 'antd';
import FooterMain from '../components/FooterMain';
import SellItemForm from "../components/SellItemForm.js";
const { Header, Footer, Content } = Layout;

function Sell() {

    return (
        <>
            <Layout>
                <Header className='navbarmain'>
                    <Navbar />
                </Header>
                <Content>
                    <div className="container">
                        <h1>Bir Mehsul sat</h1>
                        <SellItemForm />
                    </div>
                </Content>
                <Footer>
                    <FooterMain />
                </Footer>
            </Layout>
        </>
    );
}

export default Sell;
