//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";

const AuctionList = () => {



    const { data: auctions, isLoading } = useFetch("http://localhost:6001/auctions");

    return (
      <div className="auction-list" >
        <SortBar />
        <div className="auction-container">
          {isLoading && <div> LOADING CONTENT....</div>}
          {auctions &&
            auctions.map((auction) => (
              <div className="auction-kort" key={auction.id}>
                 
                 <Auction auction={auction}/>

                </div>

            ))}
        </div>
      </div>
    );



};

export default AuctionList;


/*

              <Auction
                key={auction.id}
                auction={auction}
              />

              */