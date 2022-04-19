
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';


const AddAuctionPage = () => {

    const [inputText, setInputText] = useState("");
    const [auctions, setAuctions] = useState([]);



    const addAuction = (e) => {
        e.preventDefault();
        if (inputText.trim() === "") return;
    
        AuctionService.createAuction({
            availablePeriodStart: e.target.availablePeriodStart.value,
            availablePeriodEnd: e.target.availablePeriodEnd.value,
            openingPrice: e.target.openingPrice.value,
            buyoutPrice: e.target.buyoutPrice.value,
            ownerId: 12,
            endTime: e.target.endtime.value,

        }).then(() => {
          setInputText("")
        })
      };
    }

    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    }

    const submitAuction = (event) => {
        event.preventDefault();
        addAuction(event)
        setInputText("");
    }

  return (
    <div className="add-auction-page">
        <div className="add-auction-container">
            <form onSubmit={submitAuction} className="add-auction-form">
                <div className="form-mid-side">
                    <div className="add-input-container">
                        <label>Start price:</label>
                        <input onChange={inputTextHandler} name="openingPrice" value={inputText.openingPrice} type="text"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Available start date:</label>
                        <input onChange={inputTextHandler} name="startTime" value={inputText.startTime} type="date"></input>
                    </div>
                    <div className="comment-container">
                        <textarea className="comment" placeholder="Comment.."></textarea>
                    </div>
                </div>
                <div className="form-right-side">
                    <div className="add-input-container">
                        <label>End price:</label>
                        <input onChange={inputTextHandler} name="buyoutPrice" type="text" value={inputText.buyoutPrice}></input>
                    </div>
                    <div className="add-input-container">
                        <label>Available end date:</label>
                        <input onChange={inputTextHandler} name="endTime" value={inputText.endTime} type="date"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Auction end time:</label>
                        <input onChange={inputTextHandler} name="endTime" value={inputText.endTime} type="date"></input>
                    </div>
                    <div className="add-button-container">
                        <button type="submit" id="add-auction-button">Add Auction</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddAuctionPage;
