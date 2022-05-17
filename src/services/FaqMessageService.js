import axios from "axios";

// Original funktion
//const API_URL_MESSAGES = "http://localhost:8080/api/FAQ";

const API_URL_MESSAGES = "https://localhost:7065/api/FaqMessages";

class FaqMessageService {

    // Original funktionerna
    /* createMessage(newMessage){
        return axios.post(`${API_URL_MESSAGES}/messages`, newMessage, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    getAllMessages() {
        return axios.get(`${API_URL_MESSAGES}/allmessages`);
    } */

    // C#/.Net Microservice
    AddMessage(newMessage){
        return axios.post(`${API_URL_MESSAGES}/messages`, newMessage, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    GetAllMessages() {
        return axios.get(`${API_URL_MESSAGES}/allmessages`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

}

export default new FaqMessageService();

/* import axios from "axios";

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const URL_API = "http://localhost:5099/api/Destination/"

const getAllDestinations = () => {
    return axios.get(URL_API)
}

const DeliveryService ={
    getAllDestinations
}

export default DeliveryService; */
