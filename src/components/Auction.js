import {GoLocation} from "react-icons/go"
import {AiFillCalendar} from "react-icons/ai"
import {StarRating} from "react-star-rating-element"

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
                </div>
                <div className="Wrapper">
                    <StarRating
                        ratingValue={rating}
                        changeRating={setRating}
                        starEmptyColor="#999999"
                        starSpacing={10}
                        starDimension={30} />
                </div>

                
                <div className="briefInfo">
                    <p className="boldText">About me</p>
                    <p>{briefInformation}</p>
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

export default Auction 