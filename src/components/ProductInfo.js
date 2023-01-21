import React from "react";
import ProductTitle from './ProductTitlle';
import TableProduct from './TableProduct'
import JoinProductLevel from "./JoinProductLevel";
import Descriptions from "./Description";
function ProductInfo() {

    return (
        <>
            <div className='inf--o'>
                <ProductTitle />
                <TableProduct/>
                <JoinProductLevel/>
                <Descriptions/>
            </div>
        </>
    );
}

export default ProductInfo;
