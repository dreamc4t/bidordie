//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";

const AuctionList = ({}) => {


    return(
        <div className="auction-list">
            <SortBar />
            <div className="auction-container">
                <Auction />
            </div>
        </div>
    );

};

export default AuctionList;