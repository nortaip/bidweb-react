import React from "react";
import AuctionLive from "./Bid";
import ActivityAuction from "./ActibityAuction";

function AuctionInfo() {

    return (
        <>
            <div className='inf--o'>
                <ActivityAuction />
                <AuctionLive />
            </div>
        </>
    );
}

export default AuctionInfo;
