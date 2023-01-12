import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Navbar from "../components/Navbar";

function ProductDetail() {

    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <Navbar />
        </>
    )
}

export default ProductDetail