import React from 'react';
import Navbar from "../components/Navbar";
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import ProfileMain from '../components/User/profile';


const { Header, Footer, Content } = Layout;
function Profile() {

    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content>
                <ProfileMain/>
                {/* <Profile /> */}
                {/* <Salonheader /> */}
                <div className='space-align-container '>
                    {/* <SalonCardGroup /> */}
                </div>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}

export default Profile 