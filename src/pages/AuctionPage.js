import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";

const AuctionPage = ({ auctionOwnerId, auctionId }) => {

  // temp fix
  auctionId = "625fc145f5b7233e4ed15e1f"
  auctionOwnerId = "625eec4b50707060314a00f0" //id from mongoDB
  // end of temp fix

  const [user, setUser] = useState(null)
  const [auction, setAuction] = useState(null)

  useEffect(() => {
    getUserFromDb()
    getAuctionFromDb()
  }, [])

  function getUserFromDb() {
    AuthService.getUserById(auctionOwnerId)
      .then(function(response) {
          setUser(response.data)
      })
      .catch(function(response) {
        console.log('get user error: ' +  response)
      })
  }

  function getAuctionFromDb() {
    AuctionService.getAuctionById(auctionId)
      .then(function(response) {
          setAuction(response.data)
      })
      .catch(response => {
        console.log('get auction error: ' + response)
      })
  }


  return (
    (auction && user) ?
      <div>
        <div className="auction__page">
          <div className="AuctionPersonInfo">
            <img src={user.imageUrl} alt="image of {firstName}" width="250"></img>
          </div>

          <form className="auction__form">
            <div className="bidding__info">
              <div className="leading__offer">
                <label>Ledande bud</label>
                <p>{auction.currentHighestBid}kr/h</p>
              </div>
              <div className="end__time">
                <label>Sluttid</label>
                <p>{auction.auctionEndTime}</p>
              </div>
              <div className="butOut">
                <label>Köp ut</label>
                <p>{auction.buyoutPrice}</p>
              </div>
            </div>
            <label className="lowest__offer__tomake">
              Lägg {auction.currentHighestBid + 10}kr/h eller mer
            </label>
            <div className="bid_container">
              <input type="number" min={auction.currentHighestBid + 10}></input>
              <button type="submit">Lägg bud</button>
              <button>Like</button>
            </div>
          </form>
        </div>
        <div className="description__container">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h5>Beskrivning</h5>
          <p>{user.otherInfo}</p>
        </div>
        <div className="question__container">
          <input
            className="question__input"
            placeholder="Ask a question!"
            type="text"
          ></input>
          <button className="question__button" type="submit">
            ASK!
          </button>
        </div>
        <div className="question_list_container">
          <ul className="qustion_list"> </ul>
        </div>
      </div>
      : null
  );
};

export default AuctionPage;
