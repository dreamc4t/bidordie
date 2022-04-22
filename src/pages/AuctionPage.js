import { useEffect, useState } from "react";
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
  })

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

  function handleSubmit(e) {
    console.log(e.target)
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
              <input type="number" min={auction.currentHighestBid + 10}></input>
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
