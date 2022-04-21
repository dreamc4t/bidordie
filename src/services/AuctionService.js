import axios from "axios";

const API_URL_AUCTIONS = "http://localhost:8080/api/auctions";

class AuctionService {

    createAuction(newAuction){
        return axios.post(`${API_URL_AUCTIONS}/create`, {
            data: newAuction,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    getAllAuctions() {
        return axios.get(`${API_URL_AUCTIONS}/all`);
    }
    
    getAuctionById(auctionId) {
        return axios.get(`${API_URL_AUCTIONS}/getAuctionById/${auctionId}`)
    }

}

export default new AuctionService();