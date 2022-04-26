import axios from "axios";

const API_URL_COMPANIES = "http://localhost:8080/api/companies";

class CompanyService {

  getCompanyById(companyId) {
    return axios.get(`${API_URL_COMPANIES}/getCompanyById/${companyId}`, {});
  }

  getAllCompanies() {
    return axios.get(`${API_URL_COMPANIES}/all`, {
    });
  }
}

export default new CompanyService();