import React from "react";
import "../../App.css";
import { Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;
import { ConfigProvider, Skeleton } from 'antd';
const defaultData = {
    borderRadius: 6,
    colorPrimary: '#1677ff',
};

function SkeletonC() {
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
                        <div className="products">
                            <div className="products-i " >
                                <div className="products-i__top">
                                    <Skeleton.Image active size="large" shape="round" block/>
                                </div>
                            </div>
                            <div className="products-i__bottom">
                                <div className="title">
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                </div>
                                <div className="products-i_info ">
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                </div>
                                <div className="products-i__price ">
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                </div>
                                <div className="fofgsdfgsr">
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                    <Skeleton.Button active size="large" shape="round" block className="SKL-title" />
                                </div>
                            </div>
                        </div>
                    </Content>
                </ConfigProvider >
            </Layout >
        </>
    );
}

export default SkeletonC;