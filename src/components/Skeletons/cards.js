import React from "react";
import "../../App.css";
import { Layout, Divider, ConfigProvider, Skeleton } from 'antd';

const { Content } = Layout;
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
                     
                        <div className="SKL-products">
                            <div className="SKL-products-i ">
                                <div className="SKL-products-i__top">
                                    <Skeleton.Image active size="large" block className="SKL-" />
                                </div>
                                <div className="SKL-products-i__bottom">
                                    <div className="SKL-title">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-products-i_info ">
                                        <Skeleton.Input active size="large" block className="SKL-title " />
                                    </div>
                                    <div className="SKL-products-i__price ">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-fofgsdfgsr">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                </div>
                            </div>
                            <div className="SKL-products-i ">
                                <div className="SKL-products-i__top">
                                    <Skeleton.Image active size="large" block className="SKL-" />
                                </div>
                                <div className="SKL-products-i__bottom">
                                    <div className="SKL-title">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-products-i_info ">
                                        <Skeleton.Input active size="large" block className="SKL-title " />
                                    </div>
                                    <div className="SKL-products-i__price ">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-fofgsdfgsr">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                </div>
                            </div>
                            <div className="SKL-products-i ">
                                <div className="SKL-products-i__top">
                                    <Skeleton.Image active size="large" block className="SKL-" />
                                </div>
                                <div className="SKL-products-i__bottom">
                                    <div className="SKL-title">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-products-i_info ">
                                        <Skeleton.Input active size="large" block className="SKL-title " />
                                    </div>
                                    <div className="SKL-products-i__price ">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-fofgsdfgsr">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                </div>
                            </div>
                            <div className="SKL-products-i ">
                                <div className="SKL-products-i__top">
                                    <Skeleton.Image active size="large" block className="SKL-" />
                                </div>
                                <div className="SKL-products-i__bottom">
                                    <div className="SKL-title">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-products-i_info ">
                                        <Skeleton.Input active size="large" block className="SKL-title " />
                                    </div>
                                    <div className="SKL-products-i__price ">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
                                    <div className="SKL-fofgsdfgsr">
                                        <Skeleton.Input active size="large" block className="SKL-title" />
                                    </div>
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