import React from "react";
import { useParams } from "react-router-dom";
import Data from "../components/Data";

function ProductDetail() {
    const { ValId } = useParams()
    const thisProduct = Data.find(Val => Val.id === ValId)

    return (
        <div>
            <h1>{thisProduct.title}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.desc}</p>
        </div>
    )
}

export default ProductDetail;