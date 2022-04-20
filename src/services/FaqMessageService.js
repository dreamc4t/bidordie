import axios from "axios";

const API_URL_AUCTIONS = "http://localhost:8080/api/FAQ";

class FaqMessageService {

    createMessage(newMessage){
        return axios.post(`${API_URL_AUCTIONS}/messages`, newMessage);
    }

    getAllMessages() {
        return axios. get(`${API_URL_AUCTIONS}/allmessages`);
    }

}

export default new FaqMessageService();
