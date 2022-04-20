import { Navigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";

const AuctionPage = ({ idOfLoggedInUser, auctionId }) => {

  const navigate = Navigate()
  const auction = null
  const user = null

  // get user from db
  AuthService.getUserById( idOfLoggedInUser )
    .then(response => {
      if (response === null) {
        console.log('user not found')
        navigate("/", {replace: true})
      } else {
        user = response.data
      }
    })

  // get auction from db
  AuctionService.getAuctionById(auctionId)
    .then(response => {
      if (response === null) {
        alert("Auction Page not found")
        navigate("/", {replace: true})
      } else {
        auction = response.data
      }
    })
    .catch(response => {
      console.log(response)
    })

  return (
    <div>
      <div className="auction__page">
        <div className="AuctionPersonInfo">
          <img src={auction.imageUrl} alt="image of {firstName} " width="250"></img>
        </div>

        <form className="auction__form">
          <div className="bidding__info">
            <div className="leading__offer">
              <label>Ledande bud</label>
              <p>{currentBid}kr/h</p>
            </div>
            <div className="end__time">
              <label>Sluttid</label>
              <p>{timer}</p>
            </div>
            <div className="number_of_bids">
              <label>Antal bud</label>
              <p>5st</p>
            </div>
            <div className="butOut">
              <label>Köp ut</label>
              <p>{buyoutPrice}</p>
            </div>
          </div>
          <label className="lowest__offer__tomake">
            Lägg {currentBid + 10}kr/h eller mer
          </label>
          <div className="bid_container">
            <input type="number" min={currentBid + 10}></input>
            <button type="submit">Lägg bud</button>
            <button>Like</button>
          </div>
        </form>
      </div>
      <div className="description__container">
        <h2>
          {firstName} {lastName}
        </h2>
        <h5>Beskrivning</h5>
        <p>{otherInfo}</p>
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
  );
};

export default AuctionPage;
