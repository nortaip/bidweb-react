import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import AuctionsCardGroup from '../components/AuctionsCardGroup.js';
import { Layout } from 'antd';
import FooterMain from '../components/FooterMain';
import Filter from '../components/Filters';
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
