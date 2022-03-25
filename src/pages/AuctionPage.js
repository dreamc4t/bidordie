import useFetch from "../customHooks/useFetch";

const AuctionPage = (props) => {
  // const request = ({ endpoint, method, data }) => {
  //   fetch(endpoint, {
  //     body: JSON.stringify(data),
  //     method,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  // const getAuction = (data) => {
  //   request({
  //     endpoint: "http://localhost:6001/auctions",
  //     method: "GET",
  //     data,
  //   });
  // };

  const { data: auctions } = useFetch("http://localhost:6001/auctions");

  let auctionId,
    startTime,
    endTime,
    openingPrice,
    buyoutPrice,
    currentBid,
    userId = "";

  auctions &&
    auctions.map((auction) => {
      if (auction.id === 1) {
        startTime = auction.startTime;
        endTime = auction.endTime;
        openingPrice = auction.openingPrice;
        buyoutPrice = auction.buyoutPrice;
        currentBid = auction.currentBid;
        userId = auction.userId;
      }
    });

  // const getUser = (data) => {
  //   request({
  //     endpoint: "http://localhost:6001/users",
  //     method: "GET",
  //     data,
  //   });
  // };

  const { data: users } = useFetch("http://localhost:6001/users");

  let firstName,
    lastName,
    email,
    imageUrl,
    phone,
    address,
    zipCode,
    town,
    github,
    linkedin,
    otherInfo,
    competence = "";

  // users.map((user) => {
  //   if (user.id === userId) {
  //     firstName = user.firstName;
  //     lastName = user.lastName;
  //     email = user.email;
  //     imageUrl = user.imageUrl;
  //     phone = user.phone;
  //     address = user.address;
  //     zipCode = user.zipCode;
  //     town = user.town;
  //     github = user.github;
  //     linkedin = user.linkedin;
  //     otherInfo = user.otherInfo;
  //     competence = user.competence;
  //   }
  // });

  // const firstName = "Dennis";
  // const lastName = "Hasselnöt";
  // const imageUrl = "/img/dennis.jpg";
  // const otherInfo = "Hemligt kär i Erik";
  // const competence = ["React", "Javascript", "Python"];

  const SecondPage = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);

};

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
              <p>{currentBid}</p>
            </div>
            <div className="end__time">
              <label>{endTime}</label>
              <p> 4mån kvar</p>
            </div>
            <div className="number_of_bids">
              <label>Antal bud</label>
              <p>5st</p>
            </div>
            <div className="butOut">
              <label>Köp ut</label>
              <p>{buyoutPrice}</p>
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
