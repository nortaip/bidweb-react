import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banners/Banner.js';
import AuctionsCardGroup from '../components/CardsGroup/AuctionsCardGroup';
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import Filter from '../components/Filters/Filters';
const { Header, Footer, Content } = Layout;

function App() {

  return (
    <>
      <Layout>
        <Header className='navbarmain'>
          <Navbar />
        </Header>
        <Content>
          <Banner />
          <Filter />
          <div className='space-align-container '>
            <AuctionsCardGroup />
          </div>
        </Content>
        <Footer>
          <FooterMain />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
