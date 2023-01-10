import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Table from 'react-bootstrap/Table';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from "react-bootstrap";

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
                    <div className="right-info col-md-8 container">
                        <div className="header" >
                            <h2 className="title" >{P.title}</h2>
                            <div className="live-end" >
                                <h6 className="live" >LIVE</h6>
                                <AiOutlineHeart />
                            </div>
                        </div>
                        <div className="stdfhds" >
                            <div className="Frame427320631" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                <div className="Frame427320631" style={{ height: 49, display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                                    <p className="Lotnumber" style={{ fontSize: 13, lineHeight: '100%', color: 'rgba(144, 163, 191, 1)', }}>Lot number</p>
                                    <div className="Frame427320631" style={{ width: '100%', padding: 5, backgroundColor: 'rgba(0, 102, 255, 1)', borderRadius: 5, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                        <p className="250355" style={{ fontSize: 13, lineHeight: '100%', color: 'rgba(233, 234, 239, 1)', }}>250355</p>
                                    </div>
                                </div>
                                <div style={{ width: 15, }} />
                                <div className="Frame427320631" style={{ height: 49, paddingBottom: 5, display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                                    <p className="Auction" style={{ fontSize: 13, lineHeight: '100%', color: 'rgba(144, 163, 191, 1)', }}>Auction</p>
                                    <p className="Maxsim" style={{ fontSize: 13, fontWeight: '700', lineHeight: '100%', color: 'rgba(26, 24, 38, 1)', }}>Maxsim</p>
                                </div>
                                <div style={{ width: 15, }} />
                                <div className="Frame427320634" style={{ height: 49, paddingBottom: 5, display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                                    <p className="Date/time" style={{ fontSize: 13, lineHeight: '100%', color: 'rgba(144, 163, 191, 1)', }}>Date/time</p>
                                    <p className="16.09.202109:48" style={{ fontSize: 13, fontWeight: '700', lineHeight: '100%', color: 'rgba(26, 24, 38, 1)', }}>16.09.2021 09:48</p>
                                </div>
                                <div style={{ width: 15, }} />
                                <div className="Frame427320635" style={{ height: 49, paddingBottom: 5, display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                                    <p className="Status" style={{ fontSize: 13, lineHeight: '100%', color: 'rgba(144, 163, 191, 1)', }}>Status</p>
                                    <div className="Frame427320633" style={{ display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                        <div className="Ellipse463" style={{ width: 5, height: 5, backgroundColor: 'rgba(178, 209, 130, 1)', borderRadius: 9999, }} />
                                        <div style={{ width: 10, }} />
                                        <p className="Status" style={{ fontSize: 13, fontWeight: '700', lineHeight: '100%', color: 'rgba(26, 24, 38, 1)', }}>Online</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Frame427320636" style={{ padding: 10, backgroundColor: 'rgba(178, 209, 130, 1)', borderRadius: 10, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(21, 128, 61, 1)', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                <p className="Condition" style={{ fontSize: 13, lineHeight: '100%', color: 'rgba(21, 128, 61, 1)', }}>Condition</p>
                                <div style={{ height: 5, }} />
                                <p className="4.5" style={{ fontSize: 20, fontWeight: '600', lineHeight: '100%', color: 'rgba(21, 128, 61, 1)', }}>4.5</p>
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
                            <Button className="btn join-btn"><h4>Join to auction</h4></Button>
                        </div>
                    </div>
                    {/* <div className=" container" >
                        <div className="TotalReview" style={{ width: '100%', paddingRight: 20, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                            <p className="Description" style={{ fontSize: 20, fontWeight: '600', lineHeight: '100%', color: 'rgba(26, 32, 44, 1)', }}>Description</p>
                        </div>
                        <div style={{ height: 27, }} />
                        <div className="Frame427320633" style={{ width: '100%', paddingLeft: 15, paddingRight: 15, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                            <p className="NISMOhas become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the " style={{ flex: '1 1 0%', fontSize: 20, lineHeight: '100%', color: 'rgba(27, 28, 33, 1)', }}>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="TotalReview" style={{ width: '100%', paddingLeft: 20, paddingRight: 20, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                            <p className="Reviews" style={{ fontSize: 20, fontWeight: '600', lineHeight: '100%', color: 'rgba(26, 32, 44, 1)', }}>Reviews</p>
                            <div style={{ width: 12, }} />
                            <div className="TotalReview" style={{ width: 44, height: 28, paddingLeft: 20, paddingRight: 20, backgroundColor: 'rgba(53, 99, 233, 1)', borderRadius: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <p className="13" style={{ width: 20, height: 16, fontSize: 14, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white', }}>13</p>
                            </div>
                        </div>
                        <div style={{ height: 27, }} />
                        <div className="Frame427320631" style={{ width: 1200, height: 124, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', }}>
                            <div className="Frame427320631" style={{ width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                                <div className="Frame427320631" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                    <img className="Profill" style={{ width: 56, height: 56, borderRadius: 60, }} src="https://via.placeholder.com/56x56" />
                                    <div style={{ width: 10, }} />
                                    <div className="Name" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                        <p className="AlexStanton" style={{ fontSize: 20, fontWeight: '700', lineHeight: '100%', color: 'rgba(26, 32, 44, 1)', }}>Alex Stanton</p>
                                        <div style={{ height: 8, }} />
                                        <p className="CEOat Bukalapak" style={{ fontSize: 13, fontWeight: '500', lineHeight: '100%', color: 'rgba(144, 163, 191, 1)', }}>CEO at Bukalapak</p>
                                    </div>
                                </div>
                                <div className="Date" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                    <div className="Reviews" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 18.24, height: 17.47, backgroundColor: 'rgba(127.50, 58.65, 68.85, 0.50)', borderRadius: 8, borderStyle: 'solid', borderWidth: 1.50, borderStyle: 'solid', borderColor: 'rgba(195, 212, 233, 1)', }} />
                                        </div>
                                    </div>
                                    <div style={{ width: 8, }} />
                                    <p className="20July 2022" style={{ fontSize: 13, fontWeight: '500', lineHeight: '100%', textAlign: 'right', color: 'rgba(144, 163, 191, 1)', }}>20 July 2022</p>
                                </div>
                            </div>
                            <p className="Weare very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite." style={{ width: '100%', fontSize: 13, fontWeight: '500', lineHeight: '100%', color: 'rgba(61, 82, 120, 1)', }}>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                        </div>
                        <div style={{ height: 27, }} />
                        <div className="Reviews2" style={{ width: 1200, height: 128, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', }}>
                            <div className="Frame427320631" style={{ width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <div className="Frame427320631" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                    <img className="Profill" style={{ width: 56, height: 56, borderRadius: 60, }} src="https://via.placeholder.com/56x56" />
                                    <div style={{ width: 10, }} />
                                    <div className="Name" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                        <p className="SkylarDias" style={{ fontSize: 20, fontWeight: '700', lineHeight: '100%', color: 'rgba(26, 32, 44, 1)', }}>Skylar Dias</p>
                                        <div style={{ height: 8, }} />
                                        <p className="CEOat Amazon" style={{ fontSize: 13, fontWeight: '500', lineHeight: '100%', color: 'rgba(144, 163, 191, 1)', }}>CEO at Amazon</p>
                                    </div>
                                </div>
                                <div className="Date" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                    <div className="Reviews" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 16.74, height: 15.97, backgroundColor: 'rgba(251.07, 173.46, 57.05, 1)', borderRadius: 8, }} />
                                        </div>
                                        <div style={{ width: 2, }} />
                                        <div className="ic-actions-star" style={{ width: 20, height: 20, padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <div className="Vector" style={{ width: 18.24, height: 17.47, backgroundColor: 'rgba(127.50, 58.65, 68.85, 0.50)', borderRadius: 8, borderStyle: 'solid', borderWidth: 1.50, borderStyle: 'solid', borderColor: 'rgba(195, 212, 233, 1)', }} />
                                        </div>
                                    </div>
                                    <div style={{ width: 8, }} />
                                    <p className="20July 2022" style={{ fontSize: 13, fontWeight: '500', lineHeight: '100%', textAlign: 'right', color: 'rgba(144, 163, 191, 1)', }}>20 July 2022</p>
                                </div>
                            </div>
                            <p className="Weare greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite." style={{ width: '100%', fontSize: 13, fontWeight: '500', lineHeight: '100%', color: 'rgba(61, 82, 120, 1)', }}>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                        </div>
                        <div style={{ height: 27, }} />
                        <div className="ShowAll" style={{ width: 132, height: 44, paddingLeft: 20, paddingRight: 20, borderRadius: 4, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                            <p className="ShowAll" style={{ fontSize: 16, fontWeight: '600', lineHeight: '100%', textAlign: 'center', color: 'rgba(144, 163, 191, 1)', }}>Show All</p>
                            <div style={{ width: 8, }} />
                            <div className="vuesax/outline/arrow-down" style={{ width: 16, height: 16, }}>
                                <img className="arrow-down" style={{ width: 16, height: 16, borderRadius: 8, }} src="https://via.placeholder.com/16x16" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail