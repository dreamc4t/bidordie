import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api/auctions";

class AuctionService {


    createAuction(newAuction){
        return axios.post(`${API_URL_TEST}/create`, newAuction);
    }


}

export default new AuctionService();