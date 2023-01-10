import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../components/Data"
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


function ProductDetail() {

    const { productId } = useParams()
    const P = productsData.find(prod => prod.id === productId)

    return (
        <>
            <Navbar />
          
            <Footer />
        </>
    )
}

export default ProductDetail