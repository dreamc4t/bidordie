import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import {GoLocation} from "react-icons/go";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";

import { LoginContext } from "../App";

const AuctionPage = ({ idOfLoggedInUser }) => {

  const {auctionId, auctionOwnerId} = useParams()

  const login = useContext(LoginContext)

  const [user, setUser] = useState()
  const [auction, setAuction] = useState()
  const [bidValue, setBidValue] = useState("")
  const [bidMessage, setBidMessage] = useState("")
  const [questionValue, setQuestionValue] = useState("")

  useEffect(() => {
    AuthService.getUserById(auctionOwnerId)
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
  }, [])


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function formatToDateWithoutTime(string) {
    return string.replace('T', ' ').slice(0, string.length-19)
  }

  function formatToDateWithTime(string) {
    return string.replace('T', ' ').slice(0, string.length-13)
  }


  function handleBidSubmit(e) {
    e.preventDefault()
    if (bidValue < auction.currentHighestBid) return
    if (!login.isACompany) return
    const userIsSure = window.confirm('Du kommer nu binda dig till att lägga ett bud på ' + bidValue + 'kr. Är du säker?')
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
              {(bidValue >= auction.currentHighestBid + 10 && login.isACompany) ? <button className="auction-page-button" type="submit">Lägg bud</button> : <button className="auction-page-button" type="submit" disabled>Lägg bud</button>}
            </div>
          </form>
          
        </div>
      </div>

      <div className="description-container">
        {user.biography && <h5>Om {capitalizeFirstLetter(user.firstName)}</h5>}
        {user.biography && <p>{user.biography}</p>}
        {user.competence && <h5>Competences: </h5>}
        <ul>
        {user.competence &&
          user.competence.map(item => {
            return <li>{item}</li>
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
