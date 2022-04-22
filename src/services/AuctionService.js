import axios from "axios";

const API_URL_AUCTIONS = "http://localhost:8080/api/auctions";

class AuctionService {

    createAuction(newAuction, ownerId){
        return axios.post(`${API_URL_AUCTIONS}/create/${ownerId}`, newAuction);
    }

    getAllAuctions() {
        return axios.get(`${API_URL_AUCTIONS}/all`, { 
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
    
    getAuctionById(auctionId) {
        return axios.get(`${API_URL_AUCTIONS}/getAuctionById/${auctionId}`)

    }

}

export default new AuctionService();