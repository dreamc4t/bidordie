import AuctionService from "../services/AuctionService";
import {useState, useContext} from "react";

import { LoginContext } from "../App";


const AddAuctionPage = () => {
    

    const loginContext = useContext(LoginContext)

    const [auctions, setAuctions] = useState({
        availablePeriodStart: "",
        availablePeriodEnd: "",
        openingPrice: "",
        buyoutPrice: "",
        auctionEndTime: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name,value)
        setAuctions({...auctions, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(auctions)
        if(auctions.availablePeriodStart && auctions.availablePeriodEnd && auctions.openingPrice && auctions.buyoutPrice && auctions.auctionEndTime){
            const newAuction = auctions
            console.log(newAuction)
            AuctionService.createAuction(newAuction, loginContext.idOfLoggedInUser)
            setAuctions({
                availablePeriodStart: "",
                availablePeriodEnd: "",
                openingPrice: "",
                buyoutPrice: "",
                auctionEndTime: "",
        })
        }
    }

  return (
    <div className="add-auction-page">
        <div className="add-auction-container">
            <form className="add-auction-form">
                <div className="form-mid-side">
                    <div className="add-input-container">
                        <label>Start price:</label>
                        <input onChange={handleChange} name="openingPrice" value={auctions.openingPrice} type="text"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Available start date:</label>
                        <input onChange={handleChange} name="availablePeriodStart" value={auctions.availablePeriodStart} type="date"></input>
                    </div>
                </div>
                <div className="form-right-side">
                    <div className="add-input-container">
                        <label>End price:</label>
                        <input onChange={handleChange} name="buyoutPrice" type="text" value={auctions.buyoutPrice}></input>
                    </div>
                    <div className="add-input-container">
                        <label>Available end date:</label>
                        <input onChange={handleChange} name="availablePeriodEnd" value={auctions.availablePeriodEnd} type="date"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Auction end time:</label>
                        <input onChange={handleChange} name="auctionEndTime" value={auctions.auctionEndTime} type="date"></input>
                    </div>
                    <div className="add-button-container">
                        <button type="submit" id="add-auction-button" onClick={handleSubmit}>Add Auction</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddAuctionPage;
