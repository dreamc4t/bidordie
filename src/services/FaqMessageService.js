import axios from "axios";

const API_URL_MESSAGES = "http://localhost:8080/api/FAQ";

class FaqMessageService {

    createMessage(newMessage){
        return axios.post(`${API_URL_MESSAGES}/messages`, newMessage, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    getAllMessages() {
        return axios.get(`${API_URL_MESSAGES}/allmessages`);
    }

}

export default new FaqMessageService();
