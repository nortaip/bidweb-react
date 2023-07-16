import React from "react";
import "../../App.css";
import { Layout, Space } from 'antd';
import { ConfigProvider, Skeleton } from 'antd';
const { Header, Footer, Content } = Layout;

const defaultData = {
    borderRadius: 6,
    colorPrimary: '#1677ff',
};

function SkeletonP() {
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
                    <Content>
                        <div className='space-align-container container'>
                            <Space className="SKLIMG">
                                <Skeleton.Image active size="large" shape="round" block className="SKL-main_img2" /> <br /><br />
                                <Skeleton.Image active size="large" shape="round" block className="SKL-main_img" /> <br /><br />
                                <Skeleton.Image active size="large" shape="round" block className="SKL-main_img2" />
                            </Space>
                            <br />
                            <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                            <br />
                            <Space direction="verti">
                                <div className="SKL-undertitle">
                                    <Skeleton.Button active size="large" shape="round" block />
                                    <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />  <br />
                                    <Skeleton.Button active size="large" shape="round" block />  <br />
                                </div>
                                <div>
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-price" />
                                </div>
                            </Space>
                            <br />  <br />
                            <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                            <br />
                        </div>
                    </Content>
                </ConfigProvider>
            </Layout>
        </>
    );
}

export default SkeletonP;