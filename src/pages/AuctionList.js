//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";

const AuctionList = ({}) => {


    return(
        <div className="auction-list">
            <SortBar />
            <div className="auction-container">
            <Auction 
                firstName={"Erik"}
                lastName={"Sund"}
                place= {"Malmö"}
                availability={"1th-30th may"}
                competence={"Java, HTML/CSS, Python, SQL, JavaScript"}
                briefInformation={"Hej! Jag är en glad, trevlig och driven programmerare som älskar utmaningar. Jag håller huvudet kallt under pressade situationer och kan komma med egna idéer."} />
            </div>
        </div>
    );

};

export default AuctionList;