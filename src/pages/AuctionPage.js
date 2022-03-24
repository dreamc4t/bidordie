const AuctionPage = (props) => {
  const firstName = "Dennis";
  const lastName = "Hasselgren";
  const imageUrl = "/img/dennis.jpg";
  const otherInfo = "Hemligt kär i Erik";
  const competence = ["React", "Javascript", "Python"];

  return (
    <div>
      <div className="auction__page">
        <div className="AuctionPersonInfo">
          <img src={imageUrl} alt="image of {firstName} " width="250"></img>
        </div>

        <form className="auction__form">
          <div className="bidding__info">
            <div className="leading__offer">
              <label>Ledande bud</label>
              <p>2656</p>
            </div>
            <div className="end__time">
              <label>Slutar 9 maj 19:53</label>
              <p> 4mån kvar</p>
            </div>
            <div className="number_of_bids">
              <label>Antal bud</label>
              <p>5st</p>
            </div>
            <div className="butOut">
              <label>Köp ut</label>
              <p></p>
            </div>
          </div>
          <label className="lowest__offer__tomake">
            Lägg 685kr/h eller mer
          </label>
          <div className="bid_container">
            <input type="text"></input>
            <button type="submit">Lägg bud</button>
            <button>Like</button>
          </div>
        </form>
      </div>
      <div className="description__container">
        <h2>
          {firstName} {lastName}
        </h2>
        <h5>Beskrivning</h5>
        <p>{otherInfo}</p>
      </div>
      <div className="question__container">
        <input
          className="question__input"
          placeholder="Ask a question!"
          type="text"
        ></input>
        <button className="question__button" type="submit">
          ASK!
        </button>
      </div>
      <div className="question_list_container">
        <ul className="qustion_list"> </ul>
      </div>
    </div>
  );
};

export default AuctionPage;
