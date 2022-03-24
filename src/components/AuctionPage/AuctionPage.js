import AuctionForm from "./AuctionForm";
import "./AuctionPage.css";

const AuctionPage = () => {
  return (
    <form className="main">
      <div className="zero">
        <div className="one">
          <img src="img/temporary.png" alt="profilpic"></img>
          <h2>Mr.Duck Flopper</h2>
          <p>Good @</p>
          <ul>
            <li>HTML/CSS</li>
            <li>JS</li>
            <li>Python</li>
          </ul>
        </div>
        <AuctionForm />
        <div className="two">
          <p>Name</p>
          <p>components:</p>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
          <p>DATE</p>
          <p></p>
        </div>
        <div className="three">
          <h2>three</h2>
        </div>
      </div>
      <div className="four">
        <h1>FOUR</h1>
      </div>
    </form>
  );
};
export default AuctionPage;
