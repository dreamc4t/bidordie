import {useCallback, useState, useEffect} from "react";
import {GoLocation} from "react-icons/go";
import {AiFillCalendar} from "react-icons/ai";
import useFetch from "../customHooks/useFetch";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {useHistory, useLocation} from "react-router-dom"
import AuthService from "../services/AuthService";
import AuctionService from "../services/AuctionService";



const Auction = ({ auction, user }) => {

    let town, firstName, lastName, imageUrl, otherInfo, competence, availablePeriodStart, availablePeriodEnd = ""
    town = user.town
    firstName = user.firstName
    lastName = user.lastName
    imageUrl = user.imageUrl
    otherInfo = user.otherInfo
    user.competence && (competence= user.competence.join(', '));
    auction.availablePeriodStart && (availablePeriodStart = auction.availablePeriodStart.replace('T', ' ').slice(0, auction.availablePeriodStart.length-19)) 
    auction.availablePeriodEnd && (availablePeriodEnd = auction.availablePeriodEnd.replace('T', ' ').slice(0, auction.availablePeriodEnd.length-19))
    
    return (
      (auction) ?
          <div className="auction">
            <div className="image">
                <img src={imageUrl} alt= '' />
            </div>
            <div className="info-container">
                <div className="personalInfo">
                    <p className="boldText">{firstName} {lastName}</p>
                    <p><GoLocation/>{town}</p>
                    <p><AiFillCalendar/>From {availablePeriodStart} to {availablePeriodEnd}</p>
                    <p><AiOutlineHeart/></p>
                </div>
                  <div className="briefInfo">
                      <p className="boldText">About me</p>
                      <p>{otherInfo}</p>
                      <p className="comp">Competence: {competence}</p>
                  </div>
              </div>
          </div>
          :null
    );
}

/*firstName={auction.firstName}
lastName={auction.lastName}
place= {auction.place}
availability={auction.availability}
competence={auction.competence}
briefInformation={auction.briefInformation}*/

/*
<div className="rating">
     <Rating 
        ratingValue={Rating}
        changeRating={setRating}
        starEmptyColor="#999999"
        starSpacing={10}
        starDimension={30} />
</div>*/

/*const Rating = () => {
        const [rating, setRating] = useState(0);
        return (
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? "on" : "off"}
                  onClick={() => setRating(index)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        );
      };*/

      /*let history = useHistory();
      const handleOnClick = (event) => {
          history.push ({
              pathname:'/auction-page',
          })
          console.log ("click")
          
      }
  
      const navigate = useNavigate ();*/

export default Auction 
