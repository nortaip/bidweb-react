import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import AuctionsCardGroup from '../components/AuctionsCardGroup.js';
import Footers from '../components/footer';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

function App() {

  return (
    <>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Banner />
          <div className='space-align-container'>
            <AuctionsCardGroup />
          </div>
        </Content>
        <Footer>
          <Footers />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
