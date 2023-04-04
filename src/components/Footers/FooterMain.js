import React from "react";
import logoxl from '../../imgs/logoxl.png';
import { Col, Row, FloatButton } from 'antd';

function FooterMain() {
    return (
        <>
            <div className="space-align-container">
                <footer className="top">
                    <img src={logoxl} alt="Logo" />
                    <div className="links">
                        <div>
                            <h2>Platform</h2>
                            <a>Directur</a>
                            <a>Directur</a>
                            <a>Directur</a>
                            <a>Directur</a>
                            <a>Directur</a>
                            <a>Directur</a>
                        </div>
                        <div>
                            <h2>Cloud</h2>
                            <a>directus</a>
                            <a>directus</a>
                            <a>directus</a>
                            <a>directus</a>
                            <a>directus</a>
                            <a>directus</a>
                        </div>
                    </div>
                </footer>
                <footer className="bottom">
                    <div className="legal">
                        <span>2023 all right reservered</span>
                        <a>Licence</a>
                    </div>
                    <div className="links">
                    </div>
                </footer>
                <FloatButton.BackTop />
            </div>
        </>
    );
}

export default FooterMain;
