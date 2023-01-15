import React from "react";
import logoxl from '../imgs/logoxl.png';
import { Col, Row, Space } from 'antd';

export default function Footer() {
    return (
        <>
        <div className="space-align-container">
                <Row >
                    <Col flex="auto">
                        <Row className="footer">
                            <Col span={6}>
                                <img src={logoxl} alt="Logo" className="mb-3" />
                                <p className="font-italic text-muted">Azərbaycanın ilk avtomobil hərrac platforması</p>
                                <ul className="list-inline mt-4">
                                    <li className="list-inline-item"><span target="_blank" title="twitter"><i className="fa fa-twitter"></i></span></li>
                                    <li className="list-inline-item"><span target="_blank" title="facebook"><i className="fa fa-facebook"></i></span></li>
                                    <li className="list-inline-item"><span target="_blank" title="instagram"><i className="fa fa-instagram"></i></span></li>
                                    <li className="list-inline-item"><span target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></span></li>
                                    <li className="list-inline-item"><span target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></span></li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <h6 className="text-uppercase font-weight-bold">Resources</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><span className="text-muted">Home</span></li>
                                    <li className="mb-2"><span className="text-muted">Sell an item</span></li>
                                    <li className="mb-2"><span className="text-muted">My control panel</span></li>
                                    <li className="mb-2"><span className="text-muted">Help</span></li>
                                    <li className="mb-2"><span className="text-muted">Fees</span></li>
                                    <li className="mb-2"><span className="text-muted">How to Bid ?</span></li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <h6 className="text-uppercase font-weight-bold">LEGAL</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><span className="text-muted">Login</span></li>
                                    <li className="mb-2"><span className="text-muted">Register</span></li>
                                    <li className="mb-2"><span className="text-muted">About Us</span></li>
                                    <li className="mb-2"><span className="text-muted">Privacy Policy</span></li>
                                    <li className="mb-2"><span className="text-muted">Terms & Conditions</span></li>
                                    <li className="mb-2"><span className="text-muted">Cookies Policy</span></li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <h6 className="text-uppercase font-weight-bold mb-4">CONTACT INFO</h6>
                                {/* <Form className="d-flex">
                                <Form.Control
                                    type="Mail"
                                    placeholder="Test@test.com"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form> */}
                            </Col>
                        </Row>
                        <hr className="hr" />
                        <div className="">
                            <div className="">
                                <div className="">
                                    Copyright © {new Date().getFullYear()} {" "}
                                    Let's save the world and make
                                    money. | by
                                    <a href="" target="_blank" className="">Bid.az</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
        </div>
        </>
    );
}


