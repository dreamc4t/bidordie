import axios from "axios";

// const API_URL_USERS = "http://localhost:8080/api/users";
import { API_URL_USERS } from "../constants/urlConstants"; 


class UserService {

  getUserById(userId) {
      return axios.get(`${API_URL_USERS}/getUserById/${userId}`, {
      })
  }

  getAuctionUserById(userId) {
    return axios.get(`${API_URL_USERS}/getAuctionUserById/${userId}`, {
    })
  }

  getAllUsers() {
    return axios.get(`${API_URL_USERS}/all`, {
    });
  }

  deleteUserByid(userId) {
    return axios.delete(`${API_URL_USERS}/deleteUserById${userId}`, {
    })
  }
}

export default new UserService();