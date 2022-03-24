
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';


const AddAuctionPage = () => {

    const [inputText, setInputText]= useState("");

    const request = ({ endpoint, method, data }) => {
        fetch(endpoint, {
          body: JSON.stringify(data),
          method,
          headers: {
            "Content-Type": "application/json",
          },
        });
      };

    const addAuction = (data) => {
        request({
          endpoint: "http://localhost:6001/auctions",
          method: "POST",
          data,
        });
      };
      

    const createAuction = (e) => {
        const newAuction = {
            id: uuidv4(),
            startTime: e.target.openingPrice.value,
            endTime: e.target.startTime.value,
            openingPrice: e.target.buyoutPrice.value,
            buyoutPrice: e.target.endTime.value,
            userId: e.target.buyoutPrice.value
        }

        addAuction(newAuction)
    }

    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    }

    const submitAuction = (event) => {
        event.preventDefault();
        createAuction(event)
        setInputText("");
    }

  return (
    <div className="add-auction-page">
        <div className="add-auction-container">
            <form onSubmit={submitAuction} className="add-auction-form">
                <div className="form-left-side">
                    <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"  className="add-auction-image" alt=""></img>
                    <div className="competence-container">
                        <div className="competence">
                            <label htmlFor="java"> Java</label>
                            <input type="checkbox" id="competence-button" name="java"></input>
                        </div>
                        <div className="competence">
                            <label htmlFor="python"> Python</label>
                            <input type="checkbox" id="competence-button" name="python"></input>
                        </div>
                        <div className="competence">
                            <label htmlFor="c#"> C#</label>
                            <input type="checkbox" id="competence-button" name="c#"></input>
                        </div>
                        <div className="competence">
                            <label htmlFor="javascript"> Javascript</label>
                            <input type="checkbox" id="competence-button" name="javascript"></input>
                        </div>
                        <div className="competence">
                            <label htmlFor="html-css"> HTML/CSS</label>
                            <input type="checkbox" id="competence-button" name="html-css"></input>
                        </div>
                    </div>
                </div>
                <div className="form-mid-side">
                    <div className="add-input-container">
                        <label>Start price:</label>
                        <input onChange={inputTextHandler} name="openingPrice" value={inputText.openingPrice} type="text"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Start date:</label>
                        <input onChange={inputTextHandler} name="startTime" value={inputText.startTime} type="text"></input>
                    </div>
                    <div className="comment-container">
                        <textarea className="comment" placeholder="Avrora eller Aurora eller Aphora eller Affe? Affe har aldrig varit mobbad för att hon var duktig på fotboll!"></textarea>
                    </div>
                </div>
                <div className="form-right-side">
                    <div className="add-input-container">
                        <label>End price:</label>
                        <input onChange={inputTextHandler} name="buyoutPrice" type="text" value={inputText.buyoutPrice}></input>
                    </div>
                    <div className="add-input-container">
                        <label>End date:</label>
                        <input onChange={inputTextHandler} name="endTime" value={inputText.endTime} type="text"></input>
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
