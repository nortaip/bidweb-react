import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import { Layout } from 'antd';
import FooterMain from '../components/Footers/FooterMain';
import ProfileMain from '../components/User/profile';
import { useCookies } from 'react-cookie';

const { Header, Footer, Content } = Layout;
function Profile() {
    const [cookies, setCookie] = useCookies(['user_id']);

    useEffect(() => {
        if (!cookies.user_id) {
            window.location.href = '/Login';
        }
    }, [cookies.user_id]);
    return (
        <Layout>
            <Header className='navbarmain'>
                <Navbar />
            </Header>
            <Content>
                <ProfileMain />
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