import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./Data"

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div>
            <h1>{thisProduct.title}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.desc}</p>
        </div>
    )
}

export default ProductDetail