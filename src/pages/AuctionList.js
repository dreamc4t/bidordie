//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { Navigate } from "react-router-dom";
import AuctionService from "../services/AuctionService";

const AuctionList = ({ setChosenAuction, chosenAuction }) => {

    useEffect(() => {
      //setChosenAuction(-1)
      getAllAuctions()
    }, [])

  const [AllAuctions, setAllAuctions] = useState([]);

  const getAllAuctions= () => {
    AuctionService.getAllAuctions().then(function(response){
      setAllAuctions(response.data)
        console.log(response.data)

    });
  }

    return (
      <div className="auction-list" >
        {chosenAuction != -1 && <Navigate to="auction-page" />} 
        <SortBar />
        <div className="auction-container">
          {AllAuctions &&
            AllAuctions.map((auction) => (
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