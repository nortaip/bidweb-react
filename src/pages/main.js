import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import AuctionsCardGroup from '../components/AuctionsCardGroup.js';
import { Layout } from 'antd';
import Buttons from '../components/Button';
import FooterMain from '../components/FooterMain';
const { Header, Footer, Content } = Layout;

function App() {

  return (
    <>
      <Layout>
        <Header >
          <Navbar />
        </Header>
        <Content>
          <Banner />
          <Buttons />
          <div className='space-align-container '>
            <AuctionsCardGroup />
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
