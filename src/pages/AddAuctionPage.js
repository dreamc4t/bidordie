import AuctionService from "../services/AuctionService";
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';


const AddAuctionPage = () => {
    const [auctions, setAuctions] = useState({
        availablePeriodStart: "",
        availablePeriodEnd: "",
        openingPrice: "",
        buyoutPrice: "",
        auctionEndTime: "",
    });
    
    const [auction, setAuction] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name,value)
        setAuctions({...auctions, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(auctions.availablePeriodStart && auctions.availablePeriodEnd && auctions.openingPrice && auctions.buyoutPrice && auctions.auctionEndTime){
            const newAuction = {auctions}
            AuctionService.createAuction(newAuction)
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
                        <input onChange={handleChange} name="startTime" value={auctions.availablePeriodStart} type="date"></input>
                    </div>
                </div>
                <div className="form-right-side">
                    <div className="add-input-container">
                        <label>End price:</label>
                        <input onChange={handleChange} name="buyoutPrice" type="text" value={auctions.buyoutPrice}></input>
                    </div>
                    <div className="add-input-container">
                        <label>Available end date:</label>
                        <input onChange={handleChange} name="endTime" value={auctions.availablePeriodEnd} type="date"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Auction end time:</label>
                        <input onChange={handleChange} name="endTime" value={auctions.auctionEndTime} type="date"></input>
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
