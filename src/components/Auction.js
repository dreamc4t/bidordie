import {useCallback, userState} from "react";
import {GoLocation} from "react-icons/go";
import {AiFillCalendar} from "react-icons/ai";
import useFetch from "../customHooks/useFetch";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {useHistory, useLocation} from "react-router-dom"


const Auction = ({ auction, setChosenAuction }) => {

    const handleOnClick = () => {
      setChosenAuction(auction.id)
    }

  users &&
    users.map((user) => {
      if (auction.userId === user.id) {
        town = user.town;
        firstName = user.firstName;
        lastName = user.lastName;
        imageUrl = user.imageUrl;
        otherInfo = user.otherInfo;
        competence = user.competence;
      }
    });

  return (
    <div className="auction">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="info-container">
        <div className="personalInfo">
          <p className="boldText">
            {firstName} {lastName}
          </p>
          <p>
            <GoLocation />
            {town}
          </p>
          <p>
            <AiFillCalendar />
            From {auction.startTime} to {auction.endTime}
          </p>
        </div>

                </div>
                  <div className="briefInfo">
                      <p className="boldText">About me</p>
                      <p>{otherInfo}</p>
                      <p className="comp">Competence: {competence}</p>
                  </div>
              </div>
          </div>
    );
}

/*firstName={auction.firstName}
lastName={auction.lastName}
place= {auction.place}
availability={auction.availability}
competence={auction.competence}
briefInformation={auction.briefInformation}*/

export default Auction;
