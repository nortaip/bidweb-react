import '../App.css';
import React from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banners/Banner.js';
import AuctionsCardGroup from '../components/CardsGroup/AuctionsCardGroup';
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import Filter from '../components/Filters/Filters';
const { Header, Footer, Content } = Layout;
import { ConfigProvider } from 'antd';
import data from "../components/Api/Ant Design Theme.json"
const defaultData = {
    borderRadius: 6,
    colorPrimary: '#1677ff',
  };
function App() {
  const [data] = React.useState(defaultData);
  
  return (
    <>
      <Layout>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: data.colorPrimary,
              borderRadius: data.borderRadius,
            },
          }}
        >
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
        </ConfigProvider>

      </Layout>
    </>
  );
}

export default App;
