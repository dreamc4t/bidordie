import { useEffect, useState } from "react";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";

const AuctionPage = ({ chosenAuctionInfo, setChosenAuctionInfo, idOfLoggedInUser }) => {

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

  function handleSubmit(e) { 
    e.preventDefault()
    console.log(bidValue)
    AuctionService.placeBid(auction.auctionId, idOfLoggedInUser, bidValue)
  }

  function handleChange(e) {
    setBidValue(e.target.value)
  }

  return (
    (auction && user) ?
      <div>
        <div className="auction-page">
          <div className="auction-person-info">
            <img src={user.imageUrl} alt={`image of ${user.firstName}`} width="250"></img>
          </div>

          <form className="auction-form" onSubmit={handleSubmit}>
            <div className="bidding-info">
              <div className="leading-offer">
                <label>Ledande bud</label>
                <p>{auction.currentHighestBid}kr/h</p>
              </div>
              <div className="end-time">
                <label>Sluttid</label>
                <p>{auction.auctionEndTime.replace('T', ' ').slice(0, auction.auctionEndTime.length-13)}</p>
              </div>
              <div className="buy-out">
                <label>Vinn auktion direkt: </label>
                <p>{auction.buyoutPrice}</p>
              </div>
            </div>
            <div className="lowest-offer-tomake">
              Lägg {auction.currentHighestBid + 10}kr/h eller mer
            </div>
            <div className="bid-container">
              <input type="text" value={bidValue} onChange={handleChange}></input>
              <button type="submit">Lägg bud</button>
              <button>Like</button>
            </div>
          </form>
        </div>
        <div className="description-container">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h5>Beskrivning</h5>
          <p>{user.otherInfo}</p>
        </div>
        <div className="question-container">
          <input
            className="question-input"
            placeholder="Ask a question!"
            type="text"
          ></input>
          <button className="question-button" type="submit">
            ASK!
          </button>
        </div>
        <div className="question-list-container">
          <ul className="qustion-list"> </ul>
        </div>
      </div>
      : null
  );
};

export default AuctionPage;
