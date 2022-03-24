import {userState} from "react" 
import {GoLocation} from "react-icons/go"
import {AiFillCalendar} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {RiStarSLine} from "react-icons/ri"

const Auction = ({firstName,lastName,place,briefInformation,imageUrl,availability, competence}) => {

    return (
        <div className="auction">
            <div className="image">
                <img src={imageUrl} alt= '' />
            </div>
            <div className="info-container">
                <div className="personalInfo">
                    <p className="boldText">{firstName} {lastName}</p>
                    <p><GoLocation/>{place}</p>
                    <p><AiFillCalendar/>{availability}</p>
                    <p><RiStarSLine/></p>
                    <p><RiStarSLine/></p>
                    <p><RiStarSLine/></p>
                    <p><RiStarSLine/></p>
                    <p><RiStarSLine/></p>
                    

                </div>
                <div className="briefInfo">
                    <p className="boldText">About me</p>
                    <p>{briefInformation}</p>
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