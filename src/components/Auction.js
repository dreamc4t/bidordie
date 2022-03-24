import {GoLocation} from "react-icons/go"
import {AiFillCalendar} from "react-icons/ai"
import useFetch from "../customHooks/useFetch";

const Auction = ({ auction }) => {

    const { data: users } = useFetch("http://localhost:6001/users");

    const auctionUser = null
    for(const user of users) {
        if (auction.userId === user.id) {
            auctionUser = user
        }
    }
    if(auctionUser === null) console.log('Could not find a userID of auction')

    return (
        <div className="auction">
            <div className="image">
                <img src={auctionUser.imageUrl} alt= '' />
            </div>
            <div className="info-container">
                <div className="personalInfo">
                    <p className="boldText">{auctionUser.firstName} {auctionUser.lastName}</p>
                    <p><GoLocation/>{auctionUser.town}</p>
                    <p><AiFillCalendar/>From {auction.startTime} to {auction.endTime}</p>
                </div>
                
                <div className="briefInfo">
                    <p className="boldText">About me</p>
                    <p>{auctionUser.otherInfo}</p>
                    <p className="comp">Competence: {auctionUser.competence}</p>
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