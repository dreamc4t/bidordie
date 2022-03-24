import {userState} from "react" 
import {GoLocation} from "react-icons/go"
import {AiFillCalendar} from "react-icons/ai"
import useFetch from "../customHooks/useFetch";

const Auction = ({ auction }) => {

    const { data: users } = useFetch("http://localhost:6001/users");


    let town, firstName, lastName, imageUrl, otherInfo, competence = ""

    users &&
      users.map((user) => {
        if ((auction.userId === user.id)) {
          town = user.town
          firstName = user.firstName
          lastName = user.lastName
          imageUrl = user.imageUrl
          otherInfo = user.otherInfo
          competence = user.competence
        }
      });


    return (
        <div className="auction">
            <div className="image">
                <img src={imageUrl} alt= '' />
            </div>
            <div className="info-container">
                <div className="personalInfo">
                    <p className="boldText">{firstName} {lastName}</p>
                    <p><GoLocation/>{town}</p>
                    <p><AiFillCalendar/>From {auction.startTime} to {auction.endTime}</p>
                </div>
                <div className="briefInfo">
                    <p className="boldText">About me</p>
                    <p>{otherInfo}</p>
                    <p className="comp">Competence: {competence}</p>
                    <p><AiOutlineHeart/></p>
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

export default Auction 