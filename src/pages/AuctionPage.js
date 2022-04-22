import { useEffect, useState } from "react";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";
import { Link } from "react-router-dom";

const AuctionPage = ({ chosenAuctionInfo, setChosenAuctionInfo, idOfLoggedInUser, setChosenProfilePage }) => {

  const [user, setUser] = useState()
  const [auction, setAuction] = useState()
  const [bidValue, setBidValue] = useState()

  useEffect(() => {
    setBidValue(chosenAuctionInfo.auction.currentHighestBid + 10)
    setUser(chosenAuctionInfo.user)
    setAuction(chosenAuctionInfo.auction)
    setChosenAuctionInfo({
      user: null,
      auction: null
    })
  }, [])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function handleSubmit(e) { 
    e.preventDefault()
    console.log('Bid placed. Amount: ' + bidValue)
    AuctionService.placeBid(auction.auctionId, idOfLoggedInUser, bidValue)
  }

  function handleChange(e) {
    setBidValue(e.target.value)
  }

  return (
    (auction && user) ?
    <div className="auction-page">

      <div id="auction-top-div">
        <div id="auction-top-left-div">
          <img src={user.imageUrl} alt={`image of ${user.firstName}`} width="250"></img>
        </div>

        <div id="auction-top-right-div">
          <h2>
            {capitalizeFirstLetter(user.firstName)} {capitalizeFirstLetter(user.lastName)}
          </h2>

          <div className="auction-info">
              
              <p>Ledande bud: {auction.currentHighestBid}kr/h</p>
              <p>Vinn auktion direkt: {auction.buyoutPrice}</p>
              <p>Sluttid: {auction.auctionEndTime.replace('T', ' ').slice(0, auction.auctionEndTime.length-13)}</p>
              
              <button onClick={setChosenProfilePage(user)}><Link to="/ProfilePageUser">Go to profile</Link></button>
          </div>

          <div className="lowest-offer-tomake">
            Lägg {auction.currentHighestBid + 10}kr/h eller mer
          </div>

          <form className="auction-form" onSubmit={handleSubmit}>
            <div className="bid-container">
              <input type="text" value={bidValue} onChange={handleChange}></input>
              <button type="submit">Lägg bud</button>
            </div>
          </form>
        </div>
      </div>

      <div className="description-container">
        <h5>Information om </h5>
        <p>{user.otherInfo}</p>
      </div>

      <form className="question-container">
        <textarea
          id="question-textarea"
          placeholder="Ask a question!"
          cols="30"
          rows="5"
        />
        <button className="question-button">
          Skicka
        </button>
      </form>
    </div>
    : null
  );
};

export default AuctionPage;
