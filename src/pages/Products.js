import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Table from 'react-bootstrap/Table';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function ProductDetail() {
    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>{P.title}</h1>
                <img loading="lazy" src={P.img} alt={P.title} />
                <p>Price: ${P.price}</p>
                <p>{P.desc}</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Marka</th>
                            <th>№</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Model</td>
                        </tr>
                        <tr>
                            <td>Buraxılış ili</td>
                        </tr>
                        <tr>
                            <td>Ban növü</td>
                        </tr>
                        <tr>
                            <td>Şassi İD</td>
                        </tr>
                        <tr>
                            <td>Rəng</td>
                        </tr>
                    </tbody>

                </Table>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail