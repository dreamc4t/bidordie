import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import {GoLocation} from "react-icons/go";
import AuctionService from "../services/AuctionService";
import UserService from "../services/UserService";

import { LoginContext } from "../App";

const AuctionPage = ({ idOfLoggedInUser }) => {

  // Params
  const {auctionId, auctionOwnerId} = useParams()

  // Context
  const loginContext = useContext(LoginContext)

  // State
  const [user, setUser] = useState()
  const [auction, setAuction] = useState()
  const [bidValue, setBidValue] = useState("")
  const [bidMessage, setBidMessage] = useState("")
  const [questionValue, setQuestionValue] = useState("")

  // UseEffect on re-render
  useEffect(() => {
    UserService.getUserById(auctionOwnerId)
      .then(response => {
          setUser(response.data)
      })
      .catch(response => {
        console.error(response)
      })
    
    AuctionService.getAuctionById(auctionId)
      .then(response => {
          setAuction(response.data)
          setBidValue(response.data.currentHighestBid + 10)
      })
      .catch(response => {
        console.error(response)
      })
  }, [auctionId, auctionOwnerId])

  useEffect(() => {
    setBidMessage("")
    if ((bidValue && bidValue < auction.currentHighestBid + 10) || !bidValue) {
      setBidMessage("Bid too low")
    }
    if (bidValue && bidValue == auction.buyoutPrice) {
      setBidMessage("Place bid to win auction!")
    }
    if (!loginContext.isACompany) {
      setBidMessage("Only logged in companies can place bids")
    }
  }, [bidValue])

  // Helper Functions
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function formatToDateWithoutTime(string) {
    return string.replace('T', ' ').slice(0, string.length-19)
  }

  function formatToDateWithTime(string) {
    return string.replace('T', ' ').slice(0, string.length-13)
  }

  // onChange and onSubmit handlers
  function handleBidSubmit(e) {
    e.preventDefault()
    if (bidValue < auction.currentHighestBid) return
    if (!loginContext.isACompany) return
    const userIsSure = window.confirm('You are now committing to placing a bid of ' + bidValue + 'kr. Are you sure?')
    if (userIsSure !== true) return

    AuctionService.placeBid(auction.auctionId, idOfLoggedInUser, bidValue)
      .then(() => {
        alert('Congratulations, you successfully placed a bid of ' + bidValue + 'kr.')
        AuctionService.getAuctionById(auction.auctionId)
          .then((response) => {
            setAuction(response.data)
            setBidValue(response.data.currentHighestBid + 10)
          }).catch((response) => {
            console.log(response)
          })
      }).catch((response) => {
        console.error(response)
      })
  }

  function handleQuestionSubmit(e) {
    e.preventDefault()
    window.open('mailto:' + user.email + '?subject=Regarding your auction for period that starts ' + auction.availablePeriodStart + '&body=' + questionValue);
  }

  function handleBidChange(e) {
    if (e.target.value > auction.buyoutPrice) {
      setBidValue(auction.buyoutPrice)
    } else {
       if (e.target.value) {
         setBidValue(parseFloat(e.target.value))
       } else {
         setBidValue(e.target.value)
       }
    }
  }

  function handleQuestionChange(e) {
    setQuestionValue(e.target.value)
  }

  // Helper Functions
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  function formatToDateWithoutTime(string) {
    return string.replace('T', ' ').slice(0, string.length-19)
  }
  function formatToDateWithTime(string) {
    return string.replace('T', ' ').slice(0, string.length-13)
  }

  return (
    (auction && user) ?
    <div className="auction-page">

      <div id="auction-top-div">
        <div id="auction-top-left-div">
          <img src={user.imageUrl} alt={`${user.firstName}`} width="250"></img>
        </div>

        <div id="auction-top-right-div">

          <h2>
            {capitalizeFirstLetter(user.firstName)} {capitalizeFirstLetter(user.lastName)}
          </h2>

          <button className="auction-page-button">
            <Link to={"/profile-page-user/" + user.id}>Go to profile</Link>
          </button>
        
          <div className="auction-info">
            {user.town && <p><GoLocation/> {capitalizeFirstLetter(user.town)}</p>}
            <p>Concerns time-period: {formatToDateWithoutTime(auction.availablePeriodStart)} - {formatToDateWithoutTime(auction.availablePeriodEnd)}</p>
            <p>Current winning bid: {auction.currentHighestBid}kr/h</p>
            <p>Buyout price: {auction.buyoutPrice}kr</p>
            <p>Auction ends at: {formatToDateWithTime(auction.auctionEndTime)}</p>
          </div>

          <div className="lowest-offer-tomake">
            Minimum bid: {auction.currentHighestBid + 10}kr/h
          </div>

          <form className="auction-form" onSubmit={handleBidSubmit}>
            <div className="bid-container">
              <input type="text" value={bidValue} onChange={handleBidChange}></input>
              {(bidValue >= auction.currentHighestBid + 10 && loginContext.isACompany) ? <button className="auction-page-button" type="submit">Place bid</button> : <button className="auction-page-button" type="submit" disabled>Place bid</button>}
              <p id="bid-message">{bidMessage}</p>
            </div>
          </form>
          
        </div>
      </div>

      <div className="description-container">
        {user.biography && <h5>About {capitalizeFirstLetter(user.firstName)}: </h5>}
        {user.biography && <p>{user.biography}</p>}
        {user.competence && <h5>Competences: </h5>}
        <ul>
        {user.competence &&
          user.competence.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
        </ul>
      </div>

      <form className="question-container" onSubmit={handleQuestionSubmit}>
        <textarea
          id="question-textarea"
          placeholder="Ask a question!"
          cols="30"
          rows="5"
          value={questionValue}
          onChange={handleQuestionChange}
        />
        <button className="auction-page-button" type="submit">
          Send
        </button>
      </form>

    </div>
    : <p>Loading info</p>
  );
};

export default AuctionPage;
