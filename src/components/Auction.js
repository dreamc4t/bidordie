import {GoLocation} from "react-icons/go"
import {AiFillCalendar} from "react-icons/ai"

const Auction = ({firstName,lastName,place,briefInformation,imageUrl,availability, competence}) => {

    return (
        <div className="auction">
            <div className="image">
                <img src={"imageURL"} alt= '' />
            </div>
            <div className="personalInfo">
                </div><h4>{firstName} {lastName}</h4>
                <p><GoLocation/>{place}</p>
                <p><AiFillCalendar/>{availability}</p>
            <div/>
            
            <div className="briefInfo">
                <h4>Info</h4>
                <p>{briefInformation}</p>
                <p>Competence: {competence}</p>
            </div>
            <div className="btn">
            <button>
                <a> More info</a>
            </button>
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