//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";

const AuctionList = ({}) => {

    /*ERIK KOD */

/*
    useEffect (() => { 
        fetch('http://localhost:6001/users').then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            setAuctions(data)
        })
    }, [])
    const [auctions, setAuctions] = useState ([])
*/

    const { data: auctions, isLoading } = useFetch("http://localhost:6001/auctions");

    return (
      <div className="auction-list">
        <SortBar />
        <div className="auction-container">
          {isLoading && <div> LOADING CONTENT....</div>}
          {auctions &&
            auctions.map((auction) => (
              <Auction
                key={auction.auctionId}
                imageUrl={auction.imageUrl}
                firstName={auction.firstName}
                lastName={auction.lastName}
                place={auction.town}
                
                availability={auction.startTime + " - " + auction.endTime}
                competence={"Java, HTML/CSS, Python, SQL, JavaScript"}
                briefInformation={auction.otherInfo}
              />
            ))}
        </div>
      </div>
    );

    /* SLUTAR HÄR */


    /*
    return(
        <div className="auction-list">
            <SortBar />
            <div className="auction-container">
            <Auction 
                firstName={"Erik"}
                lastName={"Sund"}
                place= {"Malmö"}
                availability={"1th-30th may"}
                competence={"Java, HTML/CSS, Python, SQL, JavaScript"}
                briefInformation={"Hej! Jag är en glad, trevlig och driven programmerare som älskar utmaningar. Jag håller huvudet kallt under pressade situationer och kan komma med egna idéer."} />
            </div>
        </div>
    );
    */

};

export default AuctionList;