import React, { useState } from "react";

const AuctionForm = () => {
  const [enteredOffer, setEnteredOffer] = useState("");

  const offerChangeHandler = (event) => {
    setEnteredOffer(event.target.value);
  };

  return (
    <form className="auction__bidding">
      <div className="bidding__info">
        <div className="leading__offer">
          <lable>Ledande bud</lable>
          <p>665 kr/h</p>
        </div>
        <div className="end__time">
          <lable>Slutar 9 maj 19:53</lable>
          <p> 4mån kvar</p>
        </div>
        <div classname="number_of_bids">
          <lable>Antal bud</lable>
          <p>5 st</p>
        </div>
      </div>
      <lable>Lägg 685kr/h eller mer</lable>
      <input type={number} onChange={offerChangeHandler}></input>
      <button type="submit">Lägg bud</button>
      <button>Like</button>
    </form>
  );
};

export default AuctionForm;
