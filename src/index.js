import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./pages/CSS/login-page.css";
import "./pages/CSS/becomeAMember.css";
import "./pages/CSS/aboutUs.css";
import "./pages/CSS/AuctionList.css";
import "./pages/CSS/faq.css";
import "./pages/CSS/AddAuctionPage.css";
import "./components/CSS/header.css";
import "./components/CSS/footer.css";
import "./components/CSS/SortBar.css";
import "./components/CSS/button-element.css";
import "./pages/CSS/profile-page.css";
import "./pages/CSS/loginOther.css";
import "./components/CSS/auction.css";
import "./components/CSS/popUp.css";
import "./pages/CSS/AuctionPage.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
