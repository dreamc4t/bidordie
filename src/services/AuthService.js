import axios from "axios";

const API_URL_AUTH = "http://localhost:8080/api/users";

class AuthService {
  login(loginRequest) {
    return axios.post(`${API_URL_AUTH}/signin`, loginRequest);
  }

  getUserById(userId) {
      return axios.get(`${API_URL_AUTH}/getUserById/${userId}`, {
      })
  }

  getAllUsers() {
    return axios.get(`${API_URL_AUTH}/all`, {
    });
}
}

export default new AuthService();