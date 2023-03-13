import React from 'react';
import Navbar from "../components/Navbar";
import { Carousel, Layout } from 'antd';
import FooterMain from '../components/FooterMain';
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const { Header, Footer, Content } = Layout;
function Salon() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content className='container'>
                <Carousel afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                </Carousel>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default Salon 