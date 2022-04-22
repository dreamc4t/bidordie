import { useEffect, useState } from "react";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";
import { Link } from "react-router-dom";

const AuctionPage = ({ chosenAuctionInfo, setChosenAuctionInfo, idOfLoggedInUser, setChosenProfilePage }) => {

  // TODO make sure when user refreshes it sends you back to auctions

  const [user, setUser] = useState()
  const [auction, setAuction] = useState()
  const [bidValue, setBidValue] = useState()

  useEffect(() => {
    setBidValue(chosenAuctionInfo.auction.currentHighestBid + 10)
    setUser(chosenAuctionInfo.user)
    setAuction(chosenAuctionInfo.auction)
    console.log(user)
    console.log(auction)
  }, [])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function formatToDate(string) {
    return string.replace('T', ' ').slice(0, string.length-19)
  }

  function formatToDateWithTime(string) {
    return string.replace('T', ' ').slice(0, string.length-13)
  }

  function handleSubmit(e) { 
    e.preventDefault()
    console.log('Bid placed. Amount: ' + bidValue)

    AuctionService.placeBid(auction.auctionId, idOfLoggedInUser, bidValue)
      .then((response) => {

        if (response.status === 200) {
          AuctionService.getAuctionById(auction.auctionId)
            .then((response) => {
              setAuction(response.data)
              setBidValue(response.data.currentHighestBid + 10)
              console.log('auction updated from db')
            }).catch((response) => {
              console.log(response)
            })
        }

      }).catch((response) => {
        console.log(response)
      })
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
          <button className="auction-page-button" onClick={() => setChosenProfilePage({
            user: user
          })}>
            <Link to="/profile-page-user">Go to profile</Link>
          </button>
          
          <div className="auction-info">
              
              <p>Gäller period: {formatToDate(auction.availablePeriodStart)} - {formatToDate(auction.availablePeriodEnd)}</p>
              <p>Högsta bud: {auction.currentHighestBid}kr/h</p>
              <p>Vinn auktion direkt: {auction.buyoutPrice}</p>
              <p>Sluttid: {formatToDateWithTime(auction.auctionEndTime)}</p>
              
              </div>

          <div className="lowest-offer-tomake">
            Lägg {auction.currentHighestBid + 10}kr/h eller mer
          </div>

          <form className="auction-form" onSubmit={handleSubmit}>
            <div className="bid-container">
              <input type="text" value={bidValue} onChange={handleChange}></input>
              <button className="auction-page-button" type="submit">Lägg bud</button>
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
        <button className="auction-page-button">
          Skicka
        </button>
      </form>
    </div>
    : <p>Loading info</p>
  );
};

export default AuctionPage;
