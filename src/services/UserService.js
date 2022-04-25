import axios from "axios";

const API_URL_USERS = "http://localhost:8080/api/users";

class UserService {

  getUserById(userId) {
      return axios.get(`${API_URL_USERS}/getUserById/${userId}`, {
      })
  }

  getAllUsers() {
    return axios.get(`${API_URL_USERS}/all`, {
    });
}
}

export default new UserService();