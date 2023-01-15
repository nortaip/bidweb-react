import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Navbar from "../components/Navbar";
import Footers from "../components/footer";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Col, Row, Space, Image,Layout } from 'antd';
const { Header, Footer, Content } = Layout;
function ProductDetail() {
    const [visible, setVisible] = useState(false);
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)
    
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
                <Row gutter={24} offset={12}>
                    <Col span={6}>
                        <Image
                            preview={{ visible: false }}
                            width={200}
                            src={P.img} alt={P.title}
                            onClick={() => setVisible(true)}
                        />
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                            <Image src={P.img} />
                            <Image src={P.img} />
                            <Image src={P.img} />
                        </Image.PreviewGroup>
                    </Col>
                    <Col span={12}>
                        <div className="header" >
                            <h2 className="title" >{P.title}</h2>
                            <div className="live-end" >
                                <h6 className="live" >LIVE</h6>
                                <AiOutlineHeart />
                            </div>
                        </div>
                        <div className="stdfhds" >
                            <div className="isergsfd">
                                <div className="hvheryffgd">
                                    <h6 className="stdfhds-h6">Lot number</h6>
                                    <div className="sfghsdfh">
                                        <h6 className="ID">{P.id}</h6>
                                    </div>
                                </div>
                                <div className="hvheryfj">
                                    <h6 className="stdfhds-h6" >Auction</h6>
                                    <h6 className="stdfhdfghlds-h6">Maxsim</h6>
                                </div>
                                <div className="hvheryfj">
                                    <h6 className="stdfhds-h6">Date/time</h6>
                                    <h6 className="stdfhdfghlds-h6" >{P.date}</h6>
                                </div>
                                <div className="hvheryfj">
                                    <h6 className="stdfhds-h6">Status</h6>
                                    <div className="Status">
                                        <div className="dot" />
                                        <h6 className="stdfhdfghlds-h6">Online</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="Condition">
                                <h6 className="Regular">Condition</h6>
                                <h5 className="SemiBold">{P.Condition}</h5>
                            </div>
                        </div>
                        <div className="sdfhsfyjg table">
                            <tbody className="table-start col-md-4">
                                <td>Marka</td>
                                <td>Model</td>
                                <td>Buraxılış ili</td>
                                <td>Ban növü</td>
                                <td>Şassi İD</td>
                                <td>Rəng</td>
                            </tbody>
                            <tbody className="table-end col-md-4">
                                <td>{P.category}</td>
                                <td>{P.title}</td>
                                <td>{P.year}</td>
                                <td>{P.Ban}</td>
                                <td>{P.shassi}</td>
                                <td>{P.color}</td>
                            </tbody >
                            <tbody className="table-start col-md-4">
                                <td>Mühərrik gücü</td>
                                <td>Mühərrik</td>
                                <td>Yanacaq növü</td>
                                <td>Yürüş</td>
                                <td>Sürətlər qutusu</td>
                                <td>Ötürücü</td>
                            </tbody>
                            <tbody className="table-end col-md-4">
                                <td>{P.HP}</td>
                                <td>{P.litr}</td>
                                <td>{P.Benzin}</td>
                                <td>{P.Km}</td>
                                <td>{P.mekanik}</td>
                                <td>{P.transmitter}</td>
                            </tbody>
                        </div>
                        <div className="jgfdt">
                            <div className="price" >
                                <div className="dfgjmes">
                                    <h2 className="Price Bold">₼{P.price}/</h2>
                                    <h5 className="currentbid semiBold">current bid</h5>
                                </div>
                                <div className="gfhdfhgd">
                                    <h5 className="str-prc">₼{P.strPrice}</h5>
                                    <h6 className="startprice">start price</h6>
                                </div>
                            </div>
                            <Link to={`/auction/${P.id}`}><Button className="btn">Join to auction</Button></Link>
                        </div>
                    </Col>
                </Row>
                <Row gutter={24} >
                    <div className="fgsdfgsd">
                        <h4 className="SemiBold">Description</h4>
                        <h5 className="Regular">{P.desc}</h5>
                    </div>
                </Row>
            </Space>
            <Footers />
        </>
    )
}

export default ProductDetail