import axios from "axios";

// const API_URL_AUTH = "http://localhost:8080/api/auth";
import { API_URL_AUTH } from "../constants/urlConstants"; 


class AuthService {
  login(loginRequest) {
    return axios.post(`${API_URL_AUTH}/signin`, loginRequest);
  }
}

export default new AuthService();