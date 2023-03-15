import React from "react";
import ProductTitle from '../Titles/ProductTitlle';
import TableProduct from '../Tables/TableProduct'
import JoinProductLevel from "../JoinProductLevel";
import Descriptions from "../Description";
import Supply from "../Supply";
function ProductInfo() {

    return (
        <>
            <div className='inf--o'>
                <ProductTitle />
                <TableProduct/>
                <JoinProductLevel/>
                <Supply/>
                <Descriptions/>
            </div>
        </>
    );
}

export default ProductInfo;
