import React from "react";
import {useParams} from "react-router-dom";
import Data from "./Data";


function ProductDetail() {
    const {ValId} = useParams()
    const thisProduct = Data.find(prod => Val.id === productId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail