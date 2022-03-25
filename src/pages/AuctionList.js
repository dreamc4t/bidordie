//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { Navigate } from "react-router-dom";

const AuctionList = ({ setChosenAuction, chosenAuction }) => {

    useEffect(() => {
      setChosenAuction(-1)
    }, [])

    const { data: auctions, isLoading } = useFetch("http://localhost:6001/auctions");

    return (
      <div className="auction-list" >
        {chosenAuction != -1 && <Navigate to="auction-page" />} 
        <SortBar />
        <div className="auction-container">
          {isLoading && <div> LOADING CONTENT....</div>}
          {auctions &&
            auctions.map((auction) => (
              <div className="auction-kort" key={auction.id}>
                 
                 <Auction auction={auction} setChosenAuction={setChosenAuction}/>

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