import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Table from 'react-bootstrap/Table';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductDetail() {

    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className=" imgdfsd" loading="lazy" src={P.img} alt={P.title} />
                    </div>
                    <div className="right-info col-md-6 container">
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
                                        <h6 className="ID">250355</h6>
                                    </div>
                                </div>
                                <div className="hvheryfj">
                                    <h6 className="stdfhds-h6" >Auction</h6>
                                    <h6 className="stdfhdfghlds-h6">Maxsim</h6>
                                </div>
                                <div className="hvheryfj">
                                    <h6 className="stdfhds-h6">Date/time</h6>
                                    <h6 className="stdfhdfghlds-h6" >16.09.2021 09:48</h6>
                                </div>
                                <div className="hvheryfj">
                                    <h6 className="stdfhds-h6">Status</h6>
                                    <div className="Status">
                                        <div className="dot"/>
                                        <h6 className="stdfhdfghlds-h6">Online</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="Condition">
                                <h6 className="Regular">Condition</h6>
                                <h5 className="SemiBold">4.5</h5>
                            </div>
                        </div>
                        <Table className="sdfhsfyjg table">
                            <tbody className="table-start col-md-4">
                                <td>Model</td>
                                <td>Buraxılış ili</td>
                                <td>Ban növü</td>
                                <td>Şassi İD</td>
                                <td>Rəng</td>
                            </tbody>
                            <tbody className="table-end col-md-4">
                                <td>Model</td>
                                <td>Buraxılış ili</td>
                                <td>Ban növü</td>
                                <td>Şassi İD</td>
                                <td>Rəng</td>
                            </tbody >
                            <tbody className="table-start col-md-4">
                                <td>Model</td>
                                <td>Buraxılış ili</td>
                                <td>Ban növü</td>
                                <td>Şassi İD</td>
                                <td>Rəng</td>
                            </tbody>
                            <tbody className="table-end col-md-4">
                                <td>Model</td>
                                <td>Buraxılış ili</td>
                                <td>Ban növü</td>
                                <td>Şassi İD</td>
                                <td>Rəng</td>
                            </tbody>
                        </Table>
                        <div className="jgfdt">
                            <div className="price" >
                                <div className="dfgjmes">
                                    <h2 className="Price Bold">{P.price}/</h2>
                                    <h5 className="currentbid semiBold">current bid</h5>
                                </div>
                                <div className="gfhdfhgd">
                                    <h5 className="str-prc">$100.00</h5>
                                    <h6 className="startprice">start price</h6>
                                </div>
                            </div>
                            <Link to={`/auction/${P.id}`}><Button className="btn">Join to auction</Button></Link>
                        </div>
                    </div>
                    <div className="container" >
                        <div className="fgsdfgsd">
                            <h4 className="SemiBold">Description</h4>
                            <h5 className="Regular">NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</h5>
                        </div>
                    </div>
                   
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail