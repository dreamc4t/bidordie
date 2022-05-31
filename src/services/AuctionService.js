import axios from "axios";

import { API_URL_AUCTIONS } from "../constants/urlConstants"; 

// const API_URL_AUCTIONS = "http://localhost:8080/api/auctions";

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

    placeBid(auctionOwnerId, bidderId, amount) {
        return axios({
            method: 'post',
            url: `${API_URL_AUCTIONS}/placeBid/${auctionOwnerId}`,
            data: {
                bidderId: bidderId,
                amount: amount
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

}

export default new AuctionService();