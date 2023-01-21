import React from "react";
import ProductTitle from './ProductTitlle';
import TableProduct from './TableProduct'
import JoinProductLevel from "./JoinProductLevel";
function ProductInfo() {

    return (
        <>
            <div className='inf--o'>
                <ProductTitle />
                <TableProduct/>
                <JoinProductLevel/>
            </div>
        </>
    );
}

export default ProductInfo;
